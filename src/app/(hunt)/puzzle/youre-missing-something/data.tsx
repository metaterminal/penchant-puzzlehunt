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
  <div>
    <div className="max-w-3xl space-y-4 text-center">
      <div className="text-right">
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
