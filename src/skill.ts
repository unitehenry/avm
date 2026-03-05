import { type Request, type Response } from "express";
import { promises as fs } from "fs";

export default async (req: Request, res: Response) => {
  try {
    const skillContent = await fs.readFile(
      ".agents/skills/avm/SKILL.md",
      "utf-8",
    );

    res.set("Content-Type", "text/markdown");

    res.send(skillContent);
  } catch (error) {
    res.status(500).send("Error reading skill file");
  }
};
