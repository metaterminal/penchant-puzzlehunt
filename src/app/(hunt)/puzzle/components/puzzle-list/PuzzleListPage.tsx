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
            <div className="space-y-4 mt-4">
              <Image src={img1} alt="" className="w-full max-w-3xl mx-auto mb-4" />
              <p className="text-6xl text-center italic mb-4">Thanks for Playing!</p>
              <Image src={img2} alt="" className="w-full max-w-3xl mx-auto mb-4" />
              <p className="text-xl italic text-main-text text-center">
                🎉🎉🎉 Congratulations on finishing Penchant Puzzlehunt :) 🎉🎉🎉{" "}
              </p>
              <p>We are thrilled could join us for this exciting anniversary celebration, a milestone in Penchant's history. You are now welcome to 
                join the <a href="https://discord.gg/zgS5jJuY57" className="underline">finishers Discord</a>. We also welcome any feedback, which you can submit with the form at the top of the site. 
              </p>
              <p>If you have any lingering questions about the hunt you'd like a Penchant representative to answer, check out their <a href="https://bsky.app/profile/tazarian.bsky.social" className="underline">Bluesky</a>!</p>
            </div>
          )}

          <h1 className="mb-2 mt-8">Puzzles</h1>

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
