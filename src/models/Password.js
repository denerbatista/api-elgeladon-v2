import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PasswordSchema = new Schema(
  {
    token: { type: String, required: true },
  },
  { versionKey: false }
);

export const Password = model("passwords", PasswordSchema);
