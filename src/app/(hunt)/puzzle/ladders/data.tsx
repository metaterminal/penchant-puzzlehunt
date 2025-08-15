/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "ladders";

import { Monospace, Answerize } from "~/app/(hunt)/puzzle/components/puzzle/monospace"

/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */
export const inPersonBody = (
   <div className="font-medium text-lg/6">
    <div className="max-w-3xl mb-4 text-center">
      Standard word ladder rules apply; each word is off by one from the previous.
    </div>
    <div className="w-full text-center">
      <span className="text-2xl">Region</span><br />
      Rifle attachment<br />
      British noble<br />
      Simpson kid<br />
      Movie mall cop<br />
      Explosion
    </div>
    <div className="w-full text-center mt-6">
      <span className="text-2xl">Stitches</span><br />
      Unit of resistance<br />
      Brooch<br />
      Mathematical constant<br />
      Density symbol, in physics<br />
      Drink delicately
    </div>

    <div className="w-full text-center mt-6">
      <span className="text-2xl">Piece of paper</span><br />
      Sudden shock<br />
      Printing fluids<br />
      Kitchen basin<br />
      Short-limbed lizard<br />
      Twist in a garden hose<br />
      Brass component
    </div>

    <div className="w-full text-center mt-6">
      <span className="text-2xl">Give one's word</span><br />
      Opposite of SE<br />
      Beast of burden<br />
      Striped cat<br />
      Stadium level<br />
      Place to dock<br />
      Trailblazer
    </div>

    <div className="w-full text-center mt-6">
      <span className="text-2xl">In that place</span><br />
      Composed a letter<br />
      Meander<br />
      Above<br />
      Candid<br />
      Connotation<br />
      Namesake of a political window
    </div>

    <div className="w-full text-center mt-6">
      <span className="text-2xl">Encircle, as with a lei</span><br />
      Period of human history from 3000 to 1000 BCE<br />
      Metaphor for primitivity<br />
      Platform<br />
      Male deer<br />
      Remain<br />
      Pack cargo<br />
      Pulls, as a vehicle<br />
      Villages
    </div>

    <div className="w-full text-center mt-6 mb-4">
      <span className="text-2xl">The answer</span><br />
      Auditory organ necessary for part of this puzzle (3)<br />
      Bathing spots (4)<br />
      Close by (4)<br />
      Constellation component (4)<br />
      Formal dance (4)<br />
      Low soccer game tie (3 3)<br />
      Make, as a salary (4)<br />
      Pub (3)<br />
      Roman war god (4)<br />
      Soil (5)<br />
      Solid yellow pool table item (3 4)<br />
      Spreads pitch on, as a road (4)
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
  <div className="max-w-3xl space-y-4">
    <p>
      In the first six ladders, each word is "off by one" from the previous in one of seven different ways:
    </p>
    <div>
      <ul className="space-y-1 text-left pl-4">
        <li>Add/remove "ONE"</li>
        <li>Add/remove one letter</li>
        <li>Caesar shift forward/backward by one</li>
        <li>Change one letter</li>
        <li>Change one phoneme</li>
        <li>Cyclically shift by one</li>
        <li>Move by one in a sequence</li>
      </ul>
    </div>
    <p>
      Using the clues above each set, each transformation can be mapped to a letter:
    </p>
    {/* table 1 */}
    <p className="text-center"><b>Region</b></p>
    <table className="table-auto border-collapse border border-gray-400 w-full">
      <thead className="*:border *:border-gray-400 *:px-2 *:py-1 *:text-left">
        <tr>
          <th>Clue</th>
          <th>Answer</th>
          <th>Transformation</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody className="*:border *:border-gray-400 *:px-2 *:py-1">
        <tr>
          <td>Rifle attachment</td>
          <td>BAYONET</td>
          <td>Letter change</td>
          <td>A</td>
        </tr>
        <tr>
          <td>British noble</td>
          <td>BARONET</td>
          <td>Add/remove "ONE"</td>
          <td>R</td>
        </tr>
        <tr>
          <td>Simpson kid</td>
          <td>BART</td>
          <td>Add/remove letter</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Movie mall cop</td>
          <td>BLART</td>
          <td>Letter change</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Explosion</td>
          <td>BLAST</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    {/* table 2 */}
    <p className="text-center"><b>Piece of paper</b></p>
    <table className="table-auto border-collapse border border-gray-400 w-full">
      <thead className="*:border *:border-gray-400 *:px-2 *:py-1 *:text-left">
        <tr>
          <th>Clue</th>
          <th>Answer</th>
          <th>Transformation</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody className="*:border *:border-gray-400 *:px-2 *:py-1">
        <tr>
          <td>Unit of resistance</td>
          <td>OHM</td>
          <td>Caesar shift</td>
          <td>S</td>
        </tr>
        <tr>
          <td>Brooch</td>
          <td>PIN</td>
          <td>Add/remove letter</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Mathematical constant</td>
          <td>PI</td>
          <td>Sequence shift</td>
          <td>W</td>
        </tr>
        <tr>
          <td>Density symbol, in physics</td>
          <td>RHO</td>
          <td>Caesar shift</td>
          <td>S</td>
        </tr>
        <tr>
          <td>Drink delicately</td>
          <td>SIP</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    {/* table 3 */}
    <p className="text-center"><b>Give one's word</b></p>
    <table className="table-auto border-collapse border border-gray-400 w-full">
      <thead className="*:border *:border-gray-400 *:px-2 *:py-1 *:text-left">
        <tr>
          <th>Clue</th>
          <th>Answer</th>
          <th>Transformation</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody className="*:border *:border-gray-400 *:px-2 *:py-1">
        <tr>
          <td>Sudden shock</td>
          <td>JOLT</td>
          <td>Caesar shift</td>
          <td>S</td>
        </tr>
        <tr>
          <td>Printing fluids</td>
          <td>INKS</td>
          <td>Cycle</td>
          <td>H</td>
        </tr>
        <tr>
          <td>Kitchen basin</td>
          <td>SINK</td>
          <td>Add/remove letter</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Short-limbed lizard</td>
          <td>SKINK</td>
          <td>Add/remove letter</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Twist in a garden hose</td>
          <td>KINK</td>
          <td>Phoneme change</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Brass component</td>
          <td>ZINC</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    {/* table 4 */}
    <p className="text-center"><b>In that place</b></p>
    <table className="table-auto border-collapse border border-gray-400 w-full">
      <thead className="*:border *:border-gray-400 *:px-2 *:py-1 *:text-left">
        <tr>
          <th>Clue</th>
          <th>Answer</th>
          <th>Transformation</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody className="*:border *:border-gray-400 *:px-2 *:py-1">
        <tr>
          <td>Opposite of SE</td>
          <td>NW</td>
          <td>Caesar shift</td>
          <td>S</td>
        </tr>
        <tr>
          <td>Beast of burden</td>
          <td>OX</td>
          <td>Sequence shift</td>
          <td>W</td>
        </tr>
        <tr>
          <td>Striped cat</td>
          <td>TIGER</td>
          <td>Add/remove letter</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Stadium level</td>
          <td>TIER</td>
          <td>Letter change</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Place to dock</td>
          <td>PIER</td>
          <td>Add/remove "ONE"</td>
          <td>R</td>
        </tr>
        <tr>
          <td>Trailblazer</td>
          <td>PIONEER</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    {/* table 5 */}
    <p className="text-center"><b>In that place</b></p>
    <table className="table-auto border-collapse border border-gray-400 w-full">
      <thead className="*:border *:border-gray-400 *:px-2 *:py-1 *:text-left">
        <tr>
          <th>Clue</th>
          <th>Answer</th>
          <th>Transformation</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody className="*:border *:border-gray-400 *:px-2 *:py-1">
        <tr>
          <td>Composed a letter</td>
          <td>WROTE</td>
          <td>Phoneme change</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Meander</td>
          <td>ROVE</td>
          <td>Cycle</td>
          <td>H</td>
        </tr>
        <tr>
          <td>Above</td>
          <td>OVER</td>
          <td>Add/remove letter</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Candid</td>
          <td>OVERT</td>
          <td>Add/remove "ONE"</td>
          <td>R</td>
        </tr>
        <tr>
          <td>Connotation</td>
          <td>OVERTONE</td>
          <td>Add/remove letter</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Namesake of a political window</td>
          <td>OVERTON</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>

    {/* table 6 */}
    <p className="text-center"><b>Encircle, as with a lei</b></p>
    <table className="table-auto border-collapse border border-gray-400 w-full">
      <thead className="*:border *:border-gray-400 *:px-2 *:py-1 *:text-left">
        <tr>
          <th>Clue</th>
          <th>Answer</th>
          <th>Transformation</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody className="*:border *:border-gray-400 *:px-2 *:py-1">
        <tr>
          <td>Period of human history from 3000 to 1000 BCE</td>
          <td>BRONZE AGE</td>
          <td>Sequence shift</td>
          <td>W</td>
        </tr>
        <tr>
          <td>Metaphor for primitivity</td>
          <td>STONE AGE</td>
          <td>Add/remove "ONE"</td>
          <td>R</td>
        </tr>
        <tr>
          <td>Platform</td>
          <td>STAGE</td>
          <td>Add/remove letter</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Male deer</td>
          <td>STAG</td>
          <td>Letter change</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Remain</td>
          <td>STAY</td>
          <td>Phoneme change</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Pack cargo</td>
          <td>STOW</td>
          <td>Cycle</td>
          <td>H</td>
        </tr>
        <tr>
          <td>Pulls, as a vehicle</td>
          <td>TOWS</td>
          <td>Add/remove letter</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Villages</td>
          <td>TOWNS</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <br></br>
    <p>
      We can arrange the answers in the last set to form one final sequence:
    </p>
    <table className="table-auto border-collapse border border-gray-400 w-full">
      <thead className="*:border *:border-gray-400 *:px-2 *:py-1 *:text-left">
        <tr>
          <th>Clue</th>
          <th>Answer</th>
          <th>Type</th>
          <th>Letter</th>
        </tr>
      </thead>
      <tbody className="*:border *:border-gray-400 *:px-2 *:py-1">
        <tr>
          <td>Bathing spots (4)</td>
          <td>TUBS</td>
          <td>Caesar shift</td>
          <td>S</td>
        </tr>
        <tr>
          <td>Constellation component (4)</td>
          <td>STAR</td>
          <td>Cycle</td>
          <td>H</td>
        </tr>
        <tr>
          <td>Spreads pitch on, as a road (4)</td>
          <td>TARS</td>
          <td>Letter change</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Roman war god (4)</td>
          <td>MARS</td>
          <td>Sequence shift</td>
          <td>W</td>
        </tr>
        <tr>
          <td>Soil (5)</td>
          <td>EARTH</td>
          <td>Phoneme change</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Make, as a salary (4)</td>
          <td>EARN</td>
          <td>Cycle</td>
          <td>H</td>
        </tr>
        <tr>
          <td>Close by (4)</td>
          <td>NEAR</td>
          <td>Add/remove letter</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Auditory organ necessary for part of this puzzle (3)</td>
          <td>EAR</td>
          <td>Letter change</td>
          <td>A</td>
        </tr>
        <tr>
          <td>Pub (3)</td>
          <td>BAR</td>
          <td>Phoneme change</td>
          <td>T</td>
        </tr>
        <tr>
          <td>Formal dance (4)</td>
          <td>BALL</td>
          <td>Add/remove "ONE"</td>
          <td>R</td>
        </tr>
        <tr>
          <td>Solid yellow pool table item (3 4)</td>
          <td>ONE BALL</td>
          <td>Add/remove letter</td>
          <td>E</td>
        </tr>
        <tr>
          <td>Low soccer game tie (3 3)</td>
          <td>ONE ALL</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <p>
      Converting the transformations to letters, we get the answer <Answerize>SHAW THEATRE</Answerize>.
    </p>
  </div>
);

/**
 * The `authors` string renders below the `solutionBody`.
 */
export const authors = "noneuclidean";

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
