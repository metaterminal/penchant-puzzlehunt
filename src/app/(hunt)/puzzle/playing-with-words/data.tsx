/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "playing-with-words";

import Grid from "~/app/(hunt)/puzzle/components/puzzle/grid"
import { Answerize } from "../components/puzzle/monospace";


/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */


const content = [
  ['','','','','','','','','5','','','','','',''],
  ['','','6','','','','','','','','','','','',''],
  ['','','','','','','','','','','','','','','9'],
  ['','','','','','','','','','','','','','',''],
  ['','','','','','','','','','','','','','',''],
  ['','','','','','','','','','','','','','',''],
  ['','','11','','','','','','','','','1','','',''],
  ['','','','','','','','','','','10','','','',''],
  ['','','','','','','','','','','','','','',''],
  ['','','','','','','','','','','','','','',''],
  ['','','2','','','','','','','','','','','',''],
  ['','','','','','','','8','','','','','','',''],
  ['','7','','','','','','','','3','','','','',''],
  ['','','','','4','','','','','','','','','',''],
  ['','','','','','','','','','','','','','',''],
]

export const inPersonBody = (
  <div className="font-medium text-lg/6">
    <div className="max-w-3xl space-y-4 text-center">
      <p>
        You're playing Scrabble (using the latest CSW24 wordlist) -- and, 
        <br></br>
        for added challenge, neither of you can use blanks.
        <br></br>
        <i>How can you guarantee a win?</i>
      </p>
      <p><i>Note: you may find that using an online board editor is helpful.</i></p>
    </div>
    <div className="py-4 max-w-3xl text-center">
      <ul className="list-none">
        <li>Player 1 plays <b className="text-red-500">___</b> downwards for 84 points.</li>
        <li>Player 2 plays ___ for 2 points.</li>
        <li><i>"That's not one of our answers!" says Player 1. "But don't worry, I'll fix it now."</i></li>
        <li>Player 1 plays <b className="text-red-500">___</b> for 119 points.</li>
        <li>Player 2 plays <b className="text-red-500">___</b>, also making ___, for 11 points.</li>
        <li>Player 1 plays ___ for 5 points.</li>
        <li><i>"That's not one of our answers!" says Player 2. "But don't worry, I'll fix it now."</i></li>
        <li>Player 2 plays <b className="text-red-500">___</b> for 64 points.</li>
        <li>Player 1 plays <b className="text-red-500">___</b> for 20 points.</li>
        <li>Player 2 plays <b className="text-red-500">___</b>, also making ___, for 11 points.</li>
        <li>Player 1 plays <b className="text-red-500">___</b>, also making ___ and ___, for 26 points.</li>
        <li>Player 2 plays <b className="text-red-500">___</b> for 12 points.</li>
        <li>Player 1 plays <b className="text-red-500">___</b> for 19 points.</li>
        <li>Player 2 plays <b className="text-red-500">___</b>, also making ___, for 12 points.</li>
        <li>Player 1 plays <b className="text-red-500">___</b> for 20 points.</li>
        <li>Player 2 plays ___, also making ___ and ___, for 16 points.</li>
        <li><i>"That's not one of our answers!" says Player 1. "But don't worry, I'll fix it now."</i></li>
        <li>Player 1 plays <b className="text-red-500">___</b> for 65 points.</li>
        <li>Player 2 plays <b className="text-red-500">___</b> for 16 points.</li>
      </ul>
    </div>
    <div className="py-8 flex justify-center">
      <Grid
        data={content} 
        lightBorder={true}
      />
    </div>
  </div>
);

export const remoteBoxBody = inPersonBody;

export const remoteBody = inPersonBody;

/**
 * The `solutionBody` renders in the solution page.
 * If there are no solutions available, set it null.
 */
