import { Schema, model, models, Document } from "mongoose";

// 1. Create an interface representing a document in MongoDB. Documents means it takes some more properties
export interface ITag extends Document {
  description: string;
  name: string;
  questions: Schema.Types.ObjectId[];
  createdOn: Date;
  followers: Schema.Types.ObjectId[];
}

const TagSchema = new Schema({
  description: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: "Questions" }],
  createdOn: { type: Date, default: Date.now },
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

const Tag = models.Tag || model("Tag", TagSchema);

export default Tag;
