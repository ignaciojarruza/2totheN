import mongoose from "mongoose";
import Log from "../models/Log";

/**
 * @file A log schema for log model.
 */
const LogSchema = new mongoose.Schema<Log>({
  _id: { type: String, required: true },
  start_time: { type: Date, required: false },
  end_time: { type: Date, required: false },
  tag: { type: String, required: true },
});

export default LogSchema;
