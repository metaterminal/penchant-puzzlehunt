import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "~/server/db";
import { count, max, sql } from "drizzle-orm";
import { and, asc, desc, eq, lt } from "drizzle-orm/expressions";
import { teams, solves } from "~/server/db/schema";
import { REMOTE } from "~/hunt.config";
import { FormattedTime } from "~/lib/time";
import { Lock } from "lucide-react";

export const revalidate = 300;

type LeaderboardItem = {
  id: string;
  displayName: string;
  finishTime: Date | null;
  solves: number;
  lastSolveTime: Date | null;
};

function Leaderboard({ data }: { data: LeaderboardItem[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-inherit">
          <TableHead className="min-w-11 text-center text-main-header">
            #
          </TableHead>
          <TableHead className="w-full text-main-header">Team Name</TableHead>
          <TableHead className="min-w-fit text-center text-main-header">
            Solved
          </TableHead>
          <TableHead className="hidden min-w-40 text-center text-main-header sm:table-cell">
            Finish Time
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow key={`${row.id}`} className="hover:bg-inherit">
            <TableCell className="text-center">{index + 1}</TableCell>
            <TableCell className="w-[20em] break-all">
              {row.displayName}
            </TableCell>
            <TableCell
              className={
                row.finishTime
                  ? "text-center text-yellow-100 sm:text-main-text"
                  : "text-center"
              }
            >
              {row.solves ?? 0}
            </TableCell>
            <TableCell className="hidden text-center sm:block">
              <FormattedTime time={row.finishTime} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default async function Home() {
  const fullTeams: LeaderboardItem[] = await db
    .select({
      id: teams.id,
      displayName: teams.displayName,
      // Exclude finish time if it is after hunt end
      finishTime: sql<Date | null>`
      CASE 
        WHEN ${teams.finishTime} > ${REMOTE.END_TIME} THEN NULL
        ELSE ${teams.finishTime}
      END`.as("finish_time"),
      solves: count(solves).as("solves"),
      lastSolveTime: max(solves.solveTime).as("last_solve_time"),
    })
    .from(teams)
    // Filter out admin teams and teams who registered after the hunt end
    .where(
      and(
        eq(teams.interactionMode, "full"),
        eq(teams.role, "user"),
        lt(teams.createTime, REMOTE.END_TIME),
      ),
    )
    // Get solves that were submitted before the hunt end
    // This is used for `solves` and `lastSolveTime`
    .leftJoin(
      solves,
      and(eq(solves.teamId, teams.id), lt(solves.solveTime, REMOTE.END_TIME)),
    )
    .groupBy(teams.id, teams.displayName, teams.finishTime, teams.createTime)
    .orderBy(
      asc(sql`finish_time`),
      desc(sql`solves`),
      asc(sql`last_solve_time`),
    );

    const halfTeams: LeaderboardItem[] = await db
    .select({
      id: teams.id,
      displayName: teams.displayName,
      // Exclude finish time if it is after hunt end
      finishTime: sql<Date | null>`
      CASE 
        WHEN ${teams.finishTime} > ${REMOTE.END_TIME} THEN NULL
        ELSE ${teams.finishTime}
      END`.as("finish_time"),
      solves: count(solves).as("solves"),
      lastSolveTime: max(solves.solveTime).as("last_solve_time"),
    })
    .from(teams)
    // Filter out admin teams and teams who registered after the hunt end
    .where(
      and(
        eq(teams.interactionMode, "half"),
        eq(teams.role, "user"),
        lt(teams.createTime, REMOTE.END_TIME),
      ),
    )
    // Get solves that were submitted before the hunt end
    // This is used for `solves` and `lastSolveTime`
    .leftJoin(
      solves,
      and(eq(solves.teamId, teams.id), lt(solves.solveTime, REMOTE.END_TIME)),
    )
    .groupBy(teams.id, teams.displayName, teams.finishTime, teams.createTime)
    .orderBy(
      asc(sql`finish_time`),
      desc(sql`solves`),
      asc(sql`last_solve_time`),
    );

    const soloTeams: LeaderboardItem[] = await db
    .select({
      id: teams.id,
      displayName: teams.displayName,
      // Exclude finish time if it is after hunt end
      finishTime: sql<Date | null>`
      CASE 
        WHEN ${teams.finishTime} > ${REMOTE.END_TIME} THEN NULL
        ELSE ${teams.finishTime}
      END`.as("finish_time"),
      solves: count(solves).as("solves"),
      lastSolveTime: max(solves.solveTime).as("last_solve_time"),
    })
    .from(teams)
    // Filter out admin teams and teams who registered after the hunt end
    .where(
      and(
        eq(teams.interactionMode, "solo"),
        eq(teams.role, "user"),
        lt(teams.createTime, REMOTE.END_TIME),
      ),
    )
    // Get solves that were submitted before the hunt end
    // This is used for `solves` and `lastSolveTime`
    .leftJoin(
      solves,
      and(eq(solves.teamId, teams.id), lt(solves.solveTime, REMOTE.END_TIME)),
    )
    .groupBy(teams.id, teams.displayName, teams.finishTime, teams.createTime)
    .orderBy(
      asc(sql`finish_time`),
      desc(sql`solves`),
      asc(sql`last_solve_time`),
    );

  const now = new Date();

  return (
    <div className="mx-auto mb-12 max-w-2xl px-4 pt-6">
      <h1 className="mb-2 text-center">Leaderboard</h1>
      <Tabs defaultValue="full" className="w-full">
        <TabsList className="grid w-full grid-cols-2 space-x-1 bg-footer-bg text-main-text">
          <TabsTrigger
            className="data-[state=active]:bg-[#5e437e] data-[state=active]:text-main-text"
            value="full"
          >
            Full Squads
            {now > REMOTE.END_TIME && (
              <Lock className="h-[13px] stroke-[3.5]" />
            )}
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#5e437e] data-[state=active]:text-main-text"
            value="half"
          >
            Half Squads
            {now > REMOTE.END_TIME && (
              <Lock className="h-[13px] stroke-[3.5]" />
            )}
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:bg-[#5e437e] data-[state=active]:text-main-text"
            value="solo"
          >
            Solo Solvers
            {now > REMOTE.END_TIME && (
              <Lock className="h-[13px] stroke-[3.5]" />
            )}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="full">
          <div className="w-full">
            <Leaderboard data={fullTeams} />
          </div>
        </TabsContent>
        <TabsContent value="half">
          <div className="w-full">
            <Leaderboard data={halfTeams} />
          </div>
        </TabsContent>
        <TabsContent value="solo">
          <div className="w-full">
            <Leaderboard data={soloTeams} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
