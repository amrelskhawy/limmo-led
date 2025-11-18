import { type VercelRequest, type VercelResponse } from "@vercel/node";
import { storage } from "../server/storage";
import { insertContactSubmissionSchema } from "../shared/schema";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method === "POST") {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);

      console.log("New contact submission received:", {
        id: submission.id,
        name: submission.name,
        email: submission.email,
        company: submission.company,
        productName: submission.productName || "General inquiry",
      });

      return res.json({ success: true, id: submission.id });
    } catch (error) {
      console.error("Error creating contact submission:", error);
      return res.status(400).json({ message: "Invalid submission data" });
    }
  }

  res.status(405).json({ message: "Method not allowed" });
}
