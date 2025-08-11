'use client';
import { useState, useTransition } from 'react';
import { generateGridFromWords } from './actions';
import { letterToNumber } from './gridUtils';

export default function PuzzleBody() {
  const [wordsText, setWordsText] = useState('');
  const [grid, setGrid] = useState<string[][] | null>(null);
  const [message, setMessage] = useState('');
  const [copyStatus, setCopyStatus] = useState('');
  const [showLetters, setShowLetters] = useState(false);
  const [isPending, startTransition] = useTransition();

  const onGenerate = () => {
    setMessage('');
    startTransition(async () => {
      const result = await generateGridFromWords(wordsText);
      if (result.ok) {
        setGrid(result.grid);
      } else {
        setGrid(null);
        setMessage(result.error);
      }
    });
  };

  const onCopy = async () => {
    if (!grid) return;
    const text = formatGrid(grid, showLetters);
    try {
        await navigator.clipboard.writeText(text);
        setCopyStatus('Copied to clipboard!');
    } catch (err) {
        setCopyStatus('Copy failed.');
    }

    setTimeout(() => setCopyStatus(''), 2000); // clear status after 2 sec
    };

  function formatGrid(grid: string[][], asLetters: boolean): string {
    return grid
        .map((row) =>
        row
            .map((ch) => {
            if (!ch.trim()) return ' ';
            return asLetters ? ch : String(letterToNumber(ch));
            })
            .join(' ')
        )
        .join('\n');
    }

  return (
    <div className="mb-6 max-w-3xl flex flex-col items-center gap-6">
    <div className="max-w-3xl font-medium mb-4 text-center">
        It can be hard to find a compromise... but in the end, the truth usually lies at the extremes.
    </div>
      {grid && (
        <table className="border-collapse">
          <tbody>
            {grid.map((row, r) => (
              <tr key={r}>
                {row.map((ch, c) => (
                  <td
                    key={c}
                    className="w-10 h-10 border border-slate-400 text-center font-bold font-mono text-sm select-none"
                  >
                    {showLetters ? ch || '\u00A0' : String(letterToNumber(ch))}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {grid && (
        <div className="flex flex-col items-center">
            <button
            onClick={onCopy}
            className="px-3 py-1.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 active:scale-95"
            >
            Copy word search
            </button>
            {copyStatus && (
            <span className="text-sm mt-2">{copyStatus}</span>
            )}
        </div>
        )}

      <div className="w-full max-w-lg flex flex-col gap-3">
        <textarea
          rows={8}
          className="w-full text-black rounded-lg border border-slate-300 p-3 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="One word per line"
          value={wordsText}
          onChange={(e) => setWordsText(e.target.value)}
          spellCheck="false"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
        />

        <div className="flex items-center gap-4">
          <button
            onClick={onGenerate}
            disabled={isPending}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-transform active:scale-95 disabled:opacity-50"
          >
            {isPending ? 'Generating…' : 'Generate Grid'}
          </button>

          <label className="inline-flex items-center gap-2">
            <input
              type="checkbox"
              checked={showLetters}
              onChange={(e) => setShowLetters(e.target.checked)}
              className="h-4 w-4 text-indigo-600"
            />
            display as letters
          </label>
        </div>

        {message && (
          <div className="text-slate-600 text-sm" aria-live="polite">
            {message}
          </div>
        )}
      </div>
    </div>
  );
}