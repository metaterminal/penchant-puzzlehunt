"use server";
import { auth } from "@/auth";
import { feedback } from "@/db/schema";
import { db } from "@/db/index";
import { sendBotMessage } from "~/lib/comms";
import { ensureError } from "~/lib/utils";

export async function insertFeedback(description: string, timestamp: Date) {
  const session = await auth();
  if (!session?.user?.id)
    return { error: "Not authenticated, please ensure you're logged in." };
  const teamId = session.user.id;

  try {
    // Insert feedback into the database
    await db.insert(feedback).values({
      teamId,
      description,
      timestamp,
    });
  } catch (e) {
    // Message the dev channel
    const error = ensureError(e);
    await sendBotMessage(
      `🐛 Feedback insert failed: ${error.message} <@&1385392344676827215>`,
      "dev",
    );
    return { error: "Failed to submit feedback." };
  }

  // Message the feedback channel and ping HQ
  const feedbackMessage = `📝 **Feedback** by [${teamId}](https://penchantpuzzlehunt.com/teams/${teamId} ): ${description} <@&1396541451948658698>`;
  await sendBotMessage(feedbackMessage, "feedback");
  return { error: null };
}
