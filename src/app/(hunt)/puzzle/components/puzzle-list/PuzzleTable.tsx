"use client";
import { Round, META_PUZZLES } from "~/hunt.config";

type puzzleList = {
  unlockTime: Date | null;
  id: string;
  name: string;
  answer: string;
}[];

const FEEDER_SLUGS = [
  "plainly-indicated",
  "petri-dish",
  "youre-missing-something",
  "reportedly",
  "gas-water-electricity",
  "rereading",
  "pen-paper-logic",
  "blank-matchmaker",
  "oh-just-a-criss-cross",
  "ladders",
];

export default function PuzzleTable({
  availableRounds,
  availablePuzzles,
  solvedPuzzles,
}: {
  availableRounds: Round[];
  availablePuzzles: puzzleList;
  solvedPuzzles: { puzzleId: string }[];
}) {
  return (
    <div>
      {availableRounds.map((round) => {
        const isFeeders = round.name === "Feeders";

        const puzzlesToShow = isFeeders
          ? FEEDER_SLUGS.map((id) =>
              availablePuzzles.find((p) => p.id === id) ?? {
                id: id,
                name: "???",
                answer: "",
              },
            )
          : availablePuzzles
              .filter((puzzle) => round.puzzles.includes(puzzle.id))
              .sort((a, b) =>
                META_PUZZLES.includes(a.id)
                  ? META_PUZZLES.includes(b.id)
                    ? a.name.localeCompare(b.name)
                    : -1
                  : META_PUZZLES.includes(b.id)
                  ? 1
                  : a.name.localeCompare(b.name),
              );

        return (
          <div key={round.name}>
            <h2 className="m-1 pb-2 pt-4 text-center text-xl font-semibold">
              {round.name}
            </h2>
            <div className="w-full overflow-hidden rounded-md text-sm font-medium">
              <div className="grid grid-cols-2 p-2">
                <p className="text-secondary-text">Puzzle</p>
                <p className="text-secondary-text">Answer</p>
              </div>

              {puzzlesToShow.map((puzzle) => {
                const isUnlocked = puzzle.name !== "???";
                const isSolved = solvedPuzzles.some(
                  (sp) => sp.puzzleId === puzzle.id,
                );

                return (
                  <div key={puzzle.id}>
                    <hr className="w-full" />
                    {isUnlocked ? (
                      <a
                        href={`/puzzle/${puzzle.id}`}
                        className="grid grid-cols-2 p-2 transition-all hover:bg-white/5"
                      >
                        <span>{puzzle.name.trim()
                          ? isFeeders
                            ? <>
                                <span className="font-extrabold">{puzzle.name.trim()[0]}</span>
                                {puzzle.name.trim().slice(1)}
                              </>
                            : puzzle.name.trim()
                          : '\u200b'}</span>
                        {isSolved && (
                          <p className="truncate text-ellipsis text-correct-guess">
                            {puzzle.answer}
                          </p>
                        )}
                      </a>
                    ) : (
                      <div className="grid grid-cols-2 p-2 text-muted">
                        <p className="italic">???</p>
                        <p></p>
                      </div>
                    )}
                  </div>
                );
              })}

              <hr className="w-full" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
