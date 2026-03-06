import { type Request, type Response } from "express";
import { promises as fs } from "fs";
import log from "./log.ts";

export default async (req: Request, res: Response) => {
  try {
    const origin = `${req.protocol}://${req.get("host")}`;

    const skillContent = await fs.readFile(
      ".agents/skills/avm/SKILL.md",
      "utf-8",
    );

    log("INFO", "Serving skill file", { origin });

    const response = skillContent.replaceAll("http://localhost:3000", origin);

    res.set("Content-Type", "text/markdown");

    res.send(response);
  } catch (error) {
    const errorMessage = "Error reading skill file";

    log("ERROR", errorMessage, error);

    res.status(500).send(errorMessage);
  }
};
