'use server';
import * as fs from 'fs/promises';
import path from 'path';
import { blankGrid, fillRemaining, cellsAlong, SIZE } from './gridUtils';
import { PROBS, PATHS } from './constants';

type GenerateResult =
  | { ok: true; grid: string[][] }
  | { ok: false; error: string };

export async function generateGridFromWords(wordsText: string): Promise<GenerateResult> {
  const words = wordsText
    .split(/\r?\n/)
    .map((w) => w.trim().toUpperCase())
    .filter(Boolean);
  if (words.length > 9) {
    return { ok: false, error: 'Please enter no more than 9 words.' };
  }

  const dictPath = path.join(process.cwd(), 'public', 'swl.txt');
  const dictRaw = await fs.readFile(dictPath, 'utf-8');
  const swlSet = new Set(
    (dictRaw ?? '')
      .split(/\s+/)
      .map((w) => w.split(';', 1)[0].trim().toUpperCase())
      .filter(Boolean)
  );

  const missing = words.filter((w) => !swlSet.has(w));
  if (missing.length) {
    return { ok: false, error: `Not in dictionary: ${missing.join(', ')}` };
  }

  const segLens = PATHS.map((s, i) => {
    const t = i < PATHS.length - 1 ? PATHS[i + 1] : PATHS[0];
    const cells = cellsAlong(s.r, s.c, s.dr, s.dc, t.r, t.c);
    return cells?.length || 0;
  });

  for (let i = 0; i < words.length; i++) {
    if (words[i].length !== segLens[i]) {
      return { ok: false, error: `Word ${i + 1} is the wrong length.` };
    }
  }

  const grid = blankGrid();
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const s = PATHS[i];
    const t = i < PATHS.length - 1 ? PATHS[i + 1] : PATHS[0];
    const cells = cellsAlong(s.r, s.c, s.dr, s.dc, t.r, t.c);
    if (!cells || cells.length !== w.length) {
      return { ok: false, error: 'Inconsistent word placement.' };
    }
    for (let k = 0; k < cells.length; k++) {
      const [r, c] = cells[k];
      const existing = grid[r][c];
      if (existing !== ' ' && existing !== w[k]) {
        return { ok: false, error: 'Word placement conflict.' };
      }
      grid[r][c] = w[k];
    }
  }

  const finalGrid = fillRemaining(grid, PROBS);
  return { ok: true, grid: finalGrid };
}