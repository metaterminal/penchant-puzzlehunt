"use client";
import {
  TOCContext,
  useTOCContextValues,
  TOCSection,
  TableOfContents,
} from "@/components/toc/TableOfContents";
import Countdown from "@/components/nav/Countdown";
import { REMOTE } from "~/hunt.config";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function WrapUp() {
  const values = useTOCContextValues();

  return (
    <TOCContext.Provider value={values}>
      <div className="flex px-4">
        <TableOfContents />
        
        {/* Spacer since TOC is fixed */}
        <div className="md:w-1/3 xl:w-1/5"></div>

        <div className="w-full md:w-2/3 xl:w-3/5">
          <article className="text-white w-full max-w-none bg-black/30 p-10 prose-img:my-0">
            <h1 className="text-center text-4xl mb-4">Wrapup</h1>
              <TOCSection tocTitle="General" sectionId={1} isFirst>
              <p className="mb-4">
                <b>This wrapup will contain unmarked spoilers for all of Penchant's metas, 
                  some feeder answers, and the mechanics to some feeder puzzles. 
                  You have been warned.</b>
              </p>
              <img
                  className="rounded-md max-w-sm mx-auto mb-5"
                  src="/wrapup/tarot_white.svg"
                  alt=""
                />
              <p className="mb-4">
                Congratulations to all the teams that finished Penchant Puzzlehunt! 
              </p>
              <p className="mb-4">
                In particular, kudos to the winners in each of the categories:
              </p>
              <ul className="ml-10 mb-5">
                <li>Full Squad: The C@r@line Syzygy</li>
                <li>Half Squad: ඐ SINHALA HILARIOUS MEME FROM 2054</li>
                <li>Solo: 1e63</li>
              </ul>
              <p className="mb-4">
                In total, 53 full squads, 15 half squads, and 30 (!) solo solvers 
                completed the final metameta and finished the hunt.
              </p>
            </TOCSection>
            <TOCSection tocTitle="Writing Process" sectionId={2} isFirst>
              <h2 className="text-center text-2xl my-4">Writing Process</h2>
              <div className="grid grid-cols-3 gap-4 mb-5">
                <img
                    className="rounded-md"
                    src="/wrapup/1.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="/wrapup/2.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="/wrapup/3.jpg"
                    alt=""
                  />
                </div>
              <p className="mb-5 max-w-2xl text-center mx-auto">
                <i>While designing the puzzles for your puzzlehunt, adhere 
                  to traditions and institutions that solvers will expect. 
                  This will give your hunt success and recognition. You 
                  should also focus on balancing complexity and clarity 
                  in your puzzles.</i>
              </p>
              <p className="text-center text-lg mb-4">
                <u>Initial Idea</u>
              </p>
              <p className="mb-4">
                I was first approached by <a href="https://bsky.app/profile/tazarian.bsky.social"><u>tazarian</u></a> with the idea of writing a hunt for Penchant in 
                late April 2024. Soon after, I pitched the idea of multiple metas all taking the 
                same set of feeders. The inspiration stemmed from several sources: firstly, I 
                wanted to see if it could be done, but secondly I wanted to solve a problem I 
                had been thinking about for a long time, which was early meta unlocks. Metas 
                which are unlocked early in a round often cause the last few feeders to be “skipped” 
                by top teams if the meta is solved too rapidly. (I had seen this before in other hunts.) 
                Having more metas unlocking after the first, and taking the same set of feeders, would 
                encourage solvers to continue to look at the other puzzles and (if nothing else) 
                reward backsolving. This process of bouncing back and forth between the metas 
                and the feeders was something I found very interesting, and I was excited to write for it.
              </p>
              <p className="mb-4">
                The original outline was actually for three metas, each of which would attempt to occupy 
                a different vertex in the magic/logic/faith triangle. After that things quickly spiralled 
                out of control.
              </p>
              <p className="mb-4">
                During June I wrote the first four metas: Places, Letters, Words, and Cards, in that 
                order. Places was written first and inspired by the discovery of a novel set of 26 
                which fit well with the existing board game theme. This ended up locking in the set 
                of answers fairly closely, since I needed to clue the required properties. I also 
                knew I would want a pangram for later use, which forced my hand into using some odd answers.
              </p>
              <p className="mb-4">
                For example, here is the first set of answers I managed which contained a pangram:
              </p>
              <p className="mb-5 text-center">
                CIGARETTE<br/>
                DECREPIT<br/>
                FIBER<br/>
                IVORY<br/>
                JASMINE<br/>
                NEXUS<br/>
                OSTRACIZE<br/>
                POLAR<br/>
                SHAW THEATRE<br/>
                QUICKLY
              </p>
              <p className="mb-4">
                Five of the answers are already present in their final forms, and three more would only be slightly altered.
              </p>
              <p className="mb-4">
                Letters was then constructed by attempting to form a sensible meta answer using that 
                puzzle's mechanic; this involved several days of trying different word forms, messing 
                around with the letter patterns, until I got something I was happy with. At that point 
                I also realized that the mechanic would best be introduced or led up to, at which point 
                Words was written quite naturally. Between the constraints of both Places and Letters, 
                the answers were now completely constrained! There would be no changing any of them 
                for the rest of the writing process. (The only small change that was made was turning 
                DROPOFF into two words, to fit the Playing With Words mechanic.)
              </p>
              <p className="mb-4">
                Lastly, I wrote Cards. This was one of my oldest ideas, and I'd had the answer 
                for this meta bouncing around in my construction sheet for some time. It must be noted, though, that at 
                this point I was not even confident that I would manage to get the construction to work! I spent maybe a 
                day or two fiddling with different possible card arrangements, until one came together that was self-consistent.
              </p>
              <p className="mb-4">
                With this initial set of four metas completed, I then began to shop it around with some testsolvers 
                (discussed more in the Testsolving section). After fixing some issues, the metas were well received. 
                I felt confident enough to begin working on one or two feeder puzzles for the hunt.
              </p>
              <p className="text-center text-lg mb-4">
                <u>Initial Idea</u>
              </p>
              <p className="mb-4">
                While initially I considered writing all of the feeders on my own, it soon became abundantly clear 
                that I possessed neither the time nor the talent to do this. I therefore reached out to several 
                people whom I knew, and whose work I liked, to see if they would be interested in writing! Thankfully, 
                most of them said yes.
              </p>
              <p className="mb-4">
                Most of these people I had worked with before. However, it was my first time working with noneuclidean, 
                a puzzlewriter with whom I had moved in the same circles, but never collaborated. They ended up being 
                the star of the show! Five excellent feeder puzzles are theirs, and they co-wrote three of Penchant's 
                six metas, as well as some of the cut metas.
              </p>
              <p className="mb-4">
                I had a very particular idea in mind for the feeders in the hunt from the very beginning, and the required 
                constraints were mentioned when authors were invited. Notably, I wanted the puzzle mechanics to all be based 
                on “standard” puzzle types. This began as a self-imposition — I was challenging myself to write more 
                standard puzzles, compared to the off-the-wall fare I was accustomed to — but this ended up being a cool 
                stylistic constraint, and pushed all of the authors in interesting directions. It also let us announce all 
                of our mechanics ahead of time, which we did mostly for fun.
              </p>
              <p className="mb-4">
                Otherwise, I told the other authors to go nuts, and write the most elegant and interesting puzzles they could. 
                In particular they explicitly had no difficulty constraints; puzzles would be considered neither too easy nor 
                too hard, since I felt confident that (given the meta structure) every puzzle would get forward-solved by a 
                good proportion of teams. This did end up being the case! All the authors rose to the challenge, and I am 
                very impressed by the work that went into the hunt.
              </p>
              <p className="mb-4">
                For my part, I used my writing slots on puzzle ideas that had been cut from other hunts (usually for being 
                too difficult). Gas, Water, and Electricity began as a puzzle for MIT Mystery Heist (for the same answer 
                slot as <a href="https://mitmysteryheist.com/puzzles/expert/interview/"><u>Interview Questions</u></a>), and 
                Pen-and-Paper Logic Puzzles began as a minipuzzle in the Blues Clues round of Brown Puzzlehunt 2024.
              </p>
              <p className="mb-4">
                The mix of puzzle “types” felt very good. I was pleased to get two grid logic puzzles into the mix, as well 
                as one research-heavy puzzle. My only regret is that we didn't manage to get a good identify-sort-index-solve 
                into the hunt; Zach had pitched one to me, but he ended up constructing it for an internal Providence writing 
                jam instead.
              </p>
              <p className="mb-4">
                While everyone else was very good about finishing their puzzles on time, I unfortunately was not. Much of 
                Pen-and-Paper therefore came together at the very last minute, and without the rigorous fact-checking 
                we used for other puzzles, resulted in a truly embarrassing amount of errata for that puzzle. That one 
                was my fault! I apologize.
              </p>
              <p className="mb-4">
                (The solutions coming out late was also my fault. This wrap-up coming out late was also also my fault.)
              </p>
              <p className="text-center text-lg mb-4">
                <u>Final Metas</u>
              </p>
              <p className="mb-4">
                One of the things noneuclidean challenged me to do was write a fifth meta, or a metameta. My initial 
                attempts went nowhere. During early 2025 I had the idea for the current metameta, and mocked up an 
                early draft. This draft ended up being completely broken! non therefore helped me fix up the concept 
                into something actually solvable, wrote the fifth meta that the idea needed in order to function 
                (Playing With Markers), and rewrote Playing With Words to meet the new constraints that had been imposed.
              </p>
              <p className="mb-4">
                Very late in the process (only a day or two before the hunt), it was requested that we remove two puzzles 
                from the end of the hunt due to containing future information. Thankfully, their removal did not disrupt 
                the final metameta, and we were able to adjust the hunt in its absence without too much trouble. 
              </p>
            </TOCSection>
            <TOCSection tocTitle="Tech, Art, and Design" sectionId={3} isFirst>
              <h2 className="text-center text-2xl my-4">Tech, Art, and Design</h2>
              <div className="grid grid-cols-3 gap-4 mb-5">
                <img
                    className="rounded-md"
                    src="/wrapup/4.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="/wrapup/5.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="/wrapup/6.jpg"
                    alt=""
                  />
                </div>
              <p className="mb-5 max-w-2xl text-center mx-auto">
                <i>Be generous with your hint responses. Though you may spend 
                  sleepless nights concerned that the site will crash, in the 
                  end your increased Vercel tier and robust React framework will 
                  provide abundant stability.</i>
              </p>
              <p className="text-center text-lg mb-4">
                <u>Technical Details</u>
              </p>
              <p className="mb-4">
                The hunt uses the same tech stack as Brown Puzzlehunt 2025, <a href="https://github.com/brown-puzzle-hq"><u>bph-site</u></a>, 
                which I used with their permission. I was familiar with this stack, having used it 
                for two hunts before, and it had proven gracious under fire. bph-site uses React and 
                Typescript, with Tailwind for CSS, running serverlessly on Vercel. As with BPH, the 
                Postgres database is held in Neon — very shiny.
              </p>
              <p className="mb-4">
                I did not get emails to work with Resend, which is what we used for BPH, but admittedly 
                I did not try very hard.
              </p>
              <p className="mb-4">
                Some elements of bph-site that I knew would be useful going in were its defaults for 
                multiple team types, which I wanted for the multiple team sizes, and the node-based 
                adjacency unlock structure, which I needed to get the meta unlocks functioning sensibly. 
                I had a great time with this infrastructure, and it mostly worked out of the box!
              </p>
              <p className="mb-4">
                While I did the job of spinning up the tech stack myself, most of the subsequent tech work 
                was done by Olga, who also does art and tech for teammate's hunts!
              </p>
              <p className="mb-4">
                While I had helped with technical teams on other hunts, this was my first time taking 
                point on one. While I learned a great deal during the process, my overall takeaway was 
                that it was fairly doable! Between well-documented repositories like bph-site, and no-programming-required 
                platforms like <a href="https://www.puzzlehuntmy.us/"><u>myus</u></a>, 
                I really think that anyone is able to release puzzlehunts on the internet these days.
              </p>
              <p className="text-center text-lg mb-4">
                <u>Art and Visual Design</u>
              </p>
              <p className="mb-4">
                I came in with a fairly firm idea of the visual style and language I wanted. 
                My original style pitch to Olga was this:
              </p>
              <p className="mb-5 ml-10 mr-20">
                I am thinking minimal art assets, and anything that we do need, I'll do myself, probably in Inkscape. 
                (Along the lines of CRUMS?) The aesthetic is clean, clear, technical, minimalist, with maybe a 
                little bit of quirkiness. 
              </p>
              <p className="mb-4">
                Fitting with the Penchant logo, we went for round, smooth curves and circles, and a nice{" "}
                <a href="https://fonts.google.com/specimen/Radio+Canada?preview.text=This%20puzzlehunt%20was%20commissioned%20by%20Penchant%20in%202054,%20and%20written%20by%20some%20wonderful%20folks%20in%20the%20%2720s."><u>sans-serif font</u></a> to match. 
                We had complete freedom in selecting the color scheme, but I knew I wanted something 
                blue-ish. At Olga's suggestion, the main background color (#0072BB) is the color of Dark Blue 
                properties in Monopoly!
              </p>
              <p>
                Olga did end up making some art assets, such as this victory graphic (available to solvers after 
                completing Playing With Others):
              </p>
              <div className="p-5">
                <img
                    className="rounded-md"
                    src="/wrapup/victorygraphic.png"
                    alt=""
                  />
              </div>
              <p className="mb-4">
                As in all of the hunts Olga works on, there is a hidden cat on the website.
              </p>
              <p className="text-center text-lg mb-4">
                <u>Split Leaderboard</u>
              </p>
              <p className="mb-4">
                We elected to have a split leaderboard with multiple team sizes so people 
                could tackle the puzzles with as many or as few people as they preferred. 
                Some people already solo puzzlehunts; it felt appropriate to give them a 
                leaderboard!
              </p>
              <p className="mb-4">
                It was also a way to allow more teams to score highly on different leaderboards. 
                Smaller teams would not be disadvantaged compared to larger ones.
              </p>
              <p className="text-center text-lg mb-4">
                <u>Hints</u>
              </p>
              <p className="mb-4">
                We opted to have two hints released each day that the hunt ran. This was subject 
                to some debate: we knew that there were many early puzzles that would be difficult, 
                and it was possible that some teams might hit rapid difficulty walls. However, 
                the objection to early hints was that it might spoil early competition: we'd seen 
                previous hunts that required hints from top teams to finish, and we wanted to force 
                the leaderboard to settle before any hints dropped. We also considered having hints 
                drop only 6 hours after hunt began, but this would have placed the first hint wave 
                after midnight ET, which wouldn't have been tenable.
              </p>
              <p className="mb-4">
                (The 🫧 badge, for completing the hunt while submitting zero hints, was borne out of this discussion.)
              </p>
              <p className="mb-4">
                Over the course of the hunt, we received 481 hints! Due to our small 
                hint crew size of five, there were periods (usually between 2AM and 10AM ET) when no hints 
                were answered because none of these five people were available. We did our best to prevent 
                the queue from getting too unwieldy, but if you were one of the small fraction of people 
                who had a long response time in this period, we apologize!
              </p>
              <p className="mb-4">
                Congratulations to our top hint answerers:
              </p>
              <ol className="mb-5 ml-10">
                <li>🥇 noneuclidean - 164</li>
                <li>🥈 metaterminal - 134</li>
                <li>🥉 lvl1psy - 86</li>
                <li>Rainy - 47</li>
                <li>moonrise - 35</li>
              </ol>
            </TOCSection>
            <TOCSection tocTitle="Testsolving" sectionId={4} isFirst>
              <h2 className="text-center text-2xl my-4">Testsolving</h2>
              <div className="grid grid-cols-3 gap-4 mb-5">
                <img
                    className="rounded-md"
                    src="/wrapup/7.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="/wrapup/8.jpg"
                    alt=""
                  />
                  <img
                    className="rounded-md"
                    src="/wrapup/9.jpg"
                    alt=""
                  />
                </div>
              <p className="mb-5 max-w-2xl text-center mx-auto">
                <i>When rewriting your puzzles, learn to leave behind what no longer 
                  serves. This is an opportunity for reflection, evaluation, and 
                  improvement. In this way writer and the testsolver 
                  can form a harmonious union.</i>
              </p>
              <p className="mb-4">
                For initial testsolving I approached people I knew from the community. This mostly entailed 
                reaching out to free agents whom I knew (and didn't mind spoiling), but later I mostly 
                reached out to people associated with The Mathemagicians, a hunt team I'd had experiences with 
                before. In this way we formed a pool of people who could volunteer to test puzzles as they 
                became ready. Other authors also approached testers that they'd worked with before.
              </p>
              <p className="mb-4">
                Each and every one of the testsolvers was exceptionally giving and helpful with their time. 
                Their suggestions and comments got the hunt to a place where we wanted. We cannot thank them enough.
              </p>
            </TOCSection>
            <TOCSection tocTitle="Will there be another Penchant Puzzlehunt?" sectionId={5} isFirst>
              <h2 className="text-center text-2xl my-4">Will there be another Penchant Puzzlehunt?</h2>
              <p className="mb-4">
                <a href="https://www.puzzlehunt.net/checker#1#nGD27c31AeCbhtiw#q6LACs6IcyLzLXVSkh7Rhe/kIGnzOcqW#UGxheWluZyBXaXRoIFRoZSBGdXR1cmU="><u>Who can say?</u></a>
              </p>
              <p className="mb-4">
                A day or two after the hunt concluded, we lost contact with <a href="https://bsky.app/profile/tazarian.bsky.social"><u>tazarian</u></a>. If you hear from him, let us know.
              </p>
              <p className="mb-4">
                However, individual members of the writing team will continue to work on different future projects. 
                Keep an eye out for those!
              </p>
              <p className="mb-4">
                (Though not a hunt, if you like podcasts, two of the writers for this hunt host{" "}
                <a href="https://arguingaboutpuzzles.substack.com/"><u>Arguing About Puzzles</u></a>, 
                the second season of which is currently releasing.)
              </p>
              <p className="mb-4">
                Thank you for solving Penchant Puzzlehunt. We hoped you enjoyed your time!
              </p>
              <p className="mb-4 text-center">
                <i>Words by metaterminal. Suggestions by Olga Vinogradova. Puzzle by noneuclidean.</i>
              </p>
            </TOCSection>
            <TOCSection tocTitle="Statistics" sectionId={6} isFirst>
              <h2 className="text-center text-2xl my-4">Statistics</h2>
              <p className="text-center text-lg my-4">
                <u>Overview</u>
              </p>
              <Table className="my-0 w-fit mx-auto">
              <TableHeader>
                <TableRow className="hover:bg-inherit">
                  <TableHead className="text-main-header"></TableHead>
                  <TableHead className="text-main-header">Full Squad</TableHead>
                  <TableHead className="text-main-header">Half Squad</TableHead>
                  <TableHead className="text-main-header">Solo Solver</TableHead>
                  <TableHead className="text-main-header">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="pointer-events-none">
                <TableRow>
                  <TableHead className="text-main-header">Teams</TableHead>
                  <TableCell className="text-center">83</TableCell>
                  <TableCell className="text-center">89</TableCell>
                  <TableCell className="text-center">270</TableCell>
                  <TableCell className="text-center">442</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead className="text-main-header">Finishers</TableHead>
                  <TableCell className="text-center">53</TableCell>
                  <TableCell className="text-center">15</TableCell>
                  <TableCell className="text-center">30</TableCell>
                  <TableCell className="text-center">98</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead className="text-main-header">
                    Playing With Places Solves
                  </TableHead>
                  <TableCell className="text-center">29</TableCell>
                  <TableCell className="text-center">38</TableCell>
                  <TableCell className="text-center">139</TableCell>
                  <TableCell className="text-center">206</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead className="text-main-header">Hints</TableHead>
                  <TableCell className="text-center">136</TableCell>
                  <TableCell className="text-center">112</TableCell>
                  <TableCell className="text-center">233</TableCell>
                  <TableCell className="text-center">481</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead className="text-main-header">Guesses</TableHead>
                  <TableCell className="text-center">2352</TableCell>
                  <TableCell className="text-center">1272</TableCell>
                  <TableCell className="text-center">2262</TableCell>
                  <TableCell className="text-center">5886</TableCell>
                </TableRow>
                <TableRow>
                  <TableHead className="text-main-header">Solves</TableHead>
                  <TableCell className="text-center">969</TableCell>
                  <TableCell className="text-center">512</TableCell>
                  <TableCell className="text-center">1013</TableCell>
                  <TableCell className="text-center">2494</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-center text-lg my-4">
                <u>Fewest Guesses</u>
            </p>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-inherit">
                  <TableHead className="text-main-header">Team</TableHead>
                  <TableHead className="text-main-header">Size</TableHead>
                  <TableHead className="text-main-header">Guesses</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="pointer-events-none">
                <TableRow>
                  <TableCell>Back to the Llama</TableCell>
                  <TableCell>full</TableCell>
                  <TableCell>16</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>​​​​c​​​​h​​​​o​​​​c​​​​🔟​​​​M​​​​i​​​​n​​​​t​​​​</TableCell>
                  <TableCell>solo</TableCell>
                  <TableCell>16</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>ඐ SINHALA HILARIOUS MEME FROM 2054</TableCell>
                  <TableCell>half</TableCell>
                  <TableCell>17</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>The Wob Blizzards</TableCell>
                  <TableCell>full</TableCell>
                  <TableCell>17</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Projectyl is Sure May 6, 2041 Will Be a Normal Day</TableCell>
                  <TableCell>solo</TableCell>
                  <TableCell>17</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Callie's Enterprise</TableCell>
                  <TableCell>solo</TableCell>
                  <TableCell>17</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Inclination, Overly Habitual</TableCell>
                  <TableCell>solo</TableCell>
                  <TableCell>18</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cen's Endeavor</TableCell>
                  <TableCell>solo</TableCell>
                  <TableCell>18</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Duck Gizzards</TableCell>
                  <TableCell>full</TableCell>
                  <TableCell>19</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>[title of team]</TableCell>
                  <TableCell>full</TableCell>
                  <TableCell>19</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>lumia</TableCell>
                  <TableCell>solo</TableCell>
                  <TableCell>19</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-center text-lg my-4">
                <u>Most Guesses</u>
            </p>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-inherit">
                  <TableHead className="text-main-header">Team</TableHead>
                  <TableHead className="text-main-header">Size</TableHead>
                  <TableHead className="text-main-header">Guesses</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="pointer-events-none">
                <TableRow>
                  <TableCell>凑不出-Centennial Board Circumnavigators</TableCell>
                  <TableCell>full</TableCell>
                  <TableCell>83</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Puzzle Rojak</TableCell>
                  <TableCell>solo</TableCell>
                  <TableCell>77</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Pixideria Mixed Fishes</TableCell>
                  <TableCell>full</TableCell>
                  <TableCell>76</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>The C@r@line Syzygy</TableCell>
                  <TableCell>full</TableCell>
                  <TableCell>73</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>wagons (wolf + dragons)</TableCell>
                  <TableCell>half</TableCell>
                  <TableCell>73</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>SOY BOYS</TableCell>
                  <TableCell>half</TableCell>
                  <TableCell>72</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mr Ree Polka (tl)</TableCell>
                  <TableCell>full</TableCell>
                  <TableCell>67</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Madmahogany</TableCell>
                  <TableCell>solo</TableCell>
                  <TableCell>67</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Time Vultures</TableCell>
                  <TableCell>half</TableCell>
                  <TableCell>65</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Display name</TableCell>
                  <TableCell>full</TableCell>
                  <TableCell>65</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-center text-lg my-4">
                <u>Most Hints</u>
            </p>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-inherit">
                  <TableHead className="text-main-header">Team</TableHead>
                  <TableHead className="text-main-header">Size</TableHead>
                  <TableHead className="text-main-header">Hints</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="pointer-events-none">
                <TableRow>
                  <TableCell>Puzzle Rojak</TableCell>
                  <TableCell>solo</TableCell>
                  <TableCell>10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>I really love Nanahira. Like, a whole lot.</TableCell>
                  <TableCell>solo</TableCell>
                  <TableCell>10</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Display name</TableCell>
                  <TableCell>full</TableCell>
                  <TableCell>9</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>david's dracontomelons</TableCell>
                  <TableCell>full</TableCell>
                  <TableCell>9</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Hi, it's just me.</TableCell>
                  <TableCell>solo</TableCell>
                  <TableCell>9</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>The Puzzledome</TableCell>
                  <TableCell>full</TableCell>
                  <TableCell>8</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>凑不出-Centennial Board Circumnavigators</TableCell>
                  <TableCell>full</TableCell>
                  <TableCell>7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Mr Ree Polka (tl)</TableCell>
                  <TableCell>full</TableCell>
                  <TableCell>7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Madmahogany</TableCell>
                  <TableCell>solo</TableCell>
                  <TableCell>7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>umsyt</TableCell>
                  <TableCell>solo</TableCell>
                  <TableCell>7</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-center text-lg my-4">
                <u>Shortest Guesses</u>
            </p>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-inherit">
                  <TableHead className="text-main-header">Puzzle</TableHead>
                  <TableHead className="text-main-header">Guess</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="pointer-events-none">
                <TableRow>
                  <TableCell>Gas, Water, Electricity</TableCell>
                  <TableCell>7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Playing With Places</TableCell>
                  <TableCell>12</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Playing With Places</TableCell>
                  <TableCell>26</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Pen-and-Paper Logic Puzzles: An Introduction</TableCell>
                  <TableCell>AN</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Rereading</TableCell>
                  <TableCell>BE</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Playing With Others</TableCell>
                  <TableCell>GO</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Playing With Places</TableCell>
                  <TableCell>OH</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Plainly Indicated</TableCell>
                  <TableCell>PI</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Penchant Word Search</TableCell>
                  <TableCell>SG</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-center text-lg my-4">
                <u>Longest Guesses</u>
            </p>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-inherit">
                  <TableHead className="text-main-header">Puzzle</TableHead>
                  <TableHead className="text-main-header">Guess</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="pointer-events-none">
                <TableRow>
                  <TableCell>Penchant Word Search</TableCell>
                  <TableCell>WHYTAKEAGUESSAWAYFORENTERINGCONSIDERVARIANCESEEMSUNNECESSARY</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Playing With Places</TableCell>
                  <TableCell>EIGHTCOLORSFOURSTATIONSTWELFTHSPOTMINUSUTILITY</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Penchant Word Search</TableCell>
                  <TableCell>SPEARSSPIKEETATTATERROTIISAACCTORRERUNNAVELS</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Rereading</TableCell>
                  <TableCell>HTTPSPMCNCBINLMNIHGOVARTICLESPMC6918220</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Playing With Others</TableCell>
                  <TableCell>FORMTHEWESTERNTRIPLEANDNOTBEGERMANY</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Playing With Places</TableCell>
                  <TableCell>LITERALLYANYTHINGOTHERTHANMONOPOLY</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Playing With Others</TableCell>
                  <TableCell>34METHYLENEDIOXYMETHAMPHETAMINE</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Gas, Water, and Electricity</TableCell>
                  <TableCell>THISISTOPOLOGICALLYIMPOSSIBLE</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Penchant Word Search</TableCell>
                  <TableCell>OPENTHEMAPKEYTREASURELOOTFIND</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="text-center text-lg my-4">
                <u>First Solves</u>
            </p>
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-inherit">
                  <TableHead className="text-main-header">Size</TableHead>
                  <TableHead className="text-main-header">Team</TableHead>
                  <TableHead className="text-main-header">Time</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="pointer-events-none">
                <TableRow>
                  <TableCell>Full Squad</TableCell>
                  <TableCell>ண MALAYALAM PENCHANTLOGOTRANSPARENT.SVG</TableCell>
                  <TableCell>12m 24.471s</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Half Squad</TableCell>
                  <TableCell>Society of Literary Spirits</TableCell>
                  <TableCell>25m 09.256s</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Solo Solver</TableCell>
                  <TableCell>Cameron :{")"}</TableCell>
                  <TableCell>12m 8.338s</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <p className="mt-4">
                (All these solves were for Ladders.)
            </p>
            </TOCSection>
          </article>
        </div>
      </div>
    </TOCContext.Provider>
  );
}
