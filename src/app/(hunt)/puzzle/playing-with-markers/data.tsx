import Image from "next/image";
import CARD1 from "./img1.png";
import CARD2 from "./img2.png";
import CARD3 from "./img3.png";
import CARD4 from "./img4.png";
import CARD5 from "./img5.png";
import FINAL from "./img6.png";
import { Answerize } from "../components/puzzle/monospace";
import Grid from "~/app/(hunt)/puzzle/components/puzzle/grid"

/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "playing-with-markers";

/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */
export const inPersonBody = (
  <div className="font-medium text-lg/6">
    <div className="max-w-3xl mb-4 text-center">
      Your game of Telestrations has gone slightly astray -- everyone has been cluing four different words each time!
    </div>
    <div className="mb-4 max-w-3xl text-center">
      Thankfully, you've already peeked at half of the cards. <i>How can you win?</i>
    </div>
    <div className="w-full text-center mb-4">
      <span className="text-xl"><b>Cards You've Seen</b></span><br />
      ADMIRED<br />
      BEGGED<br />
      DODGY<br />
      FIST<br />
      GYROBALL<br />
      LADY FRIENDS<br />
      LEAD-COLORED<br />
      MEIOSIS<br />
      ROY GLENN<br />
      TAILPIECE<br />
    </div>
    <Image src={CARD1} alt="" className="max-w-3xl mb-4" />
    <Image src={CARD2} alt="" className="max-w-3xl mb-4" />
    <Image src={CARD3} alt="" className="max-w-3xl mb-4" />
    <Image src={CARD4} alt="" className="max-w-3xl mb-4" />
    <Image src={CARD5} alt="" className="max-w-3xl mb-10" />
    <div className="h-1 mb-10 bg-white"></div>
    <Image src={FINAL} alt="" className="max-w-3xl mb-4" />
  </div>
);

export const remoteBoxBody = inPersonBody;

export const remoteBody = inPersonBody;

/**
 * The `solutionBody` renders in the solution page.
 * If there are no solutions available, set it null.
 */

const BoldRed = ({ children }) => <span className="text-red-500 font-mono font-bold">{children}</span>;
const BoldYellow = ({ children }) => <span className="text-yellow-500 font-mono font-bold">{children}</span>;
const tableContent = [
  { col1: "CHEF", col2: "2433", col3: "(2+4)^3-3", col4: "213", col5: "Algeria", col6: "DZA" },
  { col1: "STALE", col2: "78253", col3: "(-7+8)*2*5^3", col4: "250", col5: "Rwanda", col6: "RWA" },
  { col1: "LAID", col2: "5243", col3: "-5+(2*4)^3", col4: "507", col5: "Panama", col6: "PAN" },
  { col1: "PROD", col2: "7763", col3: "7*7*6+3", col4: "297", col5: "Aruba", col6: "ABW" },
  { col1: "ABLE", col2: "2253", col3: "2*2*5^3", col4: "500", col5: "Falkland Islands", col6: "FLK" },
];

// not a circle but I don't feel like renaming things
const Circle = ({ children }: { children?: React.ReactNode }) => (
  <div
    className="
      w-full h-full
      bg-red-500
      border-2 border-red-500
      flex items-center justify-center
      font-bold
    "
  >
    {children}
  </div>
);


const finalGrid = [
['D','R',<Circle>{'P'}</Circle>,'A',<Circle>{'F'}</Circle>],
[<Circle>{'Z'}</Circle>,'W','A','B','L'],
['A',<Circle>{'A'}</Circle>,'N',<Circle>{'W'}</Circle>,'K'],
]

