import { z } from "zod";
import { getDb } from "../../../db";
import { inquiries } from "../../../db/schema";

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(200),
  project: z.string().trim().min(2).max(160),
  message: z.string().trim().min(20).max(5000),
  website: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return Response.json({ error: "Expected a JSON request." }, { status: 415 });
    }

    const parsed = inquirySchema.safeParse(await request.json());
    if (!parsed.success) {
      return Response.json({ error: "Please check the form and try again." }, { status: 400 });
    }

    if (parsed.data.website) {
      return Response.json({ ok: true }, { status: 201 });
    }

    const db = getDb();
    await db.insert(inquiries).values({
      id: crypto.randomUUID(),
      name: parsed.data.name,
      email: parsed.data.email,
      project: parsed.data.project,
      message: parsed.data.message,
    });

    return Response.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Inquiry submission failed", error);
    return Response.json({ error: "The message service is temporarily unavailable." }, { status: 500 });
  }
}
