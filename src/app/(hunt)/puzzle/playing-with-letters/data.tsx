/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "playing-with-letters";
import { Answerize } from "../components/puzzle/monospace";

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
export const solutionBody = (
  <div className="max-w-3xl">
    <p className="mb-4">
      As indicated by the flavortext, this puzzle is about Scrabble letter distributions. If we took a full bag of Scrabble tiles 
      and made each of the answers separately by drawing from the bag (using both blanks when necessary), we would use the 
      following letters:
    </p>
    <table className="mb-6 text-center mx-auto">
      <tr>
          <th></th>
          <th className="text-left px-4"># in Answers</th>
          <th className="text-left px-4"># in Scrabble</th>
          <th className="text-left px-4">Leftover</th>
      </tr>
      <tr>
          <td className="px-4">A</td>
          <td>6</td>
          <td>9</td>
          <td>3</td>
      </tr>
      <tr>
          <td>B</td>
          <td>1</td>
          <td>2</td>
          <td>1</td>
      </tr>
      <tr>
          <td>C</td>
          <td>3</td>
          <td>2</td>
          <td>-1</td>
      </tr>
      <tr>
          <td>D</td>
          <td>2</td>
          <td>4</td>
          <td>2</td>
      </tr>
      <tr>
          <td>E</td>
          <td>9</td>
          <td>12</td>
          <td>3</td>
      </tr>
      <tr>
          <td>F</td>
          <td>2</td>
          <td>2</td>
          <td>0</td>
      </tr>
      <tr>
          <td>G</td>
          <td>2</td>
          <td>3</td>
          <td>1</td>
      </tr>
      <tr>
          <td>H</td>
          <td>2</td>
          <td>2</td>
          <td>0</td>
      </tr>
      <tr>
          <td>I</td>
          <td>8</td>
          <td>9</td>
          <td>1</td>
      </tr>
      <tr>
          <td>J</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
      </tr>
      <tr>
          <td>K</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
      </tr>
      <tr>
          <td>L</td>
          <td>2</td>
          <td>4</td>
          <td>2</td>
      </tr>
      <tr>
          <td>M</td>
          <td>1</td>
          <td>2</td>
          <td>1</td>
      </tr>
      <tr>
          <td>N</td>
          <td>3</td>
          <td>6</td>
          <td>3</td>
      </tr>
      <tr>
          <td>O</td>
          <td>6</td>
          <td>8</td>
          <td>2</td>
      </tr>
      <tr>
          <td>P</td>
          <td>2</td>
          <td>2</td>
          <td>0</td>
      </tr>
      <tr>
          <td>Q</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
      </tr>
      <tr>
          <td>R</td>
          <td>6</td>
          <td>6</td>
          <td>0</td>
      </tr>
      <tr>
          <td>S</td>
          <td>5</td>
          <td>4</td>
          <td>-1</td>
      </tr>
      <tr>
          <td>T</td>
          <td>6</td>
          <td>6</td>
          <td>0</td>
      </tr>
      <tr>
          <td>U</td>
          <td>2</td>
          <td>4</td>
          <td>2</td>
      </tr>
      <tr>
          <td>V</td>
          <td>1</td>
          <td>2</td>
          <td>1</td>
      </tr>
      <tr>
          <td>W</td>
          <td>2</td>
          <td>2</td>
          <td>0</td>
      </tr>
      <tr>
          <td>X</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
      </tr>
      <tr>
          <td>Y</td>
          <td>2</td>
          <td>2</td>
          <td>0</td>
      </tr>
      <tr>
          <td>Z</td>
          <td>1</td>
          <td>1</td>
          <td>0</td>
      </tr>
  </table>
  <p className="mb-4">
      If we did this, the remaining tiles in the bag would be AAABDDEEEGILLMNNNOOUUV; 22 tiles! Numbering them in alphabetical 
      order and then rearranging them as indicated on the puzzle tells us how we can win: <Answerize>ON A DOUBLE VALUED MEANING</Answerize>.
    </p>
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
