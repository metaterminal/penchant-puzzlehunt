/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "reportedly";

import Crossword, { X, _, Borders, Colors } from "~/app/(hunt)/puzzle/components/puzzle/crossword"
import { Monospace, Answerize } from "~/app/(hunt)/puzzle/components/puzzle/monospace"


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

const solutionData = [
  { clue: 'Ruffles, Lay\'s, and beers (4)', answer: 'ALES', explanation: 'anagram of LAYS', boldword: 'beers'},
  { clue: 'Code word incited a laugh (4)', answer: 'ALFA', explanation: 'anagram of A LAUGH' , boldword: 'Code word'},
  { clue: 'Famous tennis player is in nationals (4)', answer: 'ASHE', explanation: 'hidden in nATIOnals' , boldword: 'Famous tennis player'},
  { clue: 'First person had chased us away (5)', answer: 'ASIDE', explanation: 'I\'D after US' , boldword: 'away'},
  { clue: 'Oddly, boar laughed with kid (4)', answer: 'BRAT', explanation: 'odd sounds of BoaR lAUgheD' , boldword: 'kid'},
  { clue: 'Decapitated informant after lifting bottom part of the head (4)', answer: 'CHIN', explanation: 'SNITCH without first sound, reversed' , boldword: 'bottom part of the head'},
  { clue: 'Voiceless gods created resting places (4)', answer: 'COTS', explanation: 'consonants in GODS become unvoiced' , boldword: 'reating places'},
  { clue: 'Swear to vacuum upon returning (4)', answer: 'CUSS', explanation: 'SUCK reversed' , boldword: 'Swear'},
  { clue: 'Ice is held in complete vacuum (5)', answer: 'DYSON', explanation: 'ICE in DONE' , boldword: 'vacuum'},
  { clue: 'Head off from places with ships, getting to places with anvils (4)', answer: 'EARS', explanation: 'PIERS without first sound' , boldword: 'places with anvils'},
  { clue: 'Look at wrist, not using posterior part of the eye (4)', answer: 'IRIS', explanation: 'EYE + WRIST without last sound', boldword: 'part of the eye' },
  { clue: 'Place with a sci-fi princess (4)', answer: 'LEIA', explanation: 'LAY + A', boldword: 'sci-fi princess' },
  { clue: 'After taking off the cap, clean part of a camera (4)', answer: 'LENS', explanation: 'CLEANSE without first sound', boldword: 'part of a camera' },
  { clue: 'Sits around with sad face, having lost heart (5)', answer: 'LOAFS', explanation: 'LOW + FACE without middle sound', boldword: 'Sits around' },
  { clue: 'Spike in road from the South (4)', answer: 'NAIL', explanation: 'LANE reversed', boldword: 'Spike' },
  { clue: 'Government agency from a show came back (4, abbr.)', answer: 'OSHA', explanation: 'A SHOW reversed' , boldword: 'Government agency'},
  { clue: 'Prophetic rodent emerges from filth, mostly (4)', answer: 'PHIL', explanation: 'FILTH without last sound' , boldword: 'Prophetic rodent'},
  { clue: 'Front of a boat will move slowly and quietly (5)', answer: 'PROWL', explanation: 'PROW\'LL' , boldword: 'move slowly and quietly'},
  { clue: 'Stumble and recoil, dropping fish (4)', answer: 'REEL', explanation: 'RECOIL without KOI' , boldword: 'Stumble'},
  { clue: 'Scrutinize processed snack (4)', answer: 'SCAN', explanation: 'anagram of SNACK' , boldword: 'Scrutinize'},
  { clue: 'Transport dense mixture (4)', answer: 'SEND', explanation: 'anagram of DENSE', boldword: 'Transport' },
  { clue: 'I followed sign leading to mountain (5)', answer: 'SINAI', explanation: 'I after SIGN' , boldword: 'mountain'},
  { clue: 'Slides, going through unused expanse in reverse (5)', answer: 'SKIDS', explanation: 'hidden reversed in unuSED EXpanse' , boldword: 'Slides'},
  { clue: 'Devoted fan hides in annexed Andorra (4)', answer: 'STAN', explanation: 'hidden in anneXED ANdorra' , boldword: 'Devoted fan'},
  { clue: 'Cite uplifting Tchaikovsky overtures and the like (4)', answer: 'SUCH', explanation: 'first sounds of Cite Uplifting TCHaikovsky' , boldword: 'the like'},
  { clue: 'Song with a fish (4)', answer: 'TUNA', explanation: 'TUNE + A' , boldword: 'fish'},
];

const solutionGrid = [
  ["C", "U", "S", "S", "S", "E", "N", "D"],
  ["O", "S", "I", "C", "K", "B", "A", "Y"],
  ["T", "U", "N", "A", "I", "R", "I", "S"],
  ["S", "C", "A", "N", "D", "A", "L", "O"],
  ["P", "H", "I", "L", "S", "T", "A", "N"],
  ["R", "A", "C", "O", "A", "R", "S", "E"],
  ["O", "S", "H", "A", "L", "E", "I", "A"],
  ["W", "H", "I", "F", "F", "E", "D", "R"],
  ["L", "E", "N", "S", "A", "L", "E", "S"]
]

export const solutionBody = (
  <div className="max-w-3xl  space-y-4">
    <p>In this cryptic, all wordplay works on a phonemic basis:</p>
      <table className="table-auto border-collapse border w-full">
        <thead>
          <tr>
            <th className="border-2 px-4 py-2 text-left">Clue</th>
            <th className="border-2 px-4 py-2 text-left">Answer</th>
            <th className="border-2 px-4 py-2 text-left">Transformation</th>
          </tr>
        </thead>
        <tbody>
          {solutionData.map((row) => (
            <tr>
              <td className="border px-4">
                {row.clue.split(row.boldword).map((part, i, arr) =>
                  i < arr.length - 1 ? (
                    <>
                      {part}<strong>{row.boldword}</strong>
                    </>
                  ) : (
                    part
                  )
                )}
              </td>
              <td className="border px-4">{row.answer}</td>
              <td className="border px-4">{row.explanation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    <p>All of the clues fit in the grid, but four words are unclued.</p>
    <div className="flex justify-center">
      <Crossword data={cw_data} fill={solutionGrid} borders={cw_bars} />
    </div>
    <p>In order, these sound like SICK BASE CANDLE CORE SWIFT, fitting the enumeration below the grid.</p>
    <p>This is another phonetic cryptic clue, with the answer <Answerize>QUICK</Answerize> (last sound of SICK + WICK).</p>
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
