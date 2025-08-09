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
      <a target="_blank" href="https://swaroopg92.github.io/penpa-edit/?m=solve&p=7VVNb5tKFN37V1gjdTcLZgDHsEvcNJs0Teo8RRGyojEmMQo2KcZNHlby23M/pjVjqPT01O4qzMzlcOeew8C53nzbmiqTysefP5aeVHCEvqZTBQGdnj2u87rI4uGZ2XzQk+GNqbMKA7NeDE+LLK2rPM3rf+Xxtl6WVTy8zNbp0qxrKeWXC3lvik02SGyt2SARSkih4VRi9tZM3xIhpJoNds3XeNfcxcnsVTb/7MPxPpzGO+FHIg6kCDyeFE8+TwFPRzSFI57GNI14wUjzFNJ0xFcRL1Aeo0pzVaW5rNLMqSybsnQqsPmWUIU2z1ZXI4uPbX7E67ViZdrW1/rHNUvVPmvVPsvTllfb59OWV1teHdh1AfLDPl3APkVQIxET2FraaHhIIEvESQsAVidD+cCTiOMWgowuEgKni0Sg0imsItDnVo5AYSsHNKp4B+MtvlF8J0kkRZpXaZHdTYXUsMYf98LBGEV24AjfYRdWXl9xIP5E9JrGa/i6ZOPT+JFGj8aQxnPKOaXxhsYJjQGNI8o5wu9zMEj8Efmo7wj/3vk/d6BfQGsQm7K422yre5NmIqaOIglbb1fzrHKgoiyfinzt5uUP67LKem8hmC0e+vLnZbU4qP5sisIBuJM6EH9qDgQt0rk2VVU+O8jK1EsHmJsauu5mmT+5lbJ17QqojSvRPJoDttX+mV8H4kXQmUDvlwH23ShurmRzBgZtdWbZXEHj/Rw3U+y72KMDMgMlgbXAET/DG7qP0YRB5UF8YWMIbyF0jNlcxklzLQXynNBqDMWq/A5CWQdep+VqDo+SiNZm8J3NdlE+bm2uQkcfH8hFXivX38vFkOVi1CMXxbXknnOh3yo3mr3ya/D+458et/R20/xDHezFWq2set0GcI/hAO01lsU73gK84yIk7BoJ0B4vAXpoJ4C6jgKwYyrAfuErrHpoLVR16C6k6hgMqdoeg55F0Ts="><u>(Link to penpa version.)</u></a>
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
