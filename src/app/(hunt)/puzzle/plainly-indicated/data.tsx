/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "plainly-indicated";

import Grid from "~/app/(hunt)/puzzle/components/puzzle/grid"

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

export const inPersonBody = (
  <div>
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
export const solutionBody = (
  <div className="max-w-3xl">This is the solution.</div>
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
