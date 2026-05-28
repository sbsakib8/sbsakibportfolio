import mongoose from 'mongoose';

const educationSchema = new mongoose.Schema({
  degree: { type: String, required: true },
  institution: { type: String, required: true },
  period: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, default: 'from-indigo-500 to-purple-500' }
}, { timestamps: true });

export const Education = mongoose.models.Education || mongoose.model('Education', educationSchema);
