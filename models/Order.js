const { mongoose, Schema } = require("../db");

const orderSchema = new Schema(
  
      {
        user:{ type: Schema.Types.ObjectId, ref: "User" },

        games:[],
       
        status: {type: String} ,

        subtotal:{
          type: Number,
          require: true
        }
  },

{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } },
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;


