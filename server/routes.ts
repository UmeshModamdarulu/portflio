import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with /api prefix
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const contactMessage = await storage.createContactMessage(validatedData);
      
      res.status(201).json({
        success: true,
        message: "Contact message sent successfully",
        data: contactMessage
      });
    } catch (error) {
      if (error instanceof Error) {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: validationError.message
        });
      } else {
        res.status(500).json({
          success: false,
          message: "An unexpected error occurred"
        });
      }
    }
  });

  // Resume download route
  app.get("/api/resume", (_req: Request, res: Response) => {
    const resumePath = "./attached_assets/UmeshmResume.pdf";
    res.download(resumePath, "ModamdaruluUmesh_Resume.pdf", (err) => {
      if (err) {
        res.status(500).json({
          success: false,
          message: "Failed to download resume"
        });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
