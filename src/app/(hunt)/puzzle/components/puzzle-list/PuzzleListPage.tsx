"use client";
import PuzzleTable from "./PuzzleTable";
import EventTable from "./event/EventTable";
import { Round } from "~/hunt.config";

export type AvailablePuzzle = {
  unlockTime: Date | null;
  id: string;
  name: string;
  answer: string;
};

export type SolvedPuzzle = { puzzleId: string };

export type AvailableEvent = {
  id: string;
  name: string;
  answer: string;
  description: string;
  startTime: string;
};

export type FinishedEvent = {
  eventId: string;
  puzzleId: string | null;
};

type PuzzleListPageProps = {
  availablePuzzles: AvailablePuzzle[];
  solvedPuzzles: SolvedPuzzle[];
  availableRounds: Round[];
  availableEvents: AvailableEvent[];
  finishedEvents: FinishedEvent[];
  hasEventInputBox: boolean;
  hasFinishedHunt: boolean;
  isInPerson: boolean;
};

export default function PuzzleListPage({
  availablePuzzles,
  solvedPuzzles,
  availableRounds,
  availableEvents,
  finishedEvents,
  hasEventInputBox,
  hasFinishedHunt,
  isInPerson,
}: PuzzleListPageProps) {
  return (
    <div className="grid min-h-[calc(100vh-56px-32px)]">
      {/* Table content */}
      <div
        className={
          "z-10 col-start-1 row-start-1 block bg-main-bg bg-gradient-to-t from-layout-gradient to-main-bg"
        }
      >
        <div className="mx-auto mb-6 flex w-full max-w-3xl grow flex-col items-center p-4 pt-6">
          <h1 className="mb-2">Puzzles</h1>

          {hasFinishedHunt && (
            <div>
              <p className="text-base italic text-main-text">
                FIXME FINISHING{" "}
              </p>
            </div>
          )}

          {/* Puzzle table */}
          <div className="w-full">
            <PuzzleTable
              availableRounds={availableRounds}
              availablePuzzles={availablePuzzles}
              solvedPuzzles={solvedPuzzles}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
