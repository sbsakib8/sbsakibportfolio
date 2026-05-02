import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: Number, required: true, min: 0, max: 100 },
  icon: { type: String, default: 'Code' },
  color: { type: String, default: 'from-cyan-400 to-blue-500' }
}, { timestamps: true });

export const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema);
