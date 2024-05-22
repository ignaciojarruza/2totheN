/**
 * A model representation of a single log entry.
 * @property {String} _id the id of the log entry
 * @property {String} start_time start time for session
 * @property {String} end_time end time for session
 * @property {String} tag tag for session
 */
export default interface Log {
  _id: string;
  start_time: Date;
  end_time: Date;
  tag: string;
}
