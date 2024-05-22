import { Request, Response } from "express";

export default interface LogController {
  findAllLogs(req: Request, res: Response): void;
  addEntry(req: Request, res: Response): void;
  giveStats(req: Request, res: Response): void;
}
