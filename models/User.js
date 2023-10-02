const { mongoose, Schema } = require("../db");

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    address: {
      type: String,
      required: false,
      index: true,
      unique: false,
    },
    phone: {
      type: String,
      required: false,
      index: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },

    orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
