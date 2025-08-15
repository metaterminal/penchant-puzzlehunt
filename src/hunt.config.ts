import { db } from "./server/db";
import { hints } from "./server/db/schema";
import { and, count, eq, ne } from "drizzle-orm";

/** REGISTRATION AND HUNT START */
export const REGISTRATION_START_TIME = new Date("2024-11-17T17:00:00.000Z");
export const REGISTRATION_END_TIME = new Date("2025-09-01T03:59:00.000Z");

/*export const IN_PERSON = {
  KICKOFF_DOOR_TIME: new Date("2024-04-12T15:30:00.000Z"),
  KICKOFF_TIME: new Date("2024-04-12T16:00:00.000Z"),
  START_TIME: new Date("2024-04-12T17:30:00.000Z"),
  END_TIME: new Date("2030-04-13T23:00:00.000Z"),
  WRAPUP_DOOR_TIME: new Date("2030-04-13T23:30:00.000Z"),
  WRAPUP_TIME: new Date("2030-04-14T00:00:00Z"),
};*/

export const REMOTE = {
  START_TIME: new Date("2025-08-15T22:00:00.000Z"),
  END_TIME: new Date("2025-08-21T22:00:00.000Z"),
  WRAPUP_TIME: new Date("2025-09-01T03:59:00.000Z"),
};

export type Round = {
  name: string;
  puzzles: string[];
};

/** GUESSES */
export const NUMBER_OF_GUESSES_PER_PUZZLE = 20;

export function sanitizeAnswer(answer: any) {
  return typeof answer === "string"
    ? answer.toUpperCase().replace(/[^A-Z0-9]/g, "")
    : "";
}

/** PUZZLE UNLOCK SYSTEM
 * WARNING: make sure that everything here is a valid puzzle ID.
 * You should really avoid changing anything here after the hunt starts
 */

/** Puzzles available at the beginning of the hunt that will never need to be unlocked by the team. */
export const INITIAL_PUZZLES: string[] = ["playing-with-places", "penchant-word-search", "pen-paper-logic", "blank-matchmaker", "ladders"];

/** Adjacency list for puzzles */
export const PUZZLE_UNLOCK_MAP: Record<string, string[]> = {
  "playing-with-places": ["playing-with-words", "playing-with-cards"], 
  "playing-with-words": ["playing-with-letters", "playing-with-markers"], 
  "playing-with-cards": ["playing-with-markers"], 
  "penchant-word-search": ["youre-missing-something", "reportedly"],
  "pen-paper-logic": ["reportedly", "gas-water-electricity"],
  "blank-matchmaker": ["gas-water-electricity", "oh-just-a-criss-cross"],
  "ladders": ["oh-just-a-criss-cross","youre-missing-something"],
  "reportedly": ["plainly-indicated", "rereading"],
  "youre-missing-something": ["plainly-indicated", "rereading"],
  "gas-water-electricity": ["plainly-indicated", "rereading"],
  "oh-just-a-criss-cross": ["plainly-indicated", "rereading"],
  "plainly-indicated": ["youre-missing-something", "reportedly", "gas-water-electricity", "oh-just-a-criss-cross"],
  "rereading": ["youre-missing-something", "reportedly", "gas-water-electricity", "oh-just-a-criss-cross"]
};

/** List of puzzles in each round. Each puzzle must be in a round. **/
export const ROUNDS: Round[] = [
  { name: "Meta", puzzles: [
    "playing-with-places", 
    "playing-with-words", 
    "playing-with-cards", 
    "playing-with-letters", 
    "playing-with-markers", 
    "playing-with-others"
  ]},
  { name: "Feeders", puzzles: [
    "plainly-indicated",
    "penchant-word-search",
    "youre-missing-something",
    "reportedly",
    "gas-water-electricity",
    "rereading",
    "blank-matchmaker",
    "pen-paper-logic",
    "oh-just-a-criss-cross",
    "ladders"
  ]}
];

/** List of meta puzzles. Solving all of the metas unlocks the runaround. */
export const META_PUZZLES: string[] = [
  "playing-with-places", 
  "playing-with-words", 
  "playing-with-cards", 
  "playing-with-letters", 
  "playing-with-markers",
  "playing-with-others"];

/* HINTING SYSTEM
 * Teams currently get a hint request every three hours since the start of the hunt.
 * Teams cannot have more than one outstanding request at a time.
 */

/** Calculates the total number of hints given to a team */
export function getTotalHints(role: string, interactionMode: string) {
  const initialNumberOfHints =
    role == "admin" || role == "testsolver" ? 1e6 : 0;

  const huntStartTime = REMOTE.START_TIME;

  const huntEndTime = REMOTE.END_TIME;

  const timeDifference =
    Math.min(new Date().getTime(), huntEndTime.getTime()) -
    huntStartTime.getTime();

  const rate = 24 * 60 * 60 * 1000; // 24 hours

  return initialNumberOfHints + (2 * Math.max(Math.floor(timeDifference / rate), 0));
}

/** Calculates the total number of hints available to a team */
export async function getNumberOfHintsRemaining(
  teamId: string,
  role: string,
  interactionMode: string,
) {
  const totalHints = getTotalHints(role, interactionMode);
  const query = await db
    .select({ count: count() })
    .from(hints)
    .where(and(eq(hints.teamId, teamId), ne(hints.status, "refunded")));
  const usedHints = query[0]?.count ? query[0].count : 0;
  return totalHints - usedHints;
}
