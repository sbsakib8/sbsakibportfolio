import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  bio: { type: String },
  email: { type: String },
  phone: { type: String },
  location: { type: String },
  dob: { type: String },
  avatarUrl: { type: String },
  resumeUrl: { type: String },
  socialLinks: {
    github: String,
    linkedin: String,
    twitter: String,
  }
}, { timestamps: true });

export const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema);
