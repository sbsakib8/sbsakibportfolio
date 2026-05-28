"use client";

import { useState, useEffect } from 'react';
import { Save, Loader2, User } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ProfilePage() {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    bio: '',
    email: '',
    phone: '',
    location: '',
    dob: '',
    avatarUrl: '',
    resumeUrl: '',
    socialLinks: {
      github: '',
      linkedin: '',
      twitter: ''
    }
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch('/api/data/profile');
        const json = await res.json();
        if (json.success && json.data) {
          // Merge to ensure socialLinks exists
          setFormData({
            ...json.data,
            socialLinks: json.data.socialLinks || { github: '', linkedin: '', twitter: '' }
          });
        }
      } catch (error) {
        toast.error('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('social_')) {
      const socialKey = name.split('_')[1];
      setFormData({
        ...formData,
        socialLinks: { ...formData.socialLinks, [socialKey]: value }
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch('/api/data/profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        toast.success('Profile updated successfully');
      } else {
        toast.error('Failed to update profile');
      }
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="w-8 h-8 text-cyan-400 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex items-center space-x-3 mb-6">
        <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Profile & Hero Details</h2>
          <p className="text-gray-400 text-sm">Manage your personal information and social links</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Info */}
          <div className="space-y-4 md:col-span-2">
            <h3 className="text-lg font-semibold text-white border-b border-slate-700 pb-2">Basic Info</h3>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Full Name</label>
            <input type="text" name="name" required value={formData.name || ''} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Role / Title</label>
            <input type="text" name="role" required value={formData.role || ''} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-300 mb-1">Bio / About Me</label>
            <textarea name="bio" rows="4" value={formData.bio || ''} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none resize-y"></textarea>
          </div>

          {/* Contact & Media */}
          <div className="space-y-4 md:col-span-2 mt-4">
            <h3 className="text-lg font-semibold text-white border-b border-slate-700 pb-2">Contact & Media</h3>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Email</label>
            <input type="email" name="email" value={formData.email || ''} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Phone / WhatsApp</label>
            <input type="text" name="phone" value={formData.phone || ''} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Location</label>
            <input type="text" name="location" value={formData.location || ''} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Date of Birth</label>
            <input type="text" name="dob" value={formData.dob || ''} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Avatar URL</label>
            <input type="text" name="avatarUrl" value={formData.avatarUrl || ''} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Resume / CV URL</label>
            <input type="text" name="resumeUrl" value={formData.resumeUrl || ''} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
          </div>

          {/* Social Links */}
          <div className="space-y-4 md:col-span-2 mt-4">
            <h3 className="text-lg font-semibold text-white border-b border-slate-700 pb-2">Social Links</h3>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">GitHub URL</label>
            <input type="text" name="social_github" value={formData.socialLinks.github || ''} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">LinkedIn URL</label>
            <input type="text" name="social_linkedin" value={formData.socialLinks.linkedin || ''} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">Twitter URL</label>
            <input type="text" name="social_twitter" value={formData.socialLinks.twitter || ''} onChange={handleChange} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-cyan-500 outline-none" />
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <button 
            type="submit"
            disabled={saving}
            className="flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/25 disabled:opacity-50 text-lg font-medium"
          >
            {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
            <span>Save Profile</span>
          </button>
        </div>
      </form>
    </div>
  );
}