export const solutionBody = (
  <div className="max-w-3xl space-y-4">
    <p>This is a metameta using the ten feeder answers and ten additional answers. Each meta uses four answers: two from the feeders and two of the additional answers.</p>
    <p><b>Meta 1:</b></p>
    <p>Four of the answers begin with ROYGBIV letters. These can be ordered by the number of letters after the ROYGBIVs.</p>
    <ul className="list-none">
      <li><b className="text-red-500">BYGO</b>NE</li>
      <li><b className="text-red-500">IVORY</b></li>
      <li><b className="text-red-500">ROY G</b>LENN</li>
      <li><b className="text-red-500">GYROB</b>ALL</li>
    </ul>
    <p>Taking the corresponding segments for each on the seven-segment display, this spells <Answerize>CHEF</Answerize>.</p>
  
    <p><b>Meta 2:</b></p>
    <p>Identify the countries by their flags, then take their capitals:</p>
      <table>
        <tbody>
            <tr>
              <td className="pr-4">EGYPT</td>
              <td className="pr-4">CAIRO</td>
            </tr>
            <tr>
              <td className="pr-4">LIBYA</td>
              <td className="pr-4">TRIPOLI</td>
            </tr>
            <tr>
              <td className="pr-4">TAIWAN</td>
              <td className="pr-4">TAIPEI</td>
            </tr>
            <tr>
              <td className="pr-4">SPAIN</td>
              <td className="pr-4">MADRID</td>
            </tr>
        </tbody>
      </table>
      <p>Four of the answers contain these capitals, separated by one or two letters:</p>
      <ul className="list-none font-mono">
        <li><BoldRed>O</BoldRed>[ST]<BoldRed>RACI</BoldRed>ze</li>
        <li><BoldRed>POL</BoldRed>[A]<BoldRed>RITI</BoldRed>es</li>
        <li><BoldRed>TAI</BoldRed>[L]<BoldRed>PIE</BoldRed>ce</li>
        <li><BoldRed>ADMIR</BoldRed>[E]<BoldRed>D</BoldRed></li>
      </ul>
      <p>The interrupting letters spell <Answerize>STALE</Answerize>.</p>

      <p><b>Meta 3:</b></p>
      <p>Four of the answers end with a pattern of two pairs of letters and one other letter.</p>
      <ul className="list-none font-mono">
        <li>dr<BoldRed>O</BoldRed><BoldYellow>P</BoldYellow><BoldRed>OFF</BoldRed></li>
        <li>ciga<BoldYellow>R</BoldYellow><BoldRed>ETTE</BoldRed></li>
        <li>me<BoldRed>I</BoldRed><BoldYellow>O</BoldYellow><BoldRed>SIS</BoldRed></li>
        <li>b<BoldRed>EGGE</BoldRed><BoldYellow>D</BoldYellow></li>
      </ul>
      <p>The extra letters spell <Answerize>PROD</Answerize>.</p>

      <p><b>Meta 4:</b></p>
      <p>Four of the answers consist of a four-letter word and a seven-letter word containing a four-letter word. We can take the eigenletters between the four-letter words.</p>
      <ul className="list-none font-mono">
        <li><BoldYellow>L</BoldYellow>EAD CO<BoldYellow>L</BoldYellow><BoldRed>ORE</BoldRed>D</li>
        <li>SH<BoldYellow>A</BoldYellow>W T<BoldRed>HE</BoldRed><BoldYellow>A</BoldYellow><BoldRed>T</BoldRed>RE</li>
        <li>W<BoldYellow>I</BoldYellow>LD JAS<BoldRed>M</BoldRed><BoldYellow>I</BoldYellow><BoldRed>NE</BoldRed></li>
        <li>LA<BoldYellow>D</BoldYellow>Y FRI<BoldRed>EN</BoldRed><BoldYellow>D</BoldYellow><BoldRed>S</BoldRed></li>
      </ul>
      <p>Ordered by position in the seven-letter word, these spell <Answerize>LAID</Answerize>.</p>

    <p><b>Metameta:</b></p>
    <p>Convert the answers to numbers via T9, perform the operations, find the country with the result as a calling code, then find the country's 3 letter ISO code:</p>
    <table className="table-auto border-collapse border">
      <thead>
        <tr>
          <th className="border-2 px-4 py-2 text-left">Answer</th>
          <th className="border-2 px-4 py-2 text-left">T9</th>
          <th className="border-2 px-4 py-2 text-left">Math</th>
          <th className="border-2 px-4 py-2 text-left">Calling Code</th>
          <th className="border-2 px-4 py-2 text-left">Country</th>
          <th className="border-2 px-4 py-2 text-left">ISO code</th>
        </tr>
      </thead>
      <tbody>
        {tableContent.map((row) => (
          <tr key={row.col1}>
            <td className="border px-4">{row.col1}</td>
            <td className="border px-4">{row.col2}</td>
            <td className="border px-4">{row.col3}</td>
            <td className="border px-4">{row.col4}</td>
            <td className="border px-4">{row.col5}</td>
            <td className="border px-4">{row.col6}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <p>Write these in the columns, then read across the rows (ignoring Xed out letters):</p>
    <Grid 
      data={finalGrid} 
      lightBorder={true}
    />
    <p>The answer is <Answerize>DRAW A BLANK</Answerize>.</p>
  
  </div>
);

/**
 * The `authors` string renders below the `solutionBody`.
 */
export const authors = "noneuclidean, Thomas Gordon";

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
