/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "ladders";

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
  <div className="max-w-3xl">This is the solution.</div>
);

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
