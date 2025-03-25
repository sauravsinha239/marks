// models/Mark.js
import mongoose from 'mongoose';

const markSchema = new mongoose.Schema({
  questionNo: { type: Number, required: true },
  mark: { type: Number, required: true, min: 0, max: 10 }
});

const Mark = mongoose.model('Mark', markSchema);
export default Mark;