import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: String, default: 'Globe' },
  color: { type: String, default: 'from-blue-500 to-cyan-500' }
}, { timestamps: true });

export const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema);