const contentLetters = [
['','','','','','','','','N','','','','','',''],
['','','T','H','E','A','T','R','E','','','','','',''],
['','','','','','','','','X','','','','','','B'],
['','','','','','','','','U','P','','','','','Y'],
['','','C','','','','','','S','O','','Q','','','G'],
['','','I','','','','','J','','L','','U','','','O'],
['','','G','','','','','A','','A','','I','','','N'],
['','','A','','','','O','S','T','R','A','C','I','Z','E'],
['','','R','','','','','M','','I','','K','','',''],
['','','E','','','','','I','','T','','','','',''],
['','','T','','','','','N','','I','','','','',''],
['','S','T','','','','D','E','','E','','','','',''],
['','H','E','','','','R','','','S','O','','','',''],
['','A','','','I','V','O','R','Y','','F','','','',''],
['','W','I','L','D','','P','','','','F','','','',''],
]
const dr = "rgba(255, 41, 41, 1)"; 
const lb = "rgba(173, 216, 230, 1)"; 
const db = "rgba(42, 42, 255, 0.8)"; 
const lr = "rgba(255, 182, 193, 1)";   
const shade1 = [
[dr,'','',lb,'','','',dr,'','','',lb,'','',dr],
['',lr,'','','',db,'','','',db,'','','',lr,''],
['','',lr,'','','',lb,'',lb,'','','',lr,'',''],
[lb,'','',lr,'','','',lb,'','','',lr,'','',lb],
['','','','',lr,'','','','','',lr,'','','',''],
['',db,'','','',db,'','','',db,'','','',db,''],
['','',lb,'','','',lb,'',lb,'','','',lb,'',''],
[dr,'','',lb,'','','',lr,'','','',lb,'','',dr],
['','',lb,'','','',lb,'',lb,'','','',lb,'',''],
['',db,'','','',db,'','','',db,'','','','',''],
['','','','',lr,'','','','','',lr,'','','',''],
[lb,'','',lr,'','','',lb,'','','',lr,'','',lb],
['','',lr,'','','',lb,'',lb,'','','',lr,'',''],
['',lr,'','','',db,'','','',db,'','','',lr,''],
[dr,'','',lb,'','','',dr,'','','',lb,'','',dr],
]

const gr = "rgba(99, 201, 99, 1)";   
const shade2 = [
  ['','','','','','','','',gr,'','','','','',''],
  ['','',gr,'','','','','','','','','','','',''],
  ['','','','','','','','','','','','','','',gr],
  ['','','','','','','','','','','','','','',''],
  ['','','','','','','','','','','','','','',''],
  ['','','','','','','','','','','','','','',''],
  ['','',gr,'','','','','','','','',gr,'','',''],
  ['','','','','','','','','','',gr,'','','',''],
  ['','','','','','','','','','','','','','',''],
  ['','','','','','','','','','','','','','',''],
  ['','',gr,'','','','','','','','','','','',''],
  ['','','','','','','',gr,'','','','','','',''],
  ['',gr,'','','','','','','',gr,'','','','',''],
  ['','','','',gr,'','','','','','','','','',''],
  ['','','','','','','','','','','','','','',''],
]

export const solutionBody = null; /*(
  <div className="max-w-3xl space-y-4">
    <p>This meta uses the 13 individual words from the 10 feeder answers as Scrabble plays. The full game is as follows:</p>

    <div className="py-8 flex justify-center">
      <Grid
        data={contentLetters} 
        lightBorder={true}
        shading={shade1}
      />
    </div>

    <ul className="list-none">
      <li>Player 1 plays <b className="text-red-500">JASMINE</b> downwards for 84 points.</li>
      <li>Player 2 plays ___ for 2 points.</li>
      <li><i>"That's not one of our answers!" says Player 1. "But don't worry, I'll fix it now."</i></li>
      <li>Player 1 plays <b className="text-red-500">OSTRACIZE </b> for 119 points.</li>
      <li>Player 2 plays <b className="text-red-500">DROP</b>, also making ___, for 11 points.</li>
      <li>Player 1 plays ___ for 5 points.</li>
      <li><i>"That's not one of our answers!" says Player 2. "But don't worry, I'll fix it now."</i></li>
      <li>Player 2 plays <b className="text-red-500">POLARITIES </b> for 64 points.</li>
      <li>Player 1 plays <b className="text-red-500">QUICK</b> for 20 points.</li>
      <li>Player 2 plays <b className="text-red-500">OFF</b>, also making ___, for 11 points.</li>
      <li>Player 1 plays <b className="text-red-500">NEXUS</b>, also making ___ and ___, for 26 points.</li>
      <li>Player 2 plays <b className="text-red-500">THEATRE</b> for 12 points.</li>
      <li>Player 1 plays <b className="text-red-500">IVORY</b> for 19 points.</li>
      <li>Player 2 plays <b className="text-red-500">WILD</b>, also making ___, for 12 points.</li>
      <li>Player 1 plays <b className="text-red-500">SHAW</b> for 20 points.</li>
      <li>Player 2 plays ___, also making ___ and ___, for 16 points.</li>
      <li><i>"That's not one of our answers!" says Player 1. "But don't worry, I'll fix it now."</i></li>
      <li>Player 1 plays <b className="text-red-500">CIGARETTE</b> for 65 points.</li>
      <li>Player 2 plays <b className="text-red-500">BYGONE</b> for 16 points.</li>
    </ul>
    <div className="py-8 flex justify-center">
      <Grid
        data={contentLetters} 
        lightBorder={true}
        shading={shade2}
      />
    </div>
    <p>In order, the numbered cells spell out <Answerize>IT'S IN THE BAG</Answerize>.</p>
  </div>
);*/

/**
 * The `authors` string renders below the `solutionBody`.
 */
export const authors = "Thomas Gordon, noneuclidean";

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
