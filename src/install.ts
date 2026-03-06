import { type Request, type Response } from "express";
import { promises as fs } from "fs";
import log from "./log.ts";

export default async (req: Request, res: Response) => {
  try {
    const origin = `${req.protocol}://${req.get("host")}`;

    const response = `curl -o .claude/skills/agent-vending-machine/SKILL.md --create-dirs ${origin}/SKILL.md`;

    log("INFO", "Serving install script", { origin });

    res.send(response);
  } catch (error) {
    const errorMessage = "Error serving install script";

    log("ERROR", errorMessage, error);

    res.status(500).send(errorMessage);
  }
};
