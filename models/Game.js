const { mongoose, Schema } = require("../db");
const dateFns = require("date-fns");

const gameSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      index: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      index: true,
      unique: true,
      maxLength: 2000,
    },
    price: {
      type: Number,
      required: false,
      index: true,
      unique: false,
    },

    offer: {
      type: Number,
      required: false,
      index: true,
      unique: true,
    },
    img: {
      type: String,
      required: false,
      index: false,
      unique: false,
    },
    stock: {
      type: Number,
      required: true,
      index: true,
      unique: true,
    },
    trending: {
      type: Boolean,
      required: false,
      index: true,
      unique: false,
    },
    category: { type: Schema.Types.ObjectId, ref: "Category" },

    img2: {
      type: String,
      required: false,
      index: false,
      unique: false,
    },

    video: {
      type: String,
      required: false,
      index: false,
      unique: false,
    },

    metacritic: {
      type: Number,
      required: false,
      index: true,
      unique: false,
    },

    age: {
      type: Number,
      required: false,
      index: true,
      unique: false,
    },

    slug: { type: String, required: false, index: true, unique: true },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

gameSchema.virtual("timeInterval").get(function () {
  const interval = dateFns.intervalToDuration({
    start: this.createdAt,
    end: new Date(),
  });
  if (interval.years) return interval.years + "Y";
  if (interval.months) return interval.months + "M";
  if (interval.days) return interval.days + "D";
  if (interval.hours) return interval.hours + "H";
  return interval.minutes + "M";
});
const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
