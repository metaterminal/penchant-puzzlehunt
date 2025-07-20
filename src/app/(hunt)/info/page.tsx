"use client";

import Link from "next/link";
import {
  TOCContext,
  useTOCContextValues,
  TOCSection,
  TableOfContents,
} from "@/components/toc/TableOfContents";
import Timeline from "./Timeline";
import { REMOTE } from "~/hunt.config";

const formatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  timeZoneName: "short",
});

const timeOnly = new Intl.DateTimeFormat("en-US", {
  hour: "numeric",
  minute: "numeric",
});

const HuntTimeline = [
  {
    title: "Hunt Begins",
    description: `Puzzles for all teams will be released on ${formatter.format(REMOTE.START_TIME)}.`,
  },
  {
    title: "Hunt Ends",
    description: `The hunt will end on ${formatter.format(REMOTE.END_TIME)}. Hints will no longer be answered and the leaderboard will be frozen. You can still register a team and progress through the hunt until ${formatter.format(REMOTE.WRAPUP_TIME)}.`,
  },
  {
    title: "Wrap-Up",
    description: `A written wrap-up will be released on ${formatter.format(REMOTE.WRAPUP_TIME)}.`,
  },
];

export default function Page() {
  const values = useTOCContextValues();
  return (
    <TOCContext.Provider value={values}>
      <div className="flex px-4">
        <TableOfContents />
        {/* Spacer since TOC is fixed */}
        <div className="md:w-1/3 xl:w-1/5"></div>
        <div className="w-full md:w-2/3 xl:w-3/5">
          <article className="prose prose-info w-full max-w-none bg-black/30 p-6">
            <h1>Rules and Frequently Asked Questions</h1>
            <TOCSection
              sectionId={0}
              tocTitle="What is this?"
              isFirst
            >
              <h2>What is this?</h2>
              <p>
                Penchant is an online puzzlehunt, beginning on {formatter.format(REMOTE.START_TIME)}, 
                and ending on {formatter.format(REMOTE.END_TIME)}, 
                for teams of up to 6 people. Anyone in the world can participate.
              </p>
              <p>
                In a puzzlehunt, participants compete in teams to solve puzzles.
                Puzzles can come in many different forms; the only commonality
                is that there are usually no direct instructions, so it is up to
                you to extract an English word or phrase from the information
                given. You can read a longer introduction to puzzlehunts{" "}
                <Link
                  href="https://blog.vero.site/post/puzzlehunts"
                  className="no-underline hover:underline"
                >
                  here
                </Link>
                .
              </p>
              <Timeline timeline={HuntTimeline} />
            </TOCSection>
            <TOCSection
              sectionId={1}
              tocTitle="What will the hunt be like?"
            >
              <h2>What will the hunt be like?</h2>
              <p>
                The hunt consists of one round with ten feeder puzzles. The 
                feeder puzzles will have the following mechanics: 
              </p>
              <ul>
                <li>Cryptogram</li>
                <li>Wordsearch</li>
                <li>Printer's devilry</li>
                <li>Cryptic clues</li>
                <li>Mathematical puzzle</li>
                <li>Acrostic</li>
                <li>Matchmaker</li>
                <li>Pen-and-paper logic (or grid logic, if you'd prefer)</li>
                <li>Criss-cross</li>
                <li>Word ladder</li>
              </ul>
              <p>
                Some puzzles will be more challenging; some puzzles will be more 
                accessible. We think that the overall hunt is similar in difficulty 
                to{" "}
                <Link
                  href="https://crumspuzzlehunt.com/"
                  className="no-underline hover:underline"
                >
                  CRUMS Puzzlehunt
                </Link>, though it is slightly larger.
              </p>
            </TOCSection>

            <TOCSection
              sectionId={2}
              tocTitle="How large can teams be?"
            >
              <h2>How large can teams be?</h2>
              <p>
                There are three options for team sizes.
              </p>
              <p>
                The maximum team size is 
                6 people. (You may go slightly above this number if you think you'll 
                have more fun, but please shoot us an email at FIXME EMAIL to let us 
                know.) These teams will be shown on the <strong>Full Squad</strong>{" "}
                leaderboard.
              </p>
              <p>
                If you have 3 or fewer members, you may instead choose to register as 
                a <strong>Half Squad</strong> (which is strictly limited to a maximum 
                of 3 people). This is a stricter size limit; if you end up having 4 
                members instead of 3, please switch to <strong>Full Squad</strong>{" "} 
                instead!
              </p>
              <p>
                If you wish for a true challenge, you can sign up as a solo 
                solver — a team with only 1 member — and be shown on the{" "}
                <strong>Solo Solver</strong> leaderboard. 
              </p>
              <p>
                You can freely switch between team sizes and leaderboard options 
                until the hunt starts. If you wish to change your team size after 
                the hunt has started, send us an email at FIXME EMAIL.
              </p>
              <p>
                As always, you may ask for help from people who are not on your team, 
                as long as they are not helping other teams and are not actively 
                participating in the hunt.
              </p>
            </TOCSection>
            <TOCSection
              sectionId={3}
              tocTitle="How do puzzles/hints work?"
            >
              <h2>How do the puzzles work?</h2>
              <p>
                All puzzles will be visible on the website. This is where you will 
                submit your answers and receive new puzzles. Some puzzles will be 
                available at the start of the hunt; solving puzzles will unlock 
                more puzzles.
              </p>
              <p>
                Each answer is a string of English letters. Answers are not case- 
                or space-sensitive.
              </p>
              <p>
                You have 20 total guesses for each puzzle. (This is a lot!) 
              </p>
              <p>
                Please don't randomly guess or brute-force the answer checker! If 
                you run out of guesses for what you consider to be a valid reason, 
                contact us, and we would be happy to grant you more. 
              </p>
              <h2>How do hints work? </h2>
              <p>
                You can use hint requests to ask for help on any puzzle. This
                can be something like a nudge in the right direction (i.e. you
                give us your progress on the puzzle and we will try to get you
                unstuck) or an answer to a question (e.g. “Which answers to
                these crossword clues are wrong?”). You can only have one open
                hint request at a time. 
              </p>
              <p>
                You start with 0 hints, and will receive 2 more for every 24 
                hours elapsed since event start. You can only have one open 
                hint request at a time. 
              </p>
            </TOCSection>
            <TOCSection sectionId={5} tocTitle="Who is running this hunt?">
              <h2>Who is running this hunt?</h2>
              <p>
                This hunt was commissioned by Penchant Ltd. in 2054, and 
                constructed by some wonderful folks in the 2020s.
              </p>
              <p>
                Penchant is a board game company founded in the United Kingdom in 
                2034, dedicated to bringing interesting experiences to people 
                all over the world. This hunt celebrates our 20th anniversary!
              </p>
            </TOCSection>
            <TOCSection sectionId={6} tocTitle="Does it cost anything to participate? Is there a prize?">
              <h2>Does it cost anything to participate? Is there a prize?</h2>
              <p>
                This hunt is free to participate in!
              </p>
              <p>
                If you want to cover some server costs for the 2025 crew, however, 
                feel free to donate FIXME DONATION LINK.
              </p>
              <p>
                There is no prize for winning, for various legal-temporal reasons.
              </p>
              </TOCSection>
              <TOCSection sectionId={7} tocTitle="What miscellaneous rules do you also need to tell me about?">
              <h2>What miscellaneous rules do you also need to tell me about?</h2>
              <p>
                Please don't use generative AI (including, but not limited to, 
                large-language models like ChatGPT) while solving this hunt. If you 
                have access to AGI, please also refrain from consulting it.
              </p>
              <p>
                However, use of your favorite search engine will be essential to 
                solving the hunt. You may also benefit from other online tools, such as:
              </p>
              <ul>
                <li>
                  Online wordplay solvers like{" "}
                  <Link
                    href="https://nutrimatic.org/"
                    className="no-underline hover:underline"
                  >
                    nutrimatic
                  </Link>
                  ,{" "}
                  <Link
                    href="https://onelook.com/"
                    className="no-underline hover:underline"
                  >
                    OneLook
                  </Link>
                  , or{" "}
                  <Link
                    href="https://www.quinapalus.com/qat.html"
                    className="no-underline hover:underline"
                  >
                    qat
                  </Link>
                </li>
                <li>
                  Logic puzzle solvers like{" "}
                  <Link
                    href="https://www.noq.solutions/"
                    className="no-underline hover:underline"
                  >
                    noq
                  </Link>
                </li>
              </ul>
              <p>
                You may not publicly stream a solve of our hunt while the 
                hunt is occurring.
              </p>
              <p>
                We reserve the right to disqualify any team for unsportsmanlike 
                conduct. We also reserve the right to change any of these rules. 
                If there is a big change, we will announce it to all teams 
                (most likely by email).
              </p>
              <p>
                If you have any questions about these rules, or if you want to 
                contact us for any reason, please email us at FIXME EMAIL.
              </p>
            </TOCSection>
            <TOCSection sectionId={8} tocTitle="Credits">
              <h2>Credits</h2>
              <p>
                This event was made possible by the following people in 2025:
              </p>
              <p>
                FIXME CREDITS
              </p>
              <p>
                Unfortunately, we are legally restricted from providing any 
                identifiable information about our future employees.
              </p>
            </TOCSection>
          </article>
        </div>
      </div>
    </TOCContext.Provider>
  );
}
