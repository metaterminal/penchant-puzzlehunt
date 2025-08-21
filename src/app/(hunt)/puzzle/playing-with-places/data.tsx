/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "playing-with-places";

import { Answerize } from "../components/puzzle/monospace";

/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */
export const inPersonBody = (
  <div className="font-medium text-lg/6">
    <div className="max-w-3xl font-medium mb-4 text-center">
      You're about to challenge your rich uncle from the UK, but there's no utility in playing him at most things.
    </div>
    <div className="mb-4 max-w-3xl text-center">
      You count up all the colours and railroads. <i>What should you play in order to win?</i>
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
  <div className="max-w-3xl">
    <p className="mb-4">
      As clued by the flavortext (with mentions of railroads, colo(u)red properties, utilities, and a "rich uncle"), 
      this puzzle is about Monopoly! Specifically, it's about the UK version of Monopoly, which has different names 
      for all the properties.
    </p>
    <p className="mb-4">
      Looking at our puzzles and answers, we might notice two things: firstly, that the first letters of the puzzle titles 
      correspond to the colors in a Monopoly game; and secondly, that our answers clue properties of that color. 
      Lastly, if we count up all the colored properties and railroads in a game of Monopoly, we might discover something 
      interesting: there's 26 of them!
    </p>
    <p className="mb-4">
      If we take each of the clued properties and convert them to a letter A1Z26 (ordered by their position around the board):
    </p>
    <table className="mb-4">
    <tr>
        <th className="text-left">Puzzle</th>
        <th className="text-left">Color</th>
        <th className="text-left">Answer</th>
        <th className="text-left">Property</th>
        <th className="text-left">Letter</th>
    </tr>
    <tr>
        <td>Plainly Indicated</td>
        <td>Pink</td>
        <td>IVORY</td>
        <td>WHITEHALL</td>
        <td>H</td>
    </tr>
    <tr>
        <td className="pr-4">Penchant Word Search Generator</td>
        <td>Pink</td>
        <td>POLARITIES</td>
        <td className="pr-4">NORTHUMBERLAND</td>
        <td>I</td>
    </tr>
    <tr>
        <td>You're Missing Something</td>
        <td>Yellow</td>
        <td>OSTRACIZE</td>
        <td>COVENTRY</td>
        <td>S</td>
    </tr>
    <tr>
        <td>Reportedly</td>
        <td>Red</td>
        <td>QUICK</td>
        <td>FLEET</td>
        <td>O</td>
    </tr>
    <tr>
        <td>Gas, Water, and Electricity</td>
        <td>Green</td>
        <td>NEXUS</td>
        <td>BOND</td>
        <td>W</td>
    </tr>
    <tr>
        <td>Rereading</td>
        <td>Red</td>
        <td>DROP OFF</td>
        <td>STRAND</td>
        <td>N</td>
    </tr>
    <tr>
        <td>Pen-and-Paper Logic Puzzles</td>
        <td>Pink</td>
        <td>CIGARETTE</td>
        <td>PALL MALL</td>
        <td>G</td>
    </tr>
    <tr>
        <td>Blank Matchmaker</td>
        <td>Brown</td>
        <td>BYGONE</td>
        <td>OLD KENT ROAD</td>
        <td>A</td>
    </tr>
    <tr>
        <td>Oh, Just a Criss-Cross</td>
        <td>Orange</td>
        <td>WILD JASMINE</td>
        <td>VINE STREET</td>
        <td>M</td>
    </tr>
    <tr>
        <td>Ladders</td>
        <td className="pr-4">Light blue</td>
        <td className="pr-4">SHAW THEATRE</td>
        <td>EUSTON ROAD</td>
        <td>E</td>
    </tr>
</table>
    <p className="mb-4">We discover how we can beat our uncle: we play him at <Answerize>HIS OWN GAME</Answerize>.</p>
  </div>
);

/**
 * The `authors` string renders below the `solutionBody`.
 */
export const authors = "Thomas Gordon";

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
