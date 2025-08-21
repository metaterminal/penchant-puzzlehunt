import { Answerize } from "../components/puzzle/monospace";

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
            <td className="max-w-xs">Pair (10s), K/J/5 kickers... no, wait, K-high spades flush is better.</td>
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
            <th colSpan={2} className="text-center">Round 5</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-10">
            <td>P1</td>
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
    <div className="text-xl text-center max-w-md mx-auto mb-4">
      <table className="w-full">
        <tbody>
          <tr className="h-10">
            <td>▮<span className="text-base">▮</span></td>
            <td><span className="text-base">▮</span>▮</td>
            <td><span className="text-base">▮</span>▮</td>
            <td>▮<span className="text-base">▮</span></td>
            <td><span className="text-base">▮</span>▮</td>
            <td><span className="text-base">▮</span>▮</td>
            <td>▮<span className="text-base">▮</span></td>
          </tr>
          <tr className="h-10">
            <td>5</td>
            <td>1</td>
            <td>6</td>
            <td>3</td>
            <td>2</td>
            <td>4</td>
            <td>3</td>
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
  <div className="max-w-3xl">
    <p className="mb-4">
      Taking a look at the puzzle page, we might notice a few interesting things:
    </p>
    <ul className="mb-4">
      <li>There are 78 cards played in all six rounds; the same as the number of letters in all our answers!</li>
      <li>In a deck containing only clubs and spades, there are 26 unique kinds of cards; the 13 spades (2 through A) 
        and 13 clubs (2 through A).</li>
    </ul>
    <p className="mb-4">
      From this information, and the presentation of the diagram on the puzzle page, we might infer what's going on here: 
      that each of the letters in our answers represent a club or spade, and all our answers (concatenated together in puzzle 
      order) act as the 'deck' which these cards are being dealt from. 
    </p>
    <p className="mb-4">
      It is with these cards that the players are playing poker; specifically, a variant known as Greek Hold 'Em, where players 
      must use both of their "hole" cards, and only three cards on the table, to make the best possible hand. With our wits now 
      firmly about us and the rules for poker in front of us, we can use what each player says about their hand each 
      to uniquely determine the card-letter mappings:
    </p>
    <table className="mb-4 mx-auto text-center">
        <tr>
            <th className="px-4">Rank</th>
            <th className="px-4">Clubs</th>
            <th className="px-4">Spades</th>
        </tr>
        <tr>
            <td>2</td>
            <td>G</td>
            <td>V</td>
        </tr>
        <tr>
            <td>3</td>
            <td>J</td>
            <td>C</td>
        </tr>
        <tr>
            <td>4</td>
            <td>N</td>
            <td>F</td>
        </tr>
        <tr>
            <td>5</td>
            <td>D</td>
            <td>I</td>
        </tr>
        <tr>
            <td>6</td>
            <td>W</td>
            <td>B</td>
        </tr>
        <tr>
            <td>7</td>
            <td>O</td>
            <td>Y</td>
        </tr>
        <tr>
            <td>8</td>
            <td>P</td>
            <td>M</td>
        </tr>
        <tr>
            <td>9</td>
            <td>S</td>
            <td>Z</td>
        </tr>
        <tr>
            <td>10</td>
            <td>E</td>
            <td>K</td>
        </tr>
        <tr>
            <td>J</td>
            <td>T</td>
            <td>X</td>
        </tr>
        <tr>
            <td>Q</td>
            <td>H</td>
            <td>Q</td>
        </tr>
        <tr>
            <td>K</td>
            <td>A</td>
            <td>U</td>
        </tr>
        <tr>
            <td>A</td>
            <td>R</td>
            <td>L</td>
        </tr>
    </table>
    <p className="mb-4">
      (A full logic path to follow when Thomas isn't busy answering hints on the side.)
    </p>
    <p className="mb-4">
      With the card-letter mappings uniquely determined, we can now cheat effectively! As the diagram indicates, we 
      can choose any two clubs (of different rank) to try to make the best hand that we can. 
    </p>
    <table className="mb-4">
        <tr>
            <th className="pr-4 text-left">Round</th>
            <th className="pr-4 text-left">Best Hand</th>
            <th className="pr-4 text-left">Cards</th>
            <th className="pr-4 text-left">Letters</th>
        </tr>
        <tr>
            <td>1</td>
            <td>Full House (7s full of As)</td>
            <td>7 of clubs, A of clubs</td>
            <td>OR</td>
        </tr>
        <tr>
            <td>2</td>
            <td>K-high Straight Flush</td>
            <td>Q of clubs, K of clubs</td>
            <td>HA</td>
        </tr>
        <tr>
            <td>3</td>
            <td className="pr-4">Full House (10s full of 5s)</td>
            <td className="pr-4">5 of clubs, 10 of clubs</td>
            <td>DE</td>
        </tr>
        <tr>
            <td>4</td>
            <td>Full House (4s full of 5s)</td>
            <td>4 of clubs, 5 of clubs</td>
            <td>ND</td>
        </tr>
        <tr>
            <td>5</td>
            <td>10-high Straight Flush</td>
            <td>8 of clubs, 9 of clubs</td>
            <td>PS</td>
        </tr>
        <tr>
            <td>6</td>
            <td>Royal Flush</td>
            <td>J of clubs, A of clubs</td>
            <td>TR</td>
        </tr>
    </table>
    <p className="mb-4">
      Finally, ordering these letters in the manner given by the diagram at the bottom (with the "larger" rank being 
      on the left or right of the bigram, as indicated) tells us how we can win going forward: we need to <Answerize>SPORT RED HANDED</Answerize>.
    </p>
  </div>
);

/**
 * The `authors` string renders below the `solutionBody`.
 */
export const authors = "Thomas Gordon";

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
