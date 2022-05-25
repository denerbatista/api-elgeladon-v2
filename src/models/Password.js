import mongoose from "mongoose"
const { Schema, model } = mongoose;

const PasswordSchema = new Schema({
  token: { type: String, required: true },
});

export const Password = model("passwords", PasswordSchema);
