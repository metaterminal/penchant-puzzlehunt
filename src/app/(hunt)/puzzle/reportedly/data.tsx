/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "reportedly";

import Crossword, { X, _, Borders, Colors } from "~/app/(hunt)/puzzle/components/puzzle/crossword"

const cw_data = [
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""]
]

const cw_bars = [
  ["border-topleft", "border-top", "border-top", "border-top", "border-topleft", "border-top", "border-top", "border-topright"],
  ["border-left", "border-topleft", "", "", "", "border-top", "", "border-right"],
  ["border-left", "", "", "", "border-left", "", "", "border-right"],
  ["border-left", "", "", "", "", "", "", "border-rightleft"],
  ["border-topleft", "", "", "border-top", "border-left", "", "border-top", "border-right"],
  ["border-left", "border-topleft", "border-topleft", "", "border-top", "border-top", "", "border-topright"],
  ["border-left", "", "", "", "border-left", "", "", "border-right"],
  ["border-left", "", "", "", "", "", "", "border-rightleft"],
  ["border-bottomleft", "border-bottom", "border-bottom", "border-bottom", "border-bottomleft", "border-bottom", "border-bottom", "border-bottomright"]
]

/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */
export const inPersonBody = (
   <div className="font-medium text-lg/6">
    <div className="w-3xl flex">
      <div className="w-1/3 mr-10">
        <div className="mt-10 mb-6"><Crossword data={cw_data} borders={cw_bars} /></div>
        <div className="text-center">4 4 6 4 5 (5)</div>
      </div>
      <div className="w-2/3 text-base/7 mb-4">
        <span className="text-2xl">Clues</span><br />
        Ruffles, Lay's, and beers (4)<br />
        Code word incited a laugh (4)<br />
        Famous tennis player is in nationals (4)<br />
        First person had chased us away (5)<br />
        Oddly, boar laughed with kid (4)<br />
        Decapitated informant after lifting bottom part of the head (4)<br />
        Voiceless gods created resting places (4)<br />
        Swear to vacuum upon returning (4)<br />
        Ice is held in complete vacuum (5)<br />
        Head off from places with ships, getting to places with anvils (4)<br />
        Look at wrist, not using posterior part of the eye (4)<br />
        Place with a sci-fi princess (4)<br />
        After taking off the cap, clean part of a camera (4)<br />
        Sits around with sad face, having lost heart (5)<br />
        Spike in road from the South (4)<br />
        Government agency from a show came back (4, abbr.)<br />
        Prophetic rodent emerges from filth, mostly (4)<br />
        Front of a boat will move slowly and quietly (5)<br />
        Stumble and recoil, dropping fish (4)<br />
        Scrutinize processed snack (4)<br />
        Transport dense mixture (4)<br />
        I followed sign leading to mountain (5)<br />
        Slides, going through unused expanse in reverse (5)<br />
        Devoted fan hides in annexed Andorra (4)<br />
        Cite uplifting Tchaikovsky overtures and the like (4)<br />
        Song with a fish (4)
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
