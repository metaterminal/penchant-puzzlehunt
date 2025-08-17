/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "plainly-indicated";

import Grid from "~/app/(hunt)/puzzle/components/puzzle/grid"
import { Answerize } from "../components/puzzle/monospace";

/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */


const content = [
  ['cipher','','','','','','','','','','','','','','','','','','','','','','','','','',''],
  ['plain','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
]
const format = [
  ['p-10','','','','','','','','','','','','','','','','','','','','','','','','','',''],
  ['p-2','','','','','','','','','','','','','','','','','','','','','','','','','',''],
]
const noBorder = [
  [true],
  [true],
]
export const inPersonBody = (
  <div className="font-medium text-lg/6">
    <div className="max-w-3xl space-y-4 text-center">
      <div className="py-4">
        <ul className="list-none">
          <li>TPTY PM REMAY (BKYIEBTY RMBKB RMPKELT); LBRTEMY PM TMBR, BA B UYBAT (3)</li>
          <li>SDM (IYUDYTE A MYYI AE AIYA); TSAPY ___; ALLIYTT ___ (3)</li>
          <li>SUS-AUSN TSNAUMDUSF ATOFA UI SU. USF MTA, US T MDUSF, F.N. (3)</li>
          <li>WTAH T RTAHS ATW: EH ETS OHHW T OKI TAKIL LR RKSHB (3)</li>
          <li>"E-LTO" EK. ATBKMOE STRTOS SCLMOMCO ACBSMOE CAMC (3)</li>
          <li>WSY YHS ___ (RNCTFSHSAD YHS IBLORL YN LNCSYHOAW) (4)</li>
          <li>NGINRL RE AGMR FGOR MBAORIRR, VGAO, LBAM, RMS. (IRM ERILRRA MNRLR) (4)</li>
          <li>APGTTPA; WGTWA OIG AIFT DWGA PI APTTG (WA WR WEEG.) (3)</li>
          <li>XKKSUMPP ISMSI (MPPKS MOKHRS: IHO KX XKHD & DKKS KX XKHD) (3)</li>
          <li>ATAUS DR EAAC SD RDLLDE ODU., E/ EAF. RDIUF SD RDLLDE (3)</li>
        </ul>
      </div>
      <div>
        <Grid 
          data={content} 
          lightBorder={true}
          classNames={format}
          noBorder={noBorder}
        />
      </div>
      <br></br>
    </div>
  </div>
);

export const remoteBoxBody = inPersonBody;

export const remoteBody = inPersonBody;

/**
 * The `solutionBody` renders in the solution page.
 * If there are no solutions available, set it null.
 */
const gridContent = [
['B','U','L','K','Y','','','','','','','','','','P','R','I','M','A','T','E','','','','',''],
['A','M','P','L','Y','','','','','','','','','','','S','U','I','T','E','D','','','','',''],
['T','O','','','F','I','N','D','','','','A','','S','U','M','','','','','','','','','',''],
['T','O','','S','H','R','I','E','K','','','B','A','W','L','','','','','','','','','','',''],
['','','','S','T','R','E','A','M','','','B','L','O','C','K','','','','','','','','','',''],
['B','I','R','D','S','','W','H','O','','','','C','A','N','T','','F','L','Y','','','','','',''],
['','','S','E','R','V','I','N','G','','O','F','','','','','','L','A','M','B','','','','',''],
['W','E','D','','T','O','','','','','','','F','R','I','','','G','A','P','','','','','',''],
['M','U','','','','X','','','','','','P','O','R','K','','','D','I','S','H','','','','',''],
['','','','F','A','R','','','','','C','L','O','U','D','','','','','S','I','T','E','','',''],
]
const tableContent = [
  { col1: "BAG", col2: "APE" },
  { col1: "BAR", col2: "APT" },
  { col1: "BFF", col2: "ADD" },
  { col1: "CHE", col2: "CRY" },
  { col1: "FBI", col2: "DAM" },
  { col1: "GIST", col2: "EMUS" },
  { col1: "HBCU", col2: "RACK" },
  { col1: "RDS", col2: "THU" },
  { col1: "TDS", col2: "SHU" },
  { col1: "TUE", col2: "SKY" }
];
const cipherText = [
['cipher','P','A','C','H','Y','D','E','R','M','','','','','','','','','T','U','S','K','','','','',''],
['plain','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
]


export const solutionBody = (
  <div className="max-w-3xl space-y-4">
    <p>Start by solving the cryptograms, taking note of the cipher keys:</p>
    <p><b>Solved cryptogram</b></p>
    <div>
      <ul className="list-none">
        <li>TOTE OR PURSE (ADEQUATE PRADA PRODUCT); CAPTURE OR TRAP, AS A BEAST</li>
        <li>PUB (REQUEST A BEER AT AREA); SPACE ___; ADDRESS ___</li>
        <li>NON-LONG ANGLOPHONE LABEL OF NO. ONE PAL, ON A PHONE, E.G.</li>
        <li>NAME A FAMED MAN: HE HAD BEEN A BIG AMIGO OF FIDEL</li>
        <li>"G-MEN" GP. HELPING DEFEND DOMINION HOLDING OHIO</li>
        <li>GET THE ___ (COMPREHEND THE BASICS TO SOMETHING)</li>
        <li>HIGHER ED SITE LIKE TUSKEGEE, FISK, RUST, ETC. (GET DEGREES THERE)</li>
        <li>STREETS; AREAS FOR SOME CARS TO STEER (AS AN ABBR.)</li>
        <li>FOOTBALL STATS (ALLOT AMOUNT: SUM OF FOUR & ROOT OF FOUR)</li>
        <li>EVENT OF WEEK TO FOLLOW MON., W/ WED. FOUND TO FOLLOW</li>
      </ul>
    </div>
    <p><b>Cipher key (ordered by plaintext alphabet)</b></p>
    <Grid 
      data={gridContent} 
      lightBorder={true}
    />
    <p>Each clue thus yields two clues: one from the solved cryptogram plaintext and one from the cipher key.</p>
    <div className="flex justify-center">
      <table className="table-auto border-collapse border">
        <thead>
          <tr>
            <th className="border-2 px-4 py-2 text-left">Plain</th>
            <th className="border-2 px-4 py-2 text-left">Cipher</th>
          </tr>
        </thead>
        <tbody>
          {tableContent.map((row) => (
            <tr>
              <td className="border px-4">{row.col1}</td>
              <td className="border px-4">{row.col2}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <p>These form one last cryptogram:</p>
    <Grid 
      data={cipherText} 
      lightBorder={true}
      noBorder={noBorder}
    />
    <p>The clue resolves to <Answerize>IVORY</Answerize>.</p>
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
