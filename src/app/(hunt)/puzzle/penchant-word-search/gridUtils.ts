export const SIZE = 6;

export function blankGrid(): string[][] {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(" "));
}

export function letterToNumber(ch: string): number {
  const code = ch.charCodeAt(0);
  return code >= 65 && code <= 90 ? code - 64 : 0;
}

export function sampleCell(
  r: number,
  c: number,
  PROBS: Map<string, { p: number; a: string; b: string }>
): string {
  const key = `${r},${c}`;
  const spec = PROBS.get(key);
  return spec ? (Math.random() < spec.p ? spec.a : spec.b) : "?";
}

export function fillRemaining(
  grid: string[][],
  PROBS: Map<string, { p: number; a: string; b: string }>
): string[][] {
  return grid.map((row, r) =>
    row.map((cell, c) => (cell === " " ? sampleCell(r, c, PROBS) : cell))
  );
}

export function cellsAlong(
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
  while (true) {
    if (r < 0 || r >= SIZE || c < 0 || c >= SIZE) return null;
    cells.push([r, c]);
    if (r === r1 && c === c1) break;
    r += dr;
    c += dc;
    if (cells.length > guard) return null;
  }
  return cells;
}