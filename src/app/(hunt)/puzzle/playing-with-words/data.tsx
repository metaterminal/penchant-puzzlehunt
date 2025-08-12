/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "playing-with-words";

import Grid from "~/app/(hunt)/puzzle/components/puzzle/grid"


/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */


const content = [
  ['','','','','','','','','5','','','','','',''],
  ['','','6','','','','','','','','','','','',''],
  ['','','','','','','','','','','','','','','9'],
  ['','','','','','','','','','','','','','',''],
  ['','','','','','','','','','','','','','',''],
  ['','','','','','','','','','','','','','',''],
  ['','','11','','','','','','','','','1','','',''],
  ['','','','','','','','','','','10','','','',''],
  ['','','','','','','','','','','','','','',''],
  ['','','','','','','','','','','','','','',''],
  ['','','2','','','','','','','','','','','',''],
  ['','','','','','','','8','','','','','','',''],
  ['','7','','','','','','','','3','','','','',''],
  ['','','','','4','','','','','','','','','',''],
  ['','','','','','','','','','','','','','',''],
]

export const inPersonBody = (
  <div>
    <div className="max-w-3xl space-y-4 text-center">
      <p>
        You're playing Scrabble (using the latest CSW24 wordlist) -- and, 
        <br></br>
        for added challenge, neither of you can use blanks.
        <br></br>
        <i>How can you guarantee a win?</i>
      </p>
      <p><i>Note: you may find that using an online board editor is helpful.</i></p>
    </div>
    <div className="py-4 max-w-3xl text-center">
      <ul className="list-none">
        <li>Player 1 plays <b className="text-red-500">___</b> downwards for 84 points.</li>
        <li>Player 1 plays ___ for 2 points.</li>
        <li><i>"That's not one of our answers!" says Player 2. "But don't worry, I'll fix it now."</i></li>
        <li>Player 2 plays <b className="text-red-500">___</b> for 119 points.</li>
        <li>Player 2 plays <b className="text-red-500">___</b>, also making ___, for 11 points.</li>
        <li>Player 1 plays ___ for 5 points.</li>
        <li><i>"That's not one of our answers!" says Player 2. "But don't worry, I'll fix it now."</i></li>
        <li>Player 2 plays <b className="text-red-500">___</b> for 64 points.</li>
        <li>Player 1 plays <b className="text-red-500">___</b> for 20 points.</li>
        <li>Player 2 plays <b className="text-red-500">___</b>, also making ___, for 11 points.</li>
        <li>Player 1 plays <b className="text-red-500">___</b>, also making ___ and ___, for 26 points.</li>
        <li>Player 2 plays <b className="text-red-500">___</b> for 12 points.</li>
        <li>Player 1 plays <b className="text-red-500">___</b> for 19 points.</li>
        <li>Player 2 plays <b className="text-red-500">___</b>, also making ___, for 12 points.</li>
        <li>Player 1 plays <b className="text-red-500">___</b> for 20 points.</li>
        <li>Player 2 plays ___, also making ___ and ___, for 16 points.</li>
        <li><i>"That's not one of our answers!" says Player 1. "But don't worry, I'll fix it now."</i></li>
        <li>Player 1 plays <b className="text-red-500">___</b> for 65 points.</li>
        <li>Player 2 plays <b className="text-red-500">___</b> for 16 points.</li>
      </ul>
    </div>
    <div className="py-8 flex justify-center">
      <Grid
        data={content} 
        lightBorder={true}
      />
    </div>
  </div>
);

export const remoteBoxBody = inPersonBody;

export const remoteBody = inPersonBody;

/**
 * The `solutionBody` renders in the solution page.
 * If there are no solutions available, set it null.
 */
export const solutionBody = (
  <div className="max-w-3xl">This is the solution.</div>
);

/**
 * The `authors` string renders below the `solutionBody`.
 */
export const authors = "noneuclidean, Thomas Gordon";

/**
 * The `copyText` should provide a convenient text representation of the puzzle
 * that can be copied to the clipboard. Set this to `null` to remove the copy button.
 */
export const copyText = null;

/**
 * The `partialSolutions` object is used to prompt solutions with significant progress.
 * Each key is a partial solution, and the value is the prompt to be displayed. Keys must
 * be in all caps, no spaces.
 */
export const partialSolutions: Record<string, string> = {};

/**
 * The `tasks` object is used for multi-part puzzles. When a certain answer is submitted,
 * more content will be added to the puzzle body. Keys must be in all caps, no spaces.
 */
export const tasks: Record<string, JSX.Element> = {};
