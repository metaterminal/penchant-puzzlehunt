import { Answerize } from "../components/puzzle/monospace";

/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "youre-missing-something";

/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */
export const inPersonBody = (
  <div className="font-medium text-lg/6">
    <div className="max-w-3xl space-y-4 text-center">
      <div className="text-center">
        <ul className="list-none p-0 m-0">
          <li>Santa Claus wishes a Glory Christmas to the entire world. (6)</li>
          <li>(5 5)</li>
          <li>You can use a square O. Make a smiley face, like so: :] (8)</li>
          <li>(7 7)</li>
          <li>(4)</li>
          <li>Mike Tyson's punt was popular in the 80s. (4)</li>
          <li>(4)</li>
          <li>(6)</li>
          <li>(8)</li>
          <li>If you star tan, a four-spouse will divorce you. (5)</li>
          <li>(8)</li>
          <li>(4)</li>
          <li>(6)</li>
          <li>(5 3)</li>
          <li>(5)</li>
          <li>(5)</li>
          <li>(6)</li>
          <li>(3)</li>
          <li>The scrim's very one wanted was carved from a whale tooth, and its corresponding lock was too. (7)</li>
          <li>(3)</li>
          <li>(9)</li>
          <li>(3)</li>
          <li>The lactose intolerant must avoid day. (2)</li>
          <li>There's hay parts of the human body, including the scalp, face, arms, underarms, chest, and legs. (4 3)</li>
          <li>(5)</li>
          <li>(3)</li>
          <li>(9)</li>
          <li>(6)</li>
          <li>Winnie the poet's sleeping dogs lie. (3)</li>
          <li>(7)</li>
          <li>(6)</li>
          <li>In the firs, tau-token nuggets were found in the victim's stomach. (7)</li>
          <li>During the classic ale, genes lived in a ceramic jar. (5)</li>
          <li>(4)</li>
          <li>(4)</li>
          <li>(2)</li>
          <li>(5)</li>
          <li>(4)</li>
          <li>(7 5)</li>
          <li>(5)</li>
          <li>(3)</li>
          <li>"Of the Theatergoers, Only a Feed": the new movie; most of them loved it! (4)</li>
          <li>(4)</li>
          <li>(5)</li>
          <li>Whether you're measuring in units of J, cal, or kit, hi! Um... batteries can store the most energy. (3)</li>
          <li>The idiom "blot and cold" means to vacillate. (3)</li>
          <li>(2)</li>
          <li>(1-3)</li>
          <li>(3)</li>
          <li>(3)</li>
          <li>"Hang" is common in fraternities. (2)</li>
        </ul>
        
      </div>
      <hr></hr>
      <div>
        <ul className="list-none p-0 m-0">
          <li>???</li>
          <li>????</li>
          <li>?????</li>
          <li>?????</li>
          <li>??</li>
          <li>???</li>
          <li>??</li>
        </ul>
      </div>
      <hr></hr>
      <div className="pb-10">
        <p>(9)</p>
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
  <div className="max-w-3xl space-y-4">
    <p>We can start by solving the Printer's Devilry clues:</p>
    <ul className="pl-4">
      <li>Santa Claus wishes a glo[BAL MER]ry Christmas to the entire world. (6)</li>
      <li>You can use a square [BRACKET T]o make a smiley face, like so: :] (8)</li>
      <li>Mike Tyson's Pun[CH OU]t was popular in the 80s. (4)</li>
      <li>If you start an, af[FAIR Y]our spouse will divorce you. (5)</li>
      <li>The scrims[HAW KEY E]veryone wanted was carved from a whale tooth, and its corresponding lock was too. (7)</li>
      <li>The lactose intolerant must avoid da[IR]y. (2)</li>
      <li>There's ha[IR ON MAN]y parts of the human body, including the scalp, face, arms, underarms, chest, and legs. (4 3)</li>
      <li>Winnie the po[OH L]ets sleeping dogs lie. (3)</li>
      <li>In the first auto[PSY, CHIC]ken nuggets were found in the victim's stomach. (7)</li>
      <li>During the classical e[RA, DIO]genes lived in a ceramic jar. (5)</li>
      <li>Of the Theatergoers, only a fe[W HAT]ed the new movie; most of them loved it! (4)</li>
      <li>Whether you're measuring in units of J, cal, or k[WH, L]ithium batteries can store the most energy. (3)</li>
      <li>The idiom "blo[W HO]t and cold" means to vacillate. (3)</li>
      <li>Ha[ZI]ng is common in fraternities. (2)</li>
    </ul>
    <p>Note that the answers belong to seven certain sets, with two in each set.</p>

      <table className="table-auto border-collapse border border-gray-400 w-full">
        <tbody>
            <tr>
              <td className="border px-4 bg-red-800">Avengers (from the 2012 movie)</td>
              <td className="border px-4">IR</td>
              <td className="border px-4">RADIO</td>
            </tr>
            <tr>
              <td className="border px-4 bg-orange-800">Electromagnetic spectrum</td>
              <td className="border px-4">HAWKEYE</td>
              <td className="border px-4">IRON MAN</td>
            </tr>
            <tr>
              <td className="border px-4 bg-yellow-800">Hydrogen spectral series</td>
              <td className="border px-4">BALMER</td>
              <td className="border px-4">BRACKETT</td>
            </tr>
                <tr>
              <td className="border px-4 bg-green-800">Members of the Canadian Hockey League</td>
              <td className="border px-4">OHL</td>
              <td className="border px-4">WHL</td>
            </tr>
                <tr>
              <td className="border px-4 bg-blue-800">Pokemon types</td>
              <td className="border px-4">FAIRY</td>
              <td className="border px-4">PSCYHIC</td>
            </tr>
                <tr>
              <td className="border px-4 bg-purple-800">Question words</td>
              <td className="border px-4">WHAT</td>
              <td className="border px-4">WHO</td>
            </tr>
                <tr>
              <td className="border px-4 bg-pink-800">Twelve Earthly Branches</td>
              <td className="border px-4">CHOU</td>
              <td className="border px-4">ZI</td>
            </tr>
        </tbody>
      </table>
      <p>We can use this information along with alphabetical order and enumerations to fill out the rest of the answers:</p>

      <table className="table-auto border-collapse border border-gray-400 w-full">
        <tbody>
          <tr><td className="border px-4 bg-yellow-800"><b>BALMER</b></td><td className="border border-gray-400 px-4">Santa Claus wishes a Glory Christmas to the entire world. (6)</td></tr>
          <tr><td className="border px-4 bg-red-800">BLACK WIDOW</td><td className="border border-gray-400 px-4">(5 5)</td></tr>
          <tr><td className="border px-4 bg-yellow-800"><b>BRACKETT</b></td><td className="border border-gray-400 px-4">You can use a square O. Make a smiley face, like so: :] (8)</td></tr>
          <tr><td className="border px-4 bg-pink-800">CAPTAIN AMERICA</td><td className="border border-gray-400 px-4">(7 7)</td></tr>
          <tr><td className="border px-4 bg-pink-800">CHEN</td><td className="border border-gray-400 px-4">(4)</td></tr>
          <tr><td className="border px-4 bg-blue-800"><b>CHOU</b></td><td className="border border-gray-400 px-4">Mike Tyson's punt was popular in the 80s. (4)</td></tr>
          <tr><td className="border px-4 bg-blue-800">DARK</td><td className="border border-gray-400 px-4">(4)</td></tr>
          <tr><td className="border px-4 bg-blue-800">DRAGON</td><td className="border border-gray-400 px-4">(6)</td></tr>
          <tr><td className="border px-4 bg-blue-800">ELECTRIC</td><td className="border border-gray-400 px-4">(8)</td></tr>
          <tr><td className="border px-4 bg-blue-800"><b>FAIRY</b></td><td className="border border-gray-400 px-4">If you star tan, a four-spouse will divorce you. (5)</td></tr>
          <tr><td className="border px-4 bg-blue-800">FIGHTING</td><td className="border border-gray-400 px-4">(8)</td></tr>
          <tr><td className="border px-4 bg-blue-800">FIRE</td><td className="border border-gray-400 px-4">(4)</td></tr>
          <tr><td className="border px-4 bg-blue-800">FLYING</td><td className="border border-gray-400 px-4">(6)</td></tr>
          <tr><td className="border px-4 bg-orange-800">GAMMA RAY</td><td className="border border-gray-400 px-4">(5 3)</td></tr>
          <tr><td className="border px-4 bg-blue-800">GHOST</td><td className="border border-gray-400 px-4">(5)</td></tr>
          <tr><td className="border px-4 bg-blue-800">GRASS</td><td className="border border-gray-400 px-4">(5)</td></tr>
          <tr><td className="border px-4 bg-blue-800">GROUND</td><td className="border border-gray-400 px-4">(6)</td></tr>
          <tr><td className="border px-4 bg-pink-800">HAI</td><td className="border border-gray-400 px-4">(3)</td></tr>
          <tr><td className="border px-4 bg-red-800"><b>HAWKEYE</b></td><td className="border border-gray-400 px-4">The scrim's very one wanted was carved from a whale tooth, and its corresponding lock was too. (7)</td></tr>
          <tr><td className="border px-4 bg-purple-800">HOW</td><td className="border border-gray-400 px-4">(3)</td></tr>
          <tr><td className="border px-4 bg-yellow-800">HUMPHREYS</td><td className="border border-gray-400 px-4">(9)</td></tr>
          <tr><td className="border px-4 bg-blue-800">ICE</td><td className="border border-gray-400 px-4">(3)</td></tr>
          <tr><td className="border px-4 bg-orange-800"><b>IR</b></td><td className="border border-gray-400 px-4">The lactose intolerant must avoid day. (2)</td></tr>
          <tr><td className="border px-4 bg-red-800"><b>IRON MAN</b></td><td className="border border-gray-400 px-4">There's hay parts of the human body, including the scalp, face, arms, underarms, chest, and legs. (4 3)</td></tr>
          <tr><td className="border px-4 bg-yellow-800">LYMAN</td><td className="border border-gray-400 px-4">(5)</td></tr>
          <tr><td className="border px-4 bg-pink-800">MAO</td><td className="border border-gray-400 px-4">(3)</td></tr>
          <tr><td className="border px-4 bg-orange-800">MICROWAVE</td><td className="border border-gray-400 px-4">(9)</td></tr>
          <tr><td className="border px-4 bg-blue-800">NORMAL</td><td className="border border-gray-400 px-4">(6)</td></tr>
          <tr><td className="border px-4 bg-green-800"><b>OHL</b></td><td className="border border-gray-400 px-4">Winnie the poet's sleeping dogs lie. (3)</td></tr>
          <tr><td className="border px-4 bg-yellow-800">PASCHEN</td><td className="border border-gray-400 px-4">(7)</td></tr>
          <tr><td className="border px-4 bg-blue-800">POISON</td><td className="border border-gray-400 px-4">(6)</td></tr>
          <tr><td className="border px-4 bg-blue-800"><b>PSYCHIC</b></td><td className="border border-gray-400 px-4">In the firs, tau-token nuggets were found in the victim's stomach. (7)</td></tr>
          <tr><td className="border px-4 bg-orange-800"><b>RADIO</b></td><td className="border border-gray-400 px-4">During the classic ale, genes lived in a ceramic jar. (5)</td></tr>
          <tr><td className="border px-4 bg-blue-800">ROCK</td><td className="border border-gray-400 px-4">(4)</td></tr>
          <tr><td className="border px-4 bg-pink-800">SHEN</td><td className="border border-gray-400 px-4">(4)</td></tr>
          <tr><td className="border px-4 bg-pink-800">SI</td><td className="border border-gray-400 px-4">(2)</td></tr>
          <tr><td className="border px-4 bg-blue-800">STEEL</td><td className="border border-gray-400 px-4">(5)</td></tr>
          <tr><td className="border px-4 bg-red-800">THOR</td><td className="border border-gray-400 px-4">(4)</td></tr>
          <tr><td className="border px-4 bg-orange-800">VISIBLE LIGHT</td><td className="border border-gray-400 px-4">(7 5)</td></tr>
          <tr><td className="border px-4 bg-blue-800">WATER</td><td className="border border-gray-400 px-4">(5)</td></tr>
          <tr><td className="border px-4 bg-pink-800">WEI</td><td className="border border-gray-400 px-4">(3)</td></tr>
          <tr><td className="border px-4 bg-purple-800"><b>WHAT</b></td><td className="border border-gray-400 px-4">Of the Theatergoers, Only a Feed: the new movie; most of them loved it! (4)</td></tr>
          <tr><td className="border px-4 bg-purple-800">WHEN</td><td className="border border-gray-400 px-4">(4)</td></tr>
          <tr><td className="border px-4 bg-purple-800">WHERE</td><td className="border border-gray-400 px-4">(5)</td></tr>
          <tr><td className="border px-4 bg-green-800"><b>WHL</b></td><td className="border border-gray-400 px-4">Whether you're measuring in units of J, cal, or kit, hi! Um... batteries can store the most energy. (3)</td></tr>
          <tr><td className="border px-4 bg-purple-800"><b>WHO</b></td><td className="border border-gray-400 px-4">The idiom "blot and cold" means to vacillate. (3)</td></tr>
          <tr><td className="border px-4 bg-pink-800">WU</td><td className="border border-gray-400 px-4">(2)</td></tr>
          <tr><td className="border px-4 bg-orange-800">X-RAY</td><td className="border border-gray-400 px-4">(1-3)</td></tr>
          <tr><td className="border px-4 bg-pink-800">YIN</td><td className="border border-gray-400 px-4">(3)</td></tr>
          <tr><td className="border px-4 bg-pink-800">YOU</td><td className="border border-gray-400 px-4">(3)</td></tr>
          <tr><td className="border px-4 bg-pink-800"><b>ZI</b></td><td className="border border-gray-400 px-4">Hang is common in fraternities. (2)</td></tr>
        </tbody>
      </table>
      <p>However, one member of each set is missing:</p>
      <table>
        <tbody>
          <tr><td className="border px-4">Avengers (from the 2012 movie)</td><td className="border border-gray-400 px-4">HULK</td></tr>
            <tr><td className="border px-4">Electromagnetic spectrum</td><td className="border border-gray-400 px-4">UV</td></tr>
            <tr><td className="border px-4">Hydrogen spectral series</td><td className="border border-gray-400 px-4">PFUND</td></tr>
            <tr><td className="border px-4">Members of the Canadian Hockey League</td><td className="border border-gray-400 px-4">QMJHL</td></tr>
            <tr><td className="border px-4">Pokemon types</td><td className="border border-gray-400 px-4">BUG</td></tr>
            <tr><td className="border px-4">Question words</td><td className="border border-gray-400 px-4">WHY</td></tr>
            <tr><td className="border px-4">Twelve Earthly Branches</td><td className="border border-gray-400 px-4">XU</td></tr>
        </tbody>
      </table>
      <p>Finally, note that these answers together are almost a pangram.</p>
      <p>The missing letters anagram to <Answerize>OSTRACIZE</Answerize>.</p>
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
