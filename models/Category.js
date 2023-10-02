const { mongoose, Schema } = require("../db");

const categorySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    games: [{ type: Schema.Types.ObjectId, ref: "Game" }],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

categorySchema.virtual("gamesList", {
  ref: "Game",
  localField: "_id",
  foreignField: "categories",
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;

