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
      Word ladder rules apply; each word is off by one from the previous.
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


const table_contents_1 = [
  { clue: "Rifle attachment", answer: "BAYONET", transformation: "Letter change", letter: "A" },
  { clue: "British noble", answer: "BARONET", transformation: 'Add/remove "ONE"', letter: "R" },
  { clue: "Simpson kid", answer: "BART", transformation: "Add/remove letter", letter: "E" },
  { clue: "Movie mall cop", answer: "BLART", transformation: "Letter change", letter: "A" },
  { clue: "Explosion", answer: "BLAST", transformation: "", letter: "" }
];

const table_contents_2 = [
  { clue: "Unit of resistance", answer: "OHM", transformation: "Caesar shift", letter: "S" },
  { clue: "Brooch", answer: "PIN", transformation: "Add/remove letter", letter: "E" },
  { clue: "Mathematical constant", answer: "PI", transformation: "Sequence shift", letter: "W" },
  { clue: "Density symbol, in physics", answer: "RHO", transformation: "Caesar shift", letter: "S" },
  { clue: "Drink delicately", answer: "SIP", transformation: "", letter: "" }
];

const table_contents_3 = [
  { clue: "Sudden shock", answer: "JOLT", transformation: "Caesar shift", letter: "S" },
  { clue: "Printing fluids", answer: "INKS", transformation: "Cycle", letter: "H" },
  { clue: "Kitchen basin", answer: "SINK", transformation: "Add/remove letter", letter: "E" },
  { clue: "Short-limbed lizard", answer: "SKINK", transformation: "Add/remove letter", letter: "E" },
  { clue: "Twist in a garden hose", answer: "KINK", transformation: "Phoneme change", letter: "T" },
  { clue: "Brass component", answer: "ZINC", transformation: "", letter: "" }
];

const table_contents_4 = [
  { clue: "Opposite of SE", answer: "NW", transformation: "Caesar shift", letter: "S" },
  { clue: "Beast of burden", answer: "OX", transformation: "Sequence shift", letter: "W" },
  { clue: "Striped cat", answer: "TIGER", transformation: "Add/remove letter", letter: "E" },
  { clue: "Stadium level", answer: "TIER", transformation: "Letter change", letter: "A" },
  { clue: "Place to dock", answer: "PIER", transformation: 'Add/remove "ONE"', letter: "R" },
  { clue: "Trailblazer", answer: "PIONEER", transformation: "", letter: "" }
];

const table_contents_5 = [
  { clue: "Composed a letter", answer: "WROTE", transformation: "Phoneme change", letter: "T" },
  { clue: "Meander", answer: "ROVE", transformation: "Cycle", letter: "H" },
  { clue: "Above", answer: "OVER", transformation: "Add/remove letter", letter: "E" },
  { clue: "Candid", answer: "OVERT", transformation: 'Add/remove "ONE"', letter: "R" },
  { clue: "Connotation", answer: "OVERTONE", transformation: "Add/remove letter", letter: "E" },
  { clue: "Namesake of a political window", answer: "OVERTON", transformation: "", letter: "" }
];

const table_contents_6 = [
  { clue: "Period of human history from 3000 to 1000 BCE", answer: "BRONZE AGE", transformation: "Sequence shift", letter: "W" },
  { clue: "Metaphor for primitivity", answer: "STONE AGE", transformation: 'Add/remove "ONE"', letter: "R" },
  { clue: "Platform", answer: "STAGE", transformation: "Add/remove letter", letter: "E" },
  { clue: "Male deer", answer: "STAG", transformation: "Letter change", letter: "A" },
  { clue: "Remain", answer: "STAY", transformation: "Phoneme change", letter: "T" },
  { clue: "Pack cargo", answer: "STOW", transformation: "Cycle", letter: "H" },
  { clue: "Pulls, as a vehicle", answer: "TOWS", transformation: "Add/remove letter", letter: "E" },
  { clue: "Villages", answer: "TOWNS", transformation: "", letter: "" }
];

