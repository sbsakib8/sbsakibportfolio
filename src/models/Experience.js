import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true },
  description: { type: String, required: true },
  achievements: { type: [String] },
  color: { type: String, default: 'from-blue-500 to-cyan-500' }
}, { timestamps: true });

export const Experience = mongoose.models.Experience || mongoose.model('Experience', experienceSchema);
