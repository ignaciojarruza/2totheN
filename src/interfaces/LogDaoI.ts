import Log from "../models/Log";

/**
 * An interface that provides common operations that
 * can be done on the logs collection.
 */
export default interface LogDaoI {
  findAllLogs(): Promise<Log[]>;
  addEntry(log: Log): Promise<Log>;
  giveStats(uid: string): Promise<any>;
}
