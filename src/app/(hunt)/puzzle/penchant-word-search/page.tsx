import DefaultPuzzlePage from "@/puzzle/components/puzzle/DefaultPuzzlePage";
import * as data from "./data";
import PuzzleBody from "./PuzzleBody";

export default async function Page({
  searchParams,
}: {
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <DefaultPuzzlePage
      puzzleId={data.puzzleId}
      inPersonBody={<PuzzleBody />}
      remoteBoxBody={<PuzzleBody />}
      remoteBody={<PuzzleBody />}
      copyText={data.copyText}
      partialSolutions={data.partialSolutions}
      tasks={data.tasks}
      interactionMode={searchParams?.interactionMode}
    />
  );
}