const table_contents_final = [
  { clue: "Bathing spots (4)", answer: "TUBS", transformation: "Caesar shift", letter: "S" },
  { clue: "Constellation component (4)", answer: "STAR", transformation: "Cycle", letter: "H" },
  { clue: "Spreads pitch on, as a road (4)", answer: "TARS", transformation: "Letter change", letter: "A" },
  { clue: "Roman war god (4)", answer: "MARS", transformation: "Sequence shift", letter: "W" },
  { clue: "Soil (5)", answer: "EARTH", transformation: "Phoneme change", letter: "T" },
  { clue: "Make, as a salary (4)", answer: "EARN", transformation: "Cycle", letter: "H" },
  { clue: "Close by (4)", answer: "NEAR", transformation: "Add/remove letter", letter: "E" },
  { clue: "Auditory organ necessary for part of this puzzle (3)", answer: "EAR", transformation: "Letter change", letter: "A" },
  { clue: "Pub (3)", answer: "BAR", transformation: "Phoneme change", letter: "T" },
  { clue: "Formal dance (4)", answer: "BALL", transformation: 'Add/remove "ONE"', letter: "R" },
  { clue: "Solid yellow pool table item (3 4)", answer: "ONE BALL", transformation: "Add/remove letter", letter: "E" },
  { clue: "Low soccer game tie (3 3)", answer: "ONE ALL", transformation: "", letter: "" }
];


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

    <p className="text-center"><b>Region</b></p>
    <table className="table-auto border-collapse border w-full">
      <thead>
        <tr>
          <th className="border-2 px-4 py-2 text-left">Clue</th>
          <th className="border-2 px-4 py-2 text-left">Answer</th>
          <th className="border-2 px-4 py-2 text-left">Transformation</th>
          <th className="border-2 px-4 py-2 text-left">Letter</th>
        </tr>
      </thead>
      <tbody>
        {table_contents_1.map((row, idx) => (
          <tr>
            <td className="border px-4">{row.clue}</td>
            <td className="border px-4">{row.answer}</td>
            <td className="border px-4">{row.transformation}</td>
            <td className="border px-4">{row.letter}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <p className="text-center"><b>Stitches</b></p>
    <table className="table-auto border-collapse border w-full">
      <thead>
        <tr>
          <th className="border-2 px-4 py-2 text-left">Clue</th>
          <th className="border-2 px-4 py-2 text-left">Answer</th>
          <th className="border-2 px-4 py-2 text-left">Transformation</th>
          <th className="border-2 px-4 py-2 text-left">Letter</th>
        </tr>
      </thead>
      <tbody>
        {table_contents_2.map((row, idx) => (
          <tr>
            <td className="border px-4">{row.clue}</td>
            <td className="border px-4">{row.answer}</td>
            <td className="border px-4">{row.transformation}</td>
            <td className="border px-4">{row.letter}</td>
          </tr>
        ))}
      </tbody>
    </table>    

    <p className="text-center"><b>Piece of Paper</b></p>
    <table className="table-auto border-collapse border w-full">
      <thead>
        <tr>
          <th className="border-2 px-4 py-2 text-left">Clue</th>
          <th className="border-2 px-4 py-2 text-left">Answer</th>
          <th className="border-2 px-4 py-2 text-left">Transformation</th>
          <th className="border-2 px-4 py-2 text-left">Letter</th>
        </tr>
      </thead>
      <tbody>
        {table_contents_3.map((row, idx) => (
          <tr>
            <td className="border px-4">{row.clue}</td>
            <td className="border px-4">{row.answer}</td>
            <td className="border px-4">{row.transformation}</td>
            <td className="border px-4">{row.letter}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <p className="text-center"><b>Give one's word</b></p>
    <table className="table-auto border-collapse border w-full">
      <thead>
        <tr>
          <th className="border-2 px-4 py-2 text-left">Clue</th>
          <th className="border-2 px-4 py-2 text-left">Answer</th>
          <th className="border-2 px-4 py-2 text-left">Transformation</th>
          <th className="border-2 px-4 py-2 text-left">Letter</th>
        </tr>
      </thead>
      <tbody>
        {table_contents_4.map((row, idx) => (
          <tr>
            <td className="border px-4">{row.clue}</td>
            <td className="border px-4">{row.answer}</td>
            <td className="border px-4">{row.transformation}</td>
            <td className="border px-4">{row.letter}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <p className="text-center"><b>In that place</b></p>
    <table className="table-auto border-collapse border w-full">
      <thead>
        <tr>
          <th className="border-2 px-4 py-2 text-left">Clue</th>
          <th className="border-2 px-4 py-2 text-left">Answer</th>
          <th className="border-2 px-4 py-2 text-left">Transformation</th>
          <th className="border-2 px-4 py-2 text-left">Letter</th>
        </tr>
      </thead>
      <tbody>
        {table_contents_5.map((row, idx) => (
          <tr>
            <td className="border px-4">{row.clue}</td>
            <td className="border px-4">{row.answer}</td>
            <td className="border px-4">{row.transformation}</td>
            <td className="border px-4">{row.letter}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <p className="text-center"><b>Encircle, as with a lei</b></p>
    <table className="table-auto border-collapse border w-full">
      <thead>
        <tr>
          <th className="border-2 px-4 py-2 text-left">Clue</th>
          <th className="border-2 px-4 py-2 text-left">Answer</th>
          <th className="border-2 px-4 py-2 text-left">Transformation</th>
          <th className="border-2 px-4 py-2 text-left">Letter</th>
        </tr>
      </thead>
      <tbody>
        {table_contents_6.map((row, idx) => (
          <tr>
            <td className="border px-4">{row.clue}</td>
            <td className="border px-4">{row.answer}</td>
            <td className="border px-4">{row.transformation}</td>
            <td className="border px-4">{row.letter}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <br></br>
    <p>
      We can arrange the answers in the last set to form one final sequence:
    </p>
    <table className="table-auto border-collapse border w-full">
      <thead>
        <tr>
          <th className="border-2 px-4 py-2 text-left">Clue</th>
          <th className="border-2 px-4 py-2 text-left">Answer</th>
          <th className="border-2 px-4 py-2 text-left">Transformation</th>
          <th className="border-2 px-4 py-2 text-left">Letter</th>
        </tr>
      </thead>
      <tbody>
        {table_contents_final.map((row, idx) => (
          <tr>
            <td className="border px-4">{row.clue}</td>
            <td className="border px-4">{row.answer}</td>
            <td className="border px-4">{row.transformation}</td>
            <td className="border px-4">{row.letter}</td>
          </tr>
        ))}
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
