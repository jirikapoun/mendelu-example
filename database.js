import { Schema, model, connect, disconnect } from "mongoose";

const host = process.env.MONGO_HOST || "localhost";

const AccessLogSchema = new Schema({
  time: Date,
  ip: String,
});

export const AccessLog = model("AccessLog", AccessLogSchema);

export async function openDatabase() {
  await connect(`mongodb://root:example@${host}:27017`, {
    serverSelectionTimeoutMS: 1000,
  });
}

export async function closeDatabase() {
  await disconnect();
}
