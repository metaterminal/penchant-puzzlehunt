/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "rereading";

import Crossword, { X, _, Borders, Colors } from "~/app/(hunt)/puzzle/components/puzzle/crossword"

const dq_data = [
  ['1','2','3','4','!','5','6','7','8','9','10','!','11','12','13','14','!','15','16','17','18','19'],
  ['!','20','21','22','23','!','24','25','26','27','!','28','29','30','31','32','33','!','34','35','36','37'],
  ['!','38','39','40','41','42','!','43','44','45','46','!','47','48','49','50','51','!','!','!','!','!']
]

const clue1_data = [['15','7','43']];
const clue2_data = [['5','36','23','24']];
const clue3_data = [['39','17','51']];
const clue4_data = [['35','46','42','48']];
const clue5_data = [['14','44','27']];
const clue6_data = [['28','41','31','32']];
const clue7_data = [['45','6','4']];
const clue8_data = [['49','2','9','29']];
const clue9_data = [['37','12','47','40']];
const clue10_data = [['18','3','8','20']];
const clue11_data = [['10','50','38']];
const clue12_data = [['33','19','21','16','13']];
const clue13_data = [['34','30','1']];
const clue14_data = [['11','25','26','22']];

/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */
export const inPersonBody = (
  <div className="font-medium text-lg/6">
    <Crossword 
      data={dq_data}
      cellWidth={45}
      cellHeight={45}
    />
    <div className="max-w-3xl mx-auto">
      <table className="table-auto mt-10 border-separate border-spacing-y-4">
        <tbody>
          <tr>
            <td className="align-top pr-6">Only trans men are described by this abbreviation</td>
            <td><Crossword data={clue1_data} cellWidth={45} cellHeight={45} /></td>
          </tr>
          <tr>
            <td className="align-top pr-6">Supply with new decor, say</td>
            <td><Crossword data={clue2_data} cellWidth={45} cellHeight={45} /></td>
          </tr>
          <tr>
            <td className="align-top pr-6">Features of hosps. where surgeons work</td>
            <td><Crossword data={clue3_data} cellWidth={45} cellHeight={45} /></td>
          </tr>
          <tr>
            <td className="align-top pr-6">Protagonist of the Iliad's weakness</td>
            <td><Crossword data={clue4_data} cellWidth={45} cellHeight={45} /></td>
          </tr>
          <tr>
            <td className="align-top pr-6">Top selling</td>
            <td><Crossword data={clue5_data} cellWidth={45} cellHeight={45} /></td>
          </tr>
          <tr>
            <td className="align-top pr-6">Be ___ the moon (rejoice)</td>
            <td><Crossword data={clue6_data} cellWidth={45} cellHeight={45} /></td>
          </tr>
          <tr>
            <td className="align-top pr-6">Damage to Kylo Ren's ship was caused by her</td>
            <td><Crossword data={clue7_data} cellWidth={45} cellHeight={45} /></td>
          </tr>
          <tr>
            <td className="align-top pr-6">Bit, bar, or bushel, e.g.</td>
            <td><Crossword data={clue8_data} cellWidth={45} cellHeight={45} /></td>
          </tr>
          <tr>
            <td className="align-top pr-6">Kind of seasoning in a shaker, as a chemical formula</td>
            <td><Crossword data={clue9_data} cellWidth={45} cellHeight={45} /></td>
          </tr>
          <tr>
            <td className="align-top pr-6">Nothing says summer like this barbecue side dish</td>
            <td><Crossword data={clue10_data} cellWidth={45} cellHeight={45} /></td>
          </tr>
          <tr>
            <td className="align-top pr-6">Group of letters found on old game consoles</td>
            <td><Crossword data={clue11_data} cellWidth={45} cellHeight={45} /></td>
          </tr>
          <tr>
            <td className="align-top pr-6">Mastery of emotional suppression is the defining trait of one</td>
            <td><Crossword data={clue12_data} cellWidth={45} cellHeight={45} /></td>
          </tr>
          <tr>
            <td className="align-top pr-6">Means of writing "though" in poetry or slang</td>
            <td><Crossword data={clue13_data} cellWidth={45} cellHeight={45} /></td>
          </tr>
          <tr>
            <td className="align-top pr-6">Powerless this Islamic figure is not</td>
            <td><Crossword data={clue14_data} cellWidth={45} cellHeight={45} /></td>
          </tr>
        </tbody>
      </table>
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
