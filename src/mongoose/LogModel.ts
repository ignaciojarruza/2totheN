/**
 * @file Implements mongoose model to CRUD documents
 * in the logs collection.
 */
import mongoose from "mongoose";
import LogSchema from "./LogSchema";
const LogModel = mongoose.model("LogModel", LogSchema);
export default LogModel;
