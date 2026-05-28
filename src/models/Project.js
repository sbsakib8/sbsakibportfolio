import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: { type: [String], required: true },
  imageUrl: { type: String },
  liveUrl: { type: String },
  githubUrl: { type: String },
}, { timestamps: true });

export const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
