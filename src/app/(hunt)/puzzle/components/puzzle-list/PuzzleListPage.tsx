"use client";
import PuzzleTable from "./PuzzleTable";
import EventTable from "./event/EventTable";
import { Round } from "~/hunt.config";
import Image from "next/image";

import img1 from "./img1.png";
import img2 from "./img2.png";

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
};

export default function PuzzleListPage({
  availablePuzzles,
  solvedPuzzles,
  availableRounds,
  availableEvents,
  finishedEvents,
  hasEventInputBox,
  hasFinishedHunt,
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

          {hasFinishedHunt && (
            <div className="space-y-4">
              <Image src={img1} alt="" className="w-full max-w-3xl mx-auto mb-4" />
              <p className="text-6xl text-center italic mb-4">Thanks for Playing!</p>
              <Image src={img2} alt="" className="w-full max-w-3xl mx-auto mb-4" />
              <p className="text-xl italic text-main-text text-center">
                🎉🎉🎉 Congratulations on finishing Penchant Puzzlehunt! 🎉🎉🎉{" "}
              </p>
              <p>We are thrilled could join us for this exciting anniversary celebration, a milestone in Penchant's history. You are now welcome to 
                join the finishers Discord [LINK FIXME]. We also welcome feedback, which you can submit with the form at the top of the site. 
              </p>
            </div>
          )}

          <h1 className="my-2">Puzzles</h1>

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
