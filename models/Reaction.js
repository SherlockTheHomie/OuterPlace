const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    body: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);


module.exports = reactionSchema;
