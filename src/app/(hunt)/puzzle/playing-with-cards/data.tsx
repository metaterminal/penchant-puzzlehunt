import Image from "next/image";
import TABLE from "./playing-with-cards.svg";

/**
 * The puzzle ID is used to uniquely identify the puzzle in the database.
 * It should be equal to the name of the folder this file is currently under.
 * Feel free to make this creative, because the route to the puzzle will be
 * example.com/puzzle/puzzleId.
 */
export const puzzleId = "playing-with-cards";

/**
 * The body renders above the guess submission form. Put flavor text, images,
 * and interactive puzzle components here.
 */
export const inPersonBody = (
  <div className="font-medium text-lg/6">
    <div className="max-w-3xl font-medium mb-4 text-center">
      This game of Greek Hold 'Em is extremely strange... they're only playing with clubs and spades!
    </div>
    <div className="max-w-3xl font-medium mb-4 text-center">
      Thankfully, you're cheating. With the resources available, you produce the best possible hand you can each time.
    </div>
    <div className="max-w-3xl font-medium mb-4 text-center">
      But someone's bound to notice that the dealer isn't dealing to you; you need a different strategy. <i>How can you keep winning?</i>
    </div>
    <Image src={TABLE} alt="" className="max-w-3xl mb-4" />

    <div className="max-w-md mx-auto mb-4">
      <table className="w-full">
        <thead>
          <tr>
            <th colSpan={2} className="text-center">Round 1</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-10">
            <td>P1</td>
            <td className="max-w-xs">Three of a kind (7s), A/8 kickers.</td>
          </tr>
          <tr className="h-10">
            <td>P2</td>
            <td className="max-w-xs">Two pair (As, 7s), K kicker.</td>
          </tr>
          <tr className="h-10">
            <td>P3</td>
            <td className="max-w-xs">Two pair (As, 7s), 5 kicker.</td>
          </tr>
          <tr className="h-10">
            <td>P4</td>
            <td className="max-w-xs">Two pair (7s, 5s), J kicker.</td>
          </tr>
          <tr className="h-10">
            <td>You</td>
            <td className="max-w-xs">???</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="max-w-md mx-auto mb-4">
      <table className="w-full">
        <thead>
          <tr>
            <th colSpan={2} className="text-center">Round 2</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-10">
            <td>P1</td>
            <td className="max-w-xs">Pair (9s), A/K/J kickers... no, wait, A-high clubs flush is better.</td>
          </tr>
          <tr className="h-10">
            <td>P2</td>
            <td className="max-w-xs">Pair (9s), J/5/3 kickers.</td>
          </tr>
          <tr className="h-10">
            <td>P3</td>
            <td className="max-w-xs">Full house (9s full of 10s).</td>
          </tr>
          <tr className="h-10">
            <td>P4</td>
            <td className="max-w-xs">K-high straight.</td>
          </tr>
          <tr className="h-10">
            <td>You</td>
            <td className="max-w-xs">???</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="max-w-md mx-auto mb-4">
      <table className="w-full">
        <thead>
          <tr>
            <th colSpan={2} className="text-center">Round 3</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-10">
            <td>P1</td>
            <td className="max-w-xs">Pair (10s), K/J/5 kickers.</td>
          </tr>
          <tr className="h-10">
            <td>P2</td>
            <td className="max-w-xs">Two pair (10s, 5s), 9 kicker.</td>
          </tr>
          <tr className="h-10">
            <td>P3</td>
            <td className="max-w-xs">Pair (10s), A/7/5 kickers.</td>
          </tr>
          <tr className="h-10">
            <td>P4</td>
            <td className="max-w-xs">Pair (10s), 8/7/5 kickers.</td>
          </tr>
          <tr className="h-10">
            <td>You</td>
            <td className="max-w-xs">???</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="max-w-md mx-auto mb-4">
      <table className="w-full">
        <thead>
          <tr>
            <th colSpan={2} className="text-center">Round 4</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-10">
            <td>P1</td>
            <td className="max-w-xs">Pair (4s), A/K/5 kickers.</td>
          </tr>
          <tr className="h-10">
            <td>P2</td>
            <td className="max-w-xs">Pair (4s), J/10/5 kickers.</td>
          </tr>
          <tr className="h-10">
            <td>P3</td>
            <td className="max-w-xs">Pair (4s), J/10/5 kickers.</td>
          </tr>
          <tr className="h-10">
            <td>P4</td>
            <td className="max-w-xs">7-high spades straight flush. (If I'd had these cards last round, I would have had a 7-high straight then, too!)</td>
          </tr>
          <tr className="h-10">
            <td>You</td>
            <td className="max-w-xs">???</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="max-w-md mx-auto mb-4">
      <table className="w-full">
        <thead>
          <tr>
            <th colSpan={2} className="text-center">Round 1</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-10">
            <td>P5</td>
            <td className="max-w-xs">High card (A). (It'd be a straight, if only my A were a 3!)</td>
          </tr>
          <tr className="h-10">
            <td>P2</td>
            <td className="max-w-xs">6-high clubs straight flush... no, wait, 7-high clubs straight flush is better.</td>
          </tr>
          <tr className="h-10">
            <td>P3</td>
            <td className="max-w-xs">K-high clubs flush.</td>
          </tr>
          <tr className="h-10">
            <td>P4</td>
            <td className="max-w-xs">8-high straight. (If only my two cards were clubs!)</td>
          </tr>
          <tr className="h-10">
            <td>You</td>
            <td className="max-w-xs">???</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className="max-w-md mx-auto mb-4">
      <table className="w-full">
        <thead>
          <tr>
            <th colSpan={2} className="text-center">Round 6</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-10">
            <td>P1</td>
            <td className="max-w-xs">K-high clubs flush. (It'd be a straight, if only my 6 were an 8!)</td>
          </tr>
          <tr className="h-10">
            <td>P2</td>
            <td className="max-w-xs">Two pair (Qs, 10s), K kicker... no, wait, K-high clubs flush is better.</td>
          </tr>
          <tr className="h-10">
            <td>P3</td>
            <td className="max-w-xs">K-high clubs straight flush.</td>
          </tr>
          <tr className="h-10">
            <td>P4</td>
            <td className="max-w-xs">Pair (10s), A kicker... no, wait, A-high clubs flush is better.</td>
          </tr>
          <tr className="h-10">
            <td>You</td>
            <td className="max-w-xs">???</td>
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
