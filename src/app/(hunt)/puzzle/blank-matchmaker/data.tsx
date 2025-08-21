import Image from "next/image";
import MATCHMAKER from "./blank-matchmaker.svg";
import SOL from "./matchmaker_sol.png";

import { Answerize } from "../components/puzzle/monospace";

/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "blank-matchmaker";

/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */
export const inPersonBody = (
   <div className="font-medium text-lg/6">
    <Image src={MATCHMAKER} alt="" className="max-w-4xl mb-4" />
    <div className="max-w-3xl mb-4 text-center">
      <a target="_blank" href="https://docs.google.com/drawings/d/1rANXPkywgLKIgKfAOh6WCdHMByFBJIC8qRRbmMGSE7o/edit?usp=sharing"><u>(Link to editable version.)</u></a>
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
    <p>
      We are presented with a matchmaker looking puzzle, however the crossing 
      lines have already been connected and there is no text except for what 
      looks like enumerations on the right side. 
    </p>
    <p>
      The first thing that may stand out are some unique looking enumerations such 
      as "???????? & ???????" or "??? ???: ????????". Using tools like Onelook or 
      Nutrimatic, we may find that the text in quotation marks can contain names of 
      popular media (“Dungeons & Dragons” and “Top Gun: Maverick” respectively). 
    </p>
    <p>
      After figuring out more titles or considering the format of the puzzle, we may 
      guess that the dots on the left represent names and the lines represent where 
      that name appears. For example, the dots for both Dungeons & Dragons and Top Gun: 
      Maverick connect to the 11th dot from the top. After some research the solver may 
      notice that Warlock is a character in Top Gun: Maverick, as well as a class in 
      Dungeons & Dragons. We can continue this process finding more characters and 
      franchises through enumeration or from discovered names. The list of media is 
      also alphabetized for the solver's convenience. 
    </p>
    <p>
      After finding enough names, we may start to consider how to extract. The names are 
      seemingly grouped in trios on the right, but there doesn't seem to be a semantic connection. 
      After looking at the letters that make up the names, we may notice that all three names 
      share a single letter. Taking these common letters gives us the answer <Answerize>BYGONE</Answerize>.
    </p>
    <Image src={SOL} alt="" className="max-w-3xl mb-4" />
  </div>
);

/**
 * The `authors` string renders below the `solutionBody`.
 */
export const authors = "Rainy, Thomas Gordon";

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
