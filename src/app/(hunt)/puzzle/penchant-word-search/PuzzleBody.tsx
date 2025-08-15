"use client";
import { useState, useEffect, useRef } from "react";

type Cell = string;
type Grid = Cell[][];

const SIZE = 6;
const DICT_URL = "https://www.spreadthewordlist.com/";

const PROBS = new Map<string, { p: number; a: string; b: string }>([
  ["0,0", { p: 38961/103682, a: "C", b: "L" }],
  ["0,1", { p: 2/5, a: "J", b: "O" }],
  ["0,2", { p: 3/10, a: "E", b: "O" }],
  ["0,3", { p: 36926/114243, a: "N", b: "V" }],
  ["0,4", { p: 26531/100383, a: "B", b: "H" }],
  ["0,5", { p: 1/2, a: "H", b: "N" }],
  ["1,0", { p: 1/3, a: "U", b: "X" }],
  ["1,1", { p: 1096/42837, a: "C", b: "V" }],
  ["1,2", { p: 1/2, a: "P", b: "X" }],
  ["1,3", { p: 2268/53197, a: "A", b: "O" }],
  ["1,4", { p: 1/4, a: "N", b: "R" }],
  ["1,5", { p: 28323/99907, a: "C", b: "K" }],
  ["2,0", { p: 3/8, a: "R", b: "Z" }],
  ["2,1", { p: 1/3, a: "C", b: "F" }],
  ["2,2", { p: 3/8, a: "A", b: "I" }],
  ["2,3", { p: 36926/114243, a: "L", b: "T" }],
  ["2,4", { p: 3/8, a: "J", b: "R" }],
  ["2,5", { p: 1/3, a: "S", b: "V" }],
  ["3,0", { p: 2/7, a: "B", b: "I" }],
  ["3,1", { p: 9897/38804, a: "I", b: "S" }],
  ["3,2", { p: 38961/103682, a: "Q", b: "Z" }],
  ["3,3", { p: 36926/114243, a: "A", b: "I" }],
  ["3,4", { p: 1/3, a: "K", b: "T" }],
  ["3,5", { p: 3/10, a: "F", b: "P" }],
  ["4,0", { p: 28657/103682, a: "C", b: "M" }],
  ["4,1", { p: 16205/68833, a: "D", b: "N" }],
  ["4,2", { p: 28657/103682, a: "K", b: "P" }],
  ["4,3", { p: 26531/100383, a: "S", b: "Y" }],
  ["4,4", { p: 1/2, a: "C", b: "E" }],
  ["4,5", { p: 28657/103682, a: "N", b: "S" }],
  ["5,0", { p: 1/2, a: "U", b: "W" }],
  ["5,1", { p: 28657/103682, a: "O", b: "Y" }],
  ["5,2", { p: 1/2, a: "W", b: "Y" }],
  ["5,3", { p: 1/2, a: "L", b: "P" }],
  ["5,4", { p: 3/7, a: "E", b: "L" }],
  ["5,5", { p: 5388/108151, a: "E", b: "R" }],
]);

const PATHS = [
  { r: 0, c: 0, dr: +1, dc: 0 },
  { r: 5, c: 0, dr: 0, dc: +1 },
  { r: 5, c: 4, dr: -1, dc: -1 },
  { r: 2, c: 1, dr: 0, dc: +1 },
  { r: 2, c: 5, dr: +1, dc: -1 },
  { r: 5, c: 2, dr: -1, dc: 0 },
  { r: 1, c: 2, dr: +1, dc: +1 },
  { r: 4, c: 5, dr: -1, dc: 0 },
  { r: 0, c: 5, dr: 0, dc: -1 },
];

const blankGrid = (): Grid =>
  Array.from({ length: SIZE }, () => Array(SIZE).fill(" "));

function letterToNumber(ch: string): number {
  const code = ch.charCodeAt(0);
  return code >= 65 && code <= 90 ? code - 64 : 0;
}

function sampleCell(r: number, c: number): string {
  const spec = PROBS.get(`${r},${c}`);
  if (!spec) return "?";
  return Math.random() < spec.p ? spec.a : spec.b;
}

function fillRemaining(grid: Grid): Grid {
  const newGrid = grid.map((row) => [...row]);
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (newGrid[r][c] === " ") newGrid[r][c] = sampleCell(r, c);
    }
  }
  return newGrid;
}

function cellsAlong(
  r0: number,
  c0: number,
  dr: number,
  dc: number,
  r1: number,
  c1: number
): [number, number][] | null {
  const cells: [number, number][] = [];
  let r = r0,
    c = c0;
  const guard = 100;
  let steps = 0;
  while (true) {
    if (r < 0 || r >= SIZE || c < 0 || c >= SIZE) return null;
    cells.push([r, c]);
    if (r === r1 && c === c1) break;
    r += dr;
    c += dc;
    steps++;
    if (steps > guard) return null;
  }
  return cells;
}

const SEG_LENS: number[] = (() => {
  const lens: number[] = [];
  for (let i = 0; i < PATHS.length; i++) {
    const s = PATHS[i];
    const t = i < PATHS.length - 1 ? PATHS[i + 1] : PATHS[0];
    const seg = cellsAlong(s.r, s.c, s.dr, s.dc, t.r, t.c);
    lens.push(seg ? seg.length : 0);
  }
  return lens;
})();

