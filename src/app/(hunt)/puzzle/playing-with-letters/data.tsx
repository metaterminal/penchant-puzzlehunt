/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "playing-with-letters";

/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */
export const inPersonBody = (
   <div className="font-medium text-lg/6">
    <div className="max-w-3xl font-medium mb-4 text-center">
      Good idea!
    </div>
    <div className="mb-4 max-w-3xl text-center">
      You put all the tiles back in the Scrabble bag and then make each of the answers separately on the table in front of you.
    </div>
    <div className="mb-4 max-w-3xl text-center">
      <i>How are you going to win this?</i>
    </div>
    <br></br>
    <div className="mb-4 max-w-3xl text-center">
      18 &ensp;15 &ensp;3 &ensp;5 &ensp;19 &ensp;20 &ensp;4 &ensp;12 &ensp;8 &ensp;22 &ensp;2 &ensp;13 &ensp;21 &ensp;7 &ensp;6 &ensp;14 &ensp;9 &ensp;1 &ensp;17 &ensp;11 &ensp;16 &ensp;10
    </div>
  </div>
);

export const remoteBoxBody = inPersonBody;

export const remoteBody = inPersonBody;

/**
 * The `solutionBody` renders in the solution page.
 * If there are no solutions available, set it null.
 */
export const solutionBody = null; /*(
  <div className="max-w-3xl">This is the solution.</div>
);*/

/**
 * The `authors` string renders below the `solutionBody`.
 */
export const authors = "Josiah Carberry";

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
