import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, //limpia el string de espacios
      maxlength: 100,
    },
    apellidos: {
      type: String,
      required: true,
      trim: true, //limpia el string de espacios
      maxlength: 100,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    picturePath: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false, // para que no aparezca el __V
  }
);

export default model("User", userSchema);