function placeWordsOrFail(words: string[]): { ok: true; grid: string[][] } | { ok: false } {
  const grid = blankGrid();
  for (let i = 0; i < words.length; i++) {
    if (i >= PATHS.length) return { ok: false };
    const w = words[i];
    const s = PATHS[i];
    const t = i < PATHS.length - 1 ? PATHS[i + 1] : PATHS[0];
    const seg = cellsAlong(s.r, s.c, s.dr, s.dc, t.r, t.c);
    if (!seg || w.length !== seg.length) return { ok: false };
    for (let k = 0; k < seg.length; k++) {
      const [r, c] = seg[k];
      const ch = w[k];
      if (grid[r][c] !== " " && grid[r][c] !== ch) return { ok: false };
      grid[r][c] = ch;
    }
  }
  return { ok: true, grid };
}

export default function PuzzleBody() {
  const [words, setWords] = useState("");
  const [showLetters, setShowLetters] = useState(false);
  const [lastGrid, setLastGrid] = useState<Grid | null>(null);
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState<Grid[]>([]);
  const [unlocked, setUnlocked] = useState(false);

  const dictionary = useRef<Set<string> | null>(null);

  useEffect(() => {
    fetch("/swl.txt")
      .then((res) => res.text())
      .then((text) => {
        dictionary.current = new Set(
          text
            .split(/\s+/)
            .map((w) => w.split(";", 1)[0].trim().toUpperCase())
            .filter(Boolean)
        );
      })
      .catch(() => {
        console.error("Failed to load dictionary");
      });
  }, []);

  const renderGridTable = (grid: Grid) => (
    <table className="border-collapse mb-6 border-2 border-white/80 rounded-lg overflow-hidden">
      <tbody>
        {grid.map((row, ri) => (
          <tr key={ri}>
            {row.map((ch, ci) => {
              const display = showLetters
                ? ch.trim() || ""
                : ch.trim()
                ? String(letterToNumber(ch))
                : "";
              return (
                <td
                  key={ci}
                  className="w-12 h-12 border border-white/80 text-center font-bold font-mono text-base md:text-lg select-none text-white"
                >
                  {display || "\u00A0"}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );

  const onGenerate = () => {
    setMessage("");
    if (!dictionary.current) {
      setMessage("Loading dictionary… please try again in a moment.");
      return;
    }

    const list = words
      .split(/\r?\n/)
      .map((s) => s.trim().toUpperCase())
      .filter(Boolean);
    if (list.length > 9) {
      setMessage("Please enter no more than 9 words.");
      return;
    }

    const missing = list.filter((w) => !dictionary.current!.has(w));
    if (missing.length > 0) {
      setMessage(`Not in dictionary. See ${DICT_URL} for allowed words.`);
      return;
    }

    for (let i = 0; i < list.length; i++) {
      if (list[i].length !== SEG_LENS[i]) {
        setMessage(`word ${i + 1} is the wrong length.`);
        return;
      }
    }

    const result = placeWordsOrFail(list);
    if (!result.ok || !result.grid) {
      setMessage("Sorry, those words are inconsistent with each other.");
      return;
    }

    const fullGrid = fillRemaining(result.grid);
    setLastGrid(fullGrid);
    setHistory((h) => [...h, fullGrid]);
    if (list.length === 9 && !unlocked) {
      setUnlocked(true);
    }
  };

  const onCopy = async () => {
    setMessage("Generating 10000 grids…");
    const lines: string[] = [];
    for (let i = 0; i < 10000; i++) {
      const g = fillRemaining(blankGrid());
      const nums: string[] = [];
      for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
          nums.push(String(letterToNumber(g[r][c])));
        }
      }
      lines.push(nums.join(" "));
    }
    const header =
      "";
    const payload = [header, ...lines].join("\n");

    try {
      await navigator.clipboard.writeText(payload);
      setMessage("Copied 10000 grids! For compactness, each grid is formatted as a single line of 36, space-separated numbers. The first six numbers are from the first row (left to right), the second six are from the second row, and so on...");
    } catch (err) {
      setMessage("Copy failed.");
    }
  };

  return (
    <div className="font-medium text-lg/6">
      <p className="max-w-3xl font-medium mb-4 text-center">
          <i>Please don't look at the source code. This message is not part of the puzzle.</i>
        </p>
      <p className="max-w-3xl font-medium mb-4 text-center">
          It can be hard to find a compromise... but in the end, the truth
          usually lies at the extremes.
        </p>
      <div id="gridContainer" className="mt-2 flex justify-center">
        {lastGrid ? renderGridTable(lastGrid) : renderGridTable(blankGrid())}
      </div>

      <div className="w-full max-w-3xl flex flex-col items-center gap-4 mt-6">
        <label htmlFor="words" className="font-medium text-white/90">
          Enter Words (0-9):
        </label>
        <textarea
          id="words"
          rows={8}
          value={words}
          onChange={(e) => setWords(e.target.value)}
          className="w-full rounded-xl bg-white/10 text-white placeholder-white/60 ring-1 ring-white/20 focus:outline-none focus:ring-2 focus:ring-white/60 border border-white/30 p-4 font-mono text-base leading-6"
          placeholder="One word per line"
          spellCheck="false"
          autoCapitalize="off"
          autoComplete="off"
          autoCorrect="off"
        />

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onGenerate}
            className="px-5 py-2.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform active:scale-95 select-none shadow"
          >
            Generate Grid
          </button>
          <label className="inline-flex items-center gap-2 select-none text-white/90">
            <input
              type="checkbox"
              checked={showLetters}
              onChange={(e) => setShowLetters(e.target.checked)}
              className="h-4 w-4 accent-blue-400"
            />
            display as letters
          </label>
        </div>

        {unlocked && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onCopy}
              className="px-3 py-1.5 bg-white/10 text-white rounded-lg ring-1 ring-white/30 hover:bg-white/20 active:scale-95"
            >
              Copy 10000 grids
            </button>
          </div>
        )}

        <div className="text-white/90 text-sm" aria-live="polite">
          {message}
        </div>
      </div>
    </div>
  );
}