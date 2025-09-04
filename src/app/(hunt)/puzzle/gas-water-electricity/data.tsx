import Image from "next/image";
import GRID from "./grid.png";
import BRANCH1 from "./branch-1.png";
import BRANCH2 from "./branch-2.png";
import BRANCH3 from "./branch-3.png";
import TURN1 from "./turn-1.png";
import TURN2 from "./turn-2.png";
import CROSS1 from "./cross-1.png";
import CROSS2 from "./cross-2.png";
import CONNECTIONS1 from "./connections-1.png";
import CONNECTIONS2 from "./connections-2.png";
import SOLN from "./solution.png";
import { Answerize } from "../components/puzzle/monospace";

/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "gas-water-electricity";

/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */
export const inPersonBody = (
   <div className="font-medium text-lg/6">
    <div className="max-w-3xl mb-4 text-center">
      In this town, all of the buildings have been constructed; but they need to be connected in a ring.
    </div>

    <Image src={GRID} alt="" className="max-w-xl mb-4 mx-auto" />
    <div className="mb-4 text-center">
      <a target="_blank" href="https://tinyurl.com/24b4pwj8"><u>(Link to penpa version.)</u></a>
    </div>
    <div className="max-w-3xl mb-4 text-lg/10">
      <i>What do A, B, and C refer to on the diagram?</i>
      <div className="text-lg/6">The town has three kinds of <i>buildings</i>:</div>
      <div className="ml-10 mt-2 mb-6 text-lg/6">
      <ul>
        <li><b>Houses</b>, labelled "A".</li>
        <li><b>Utilities</b>, labelled "B".</li>
        <li><b>Stores</b>, labelled "C".</li>
      </ul>
      </div>

      <i>How should I connect the buildings?</i>
      <div className="text-lg/6 mb-6">Just connect every <b>house</b> to every <b>utility</b>.</div>

      <i>What about the store buildings?</i>
      <div className="text-lg/6 mb-6">
        Oh, good question. Each store should be connected to every house and every utility.<br /><br />
        (As a consequence of this, each house will be connected to every utility and every store, 
        and each utility will be connected to every house and every store.)
      </div>

      <div className="mx-10 mt-2 mb-6 text-lg/6">
      <ol>
        <li>
          Connections must be continuous unbroken lines from one building to another, traveling 
          horizontally, vertically, or diagonally. Lines cannot branch, except at building cells. 
          Lines cannot cross or intersect.
          <div className="my-4 grid grid-cols-3 gap-6">
            <div className="text-center">
              <Image src={BRANCH1} alt="" className="max-w-3xs mb-2 mx-auto" />
              <div>❌</div>
            </div>
            <div className="text-center">
              <Image src={BRANCH2} alt="" className="max-w-3xs mb-2 mx-auto" />
              <div>❌</div>
            </div>
            <div className="text-center">
              <Image src={BRANCH3} alt="" className="max-w-3xs mb-2 mx-auto" />
              <div>✅</div>
            </div>
          </div>
        </li>
        <li>
          A connection cannot make a right-angled turn, except diagonally.
          <div className="my-4 grid grid-cols-2 gap-6">
            <div className="text-center">
              <Image src={TURN1} alt="" className="max-w-3xs mb-2 mx-auto" />
              <div>❌</div>
            </div>
            <div className="text-center">
              <Image src={TURN2} alt="" className="max-w-3xs mb-2 mx-auto" />
              <div>✅</div>
            </div>
          </div>
        </li>
        <li>
          Lines cannot travel through shaded cells. (Lines may travel “between” shaded cells, 
          including through touching diagonals.)
          <div className="my-4 grid grid-cols-2 gap-6">
            <div className="text-center">
              <Image src={CROSS1} alt="" className="max-w-3xs mb-2 mx-auto" />
              <div>❌</div>
            </div>
            <div className="text-center">
              <Image src={CROSS2} alt="" className="max-w-3xs mb-2 mx-auto" />
              <div>✅</div>
            </div>
          </div>
        </li>
        <li>
          Connections must be direct; they cannot pass through other buildings.
          <div className="my-4 grid grid-cols-2 gap-6">
            <div className="text-center">
              <Image src={CONNECTIONS1} alt="" className="max-w-3xs mb-2 mx-auto" />
              <div>❌</div>
            </div>
            <div className="text-center">
              <Image src={CONNECTIONS2} alt="" className="max-w-3xs mb-2 mx-auto" />
              <div>✅</div>
            </div>
          </div>
        </li>
      </ol>
      </div>
      <i>What do the circles mean?</i>
      <div className="text-lg/6 mb-6">
        Five of the buildings are adjacent to important cells for the installation of connections; 
        these are marked with flags.
      </div>
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
      This is an adaptation of the classic Three Utilities problem, in which solvers are tasked with connecting three "houses" 
      to three "utilities" (usually framed as gas, water, and electricity). As the <a href="https://en.wikipedia.org/wiki/Three_utilities_problem">Wikipedia page</a> for said problem explicitly 
      notes, even this standard version of the puzzle is impossible in a 2D plane! It stands to reason that the extra-hard version 
      presented here would be extra-impossible.
    </p>
    <p className="mb-4">
      Since this puzzle cannot function on a 2D plane, we should think about what other topologies the given grid might be 
      representing. From the flavortext (which references a "ring"), the way the grid is arranged with identical tunnels on opposite 
      "edges", or even just researching about this mathematical structure, we can determine that this is in fact a <i>torus</i>. In 
      practical terms, this means that lines which extend off of the right edge appear on the left, and vice-versa; and likewise for 
      the top and bottom edges.
    </p>
    <p className="mb-4">
      (In mathematical terms, this is an embedding of a K&#123;3,3,3&#125; graph on a torus. Explicit constructions of this can be 
      found on the internet in both English and German.)
    </p>
    <p className="mb-4">
      Before we start constructing our solution, it would be helpful to think about what constraints we might need to abide by. 
      Firstly, each building will have six connections extending from it, since each building connects to six others. Secondly, 
      by sketching out a rough construction or observing another, we might realize that 
      each building will alternate which other building it connects to as the connections go around (or, to put it another way, 
      there are no A-B, B-C, or A-C connections with nothing between them). 
    </p>
    <p className="mb-4">
      With this borne in mind, we can construct the grid. It is difficult to proceed with explicit deductions, so the recommended 
      solving strategy is to place down lines and get a feel for where space is required. This solution is unique; attempting to 
      pass the connections through the top-left/bottom-right corner instead will run out of space in the top-right/bottom-left.
    </p>
    <Image src={SOLN} alt="" className="max-w-xl mb-4 mx-auto" />
    <p className="mb-4">
      Finally, we can extract! As the puzzle notes, five of the buildings are adjacent to important cells that we should look at 
      for extraction. These cells (which are up-right of the first C, down-right of the first B, down-left of the second C, 
      down-right of the second B, and right of the third C) each have a connection running through them; which is to say, they each 
      are associated with two directional values. Interpreting these directional values as semaphore for each of the indicated cells, 
      in order, provides us with the apt answer: <Answerize>NEXUS</Answerize>.
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
