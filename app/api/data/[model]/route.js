import { NextResponse } from 'next/server';
import dbConnect from '@/src/lib/db';
import { Project } from '@/src/models/Project';
import { Experience } from '@/src/models/Experience';
import { Education } from '@/src/models/Education';
import { Skill } from '@/src/models/Skill';
import { Service } from '@/src/models/Service';
import { Profile } from '@/src/models/Profile';

const models = {
  projects: Project,
  experiences: Experience,
  education: Education,
  skills: Skill,
  services: Service,
  profile: Profile
};

export async function GET(request, { params }) {
  try {
    await dbConnect();
    const { model } = await params;
    const Model = models[model];

    if (!Model) {
      return NextResponse.json({ success: false, error: 'Invalid model' }, { status: 400 });
    }

    // Profile is usually a singleton
    if (model === 'profile') {
      let data = await Model.findOne({});
      if (!data) {
        // Create an empty profile if none exists
        data = await Model.create({ name: 'Your Name', role: 'Your Role' });
      }
      return NextResponse.json({ success: true, data });
    }

    const data = await Model.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(`Error in GET /api/data/[model]:`, error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function POST(request, { params }) {
  try {
    // Note: Add auth check here if needed, but middleware will protect the dashboard.
    // However, API routes are public by default unless protected by middleware.
    // Assuming middleware covers `/api/data/*` as well.
    await dbConnect();
    const { model } = await params;
    const Model = models[model];

    if (!Model) {
      return NextResponse.json({ success: false, error: 'Invalid model' }, { status: 400 });
    }

    const body = await request.json();

    if (model === 'profile') {
      // Update the singleton profile
      const existing = await Model.findOne({});
      let data;
      if (existing) {
        data = await Model.findByIdAndUpdate(existing._id, body, { new: true });
      } else {
        data = await Model.create(body);
      }
      return NextResponse.json({ success: true, data });
    }

    const data = await Model.create(body);
    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error) {
    console.error(`Error in POST /api/data/[model]:`, error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
