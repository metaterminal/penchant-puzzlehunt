/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "penchant-word-search";

import { Monospace, Answerize } from "~/app/(hunt)/puzzle/components/puzzle/monospace"
import Grid from "~/app/(hunt)/puzzle/components/puzzle/grid"

import Image from "next/image"; 
import img1 from "./solution/grid.png";

/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */
export const inPersonBody = (
   <div className="font-medium text-lg/6">
    {/* Puzzle is instead rendered in PuzzleBody.tsx */}
  </div>
);

export const remoteBoxBody = inPersonBody;

export const remoteBody = inPersonBody;


const gridContent = [
  ['S', 'F', 'U', 'N', 'G', 'I'],
  ['B', 'I', 'P', 'H', 'C', 'M'],
  ['O', 'B', 'O', 'N', 'O', 'B'],
  ['J', 'S', 'S', 'N', 'R', 'U'],
  ['T', 'R', 'E', 'G', 'A', 'E'],
  ['A', 'T', 'A', 'D', 'L', 'H'],
]

/**
 * The `solutionBody` renders in the solution page.
 * If there are no solutions available, set it null.
 */
export const solutionBody = (
  <div className="max-w-3xl space-y-4">
    <p>
      This puzzle takes the form of an interactive word search generator. It consists of a dynamic 6x6 grid of numbers 
      (which range from 1 to 26) and a textbox, where solvers can input between zero and nine words.
    </p>
    <p>
      When the solver clicks 'Generate,' the system will attempt to fit the solver's chosen words (if indeed they 
      are dictionary-valid words) into the grid using a specific algorithm, which places the last letter 
      of each word at the same location as the first letter of the subsequent word, according to the scheme 
      displayed below (the red arrow represents the position and direction of the first word in the list, 
      which much be six letters long).
    </p>
    <Image src={img1} className="w-full md:w-1/2 mx-auto mb-4" alt="" />
    <p>
      If the submitted input cannot be fit into the grid using this scheme, 
      a descriptive error is generated (e.g. “word 1 must be six letters long” or 
      “these words are not compatible”).
    </p>
    <p>
      If the input is valid and fits (including if the submitted list is empty), then 
      those words are fit into the appropriate positions (converting the letters to 
      their alphanumeric equivalents—although a toggle is provided to display the grid as 
      letters instead of numbers for convenience), while stochastically generating the letters 
      at other positions according to an as yet unspecified distribution.
    </p>
    <p>
      The first task is to obtain a list of nine valid words that can be 
      fit into the grid using the above scheme. This can be done quickly and by hand. 
      One valid solution: <Monospace>MAKEUP</Monospace>, <Monospace>PRESS</Monospace>, <Monospace>SEEK</Monospace>, <Monospace>KNIFE</Monospace>, <Monospace>EPEE</Monospace>, <Monospace>EVENT</Monospace>, <Monospace>TIPS</Monospace>, <Monospace>SPEED</Monospace>, <Monospace>DUNHAM</Monospace>.
    </p>
    <p>
      The unused numbers/letters in the grid likely won't spell anything in particular. 
      But regenerating the grid does change those values. As it happens, each cell can 
      contain exactly two values. The first unused cell either contains 3 or 22 (C or V), 
      for example. Interpreting the unused values as letters, the pairs are 
      (from left to right, top to bottom): CV, AO, NR, IS, AI, DN, CE, ER.
    </p>
    <p>
      These letters produce two, non-overlapping eight-letter words: <Monospace>CONSIDER VARIANCE</Monospace>.
    </p>
    <p>
      This is a clue. When solvers were obtaining the letter pairs, they may have observed 
      that the two letters don't necessarily show up equally often. Some are quite 
      skewed toward one letter in particular.
    </p>
    <p>
      And moreover, solvers may also have noticed that, when an empty list of words 
      is submitted, the grid generates still values for other cells as well, and those 
      other cells also always take one of two values.
    </p>
    <p>
      Together, solvers should infer that they should determine the variance of the 
      distribution associated with each cell. To make this process easier, a button 
      appears which automatically generates 10,000 grids and copies them to clipboard 
      (though our testsolvers did not have this luxury and had to generate the grids by hand—sorry!).
    </p>
    <p>
      As it turns out, the variance of every cell is an exact whole number from 1 to 26. 
      Here is the grid obtained by converting each cell's variance to a letter alphanumerically.
    </p>
    <div className="x-auto flex justify-center">
      <Grid 
        data={gridContent} 
        lightBorder={true}
      />
    </div>
    <p>
      This really is a more traditional word search, and ten words can be found, which begin with the letters A-J:
    </p>
    <div>
      <ul className="space-y-1 list-none">
        <li><Monospace>AESO<b className="text-base">P</b></Monospace></li>
        <li><Monospace>BONOB<b className="text-base">O</b></Monospace></li>
        <li><Monospace>CORA<b className="text-base">L</b></Monospace></li>
        <li><Monospace>DAT<b className="text-base">A</b></Monospace></li>
        <li><Monospace>EAGE<b className="text-base">R</b></Monospace></li>
        <li><Monospace>FUNG<b className="text-base">I</b></Monospace></li>
        <li><Monospace>GHOS<b className="text-base">T</b></Monospace></li>
        <li><Monospace>HANO<b className="text-base">I</b></Monospace></li>
        <li><Monospace>IMBU<b className="text-base">E</b></Monospace></li>
        <li><Monospace>JOB<b className="text-base">S</b></Monospace></li>
      </ul>
    </div>
    <p>
      As the boldface above indicates, these ten words encode a secret word via their last 
      letters, <Answerize>POLARITIES</Answerize>, an apt conclusion to a puzzle about the oscillation between extremes.
    </p>

  </div>
);

/**
 * The `authors` string renders below the `solutionBody`.
 */
export const authors = "Zach Barnett";

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
