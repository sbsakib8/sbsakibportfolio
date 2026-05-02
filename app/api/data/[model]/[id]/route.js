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
  profile: Profile,
};

export async function PUT(request, { params }) {
  try {
    await dbConnect();
    const { model, id } = await params;
    const Model = models[model];

    if (!Model) {
      return NextResponse.json({ success: false, error: 'Invalid model' }, { status: 400 });
    }

    const body = await request.json();
    const data = await Model.findByIdAndUpdate(id, body, { new: true, runValidators: true });

    if (!data) {
      return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(`Error in PUT /api/data/[model]/[id]:`, error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await dbConnect();
    const { model, id } = await params;
    const Model = models[model];

    if (!Model) {
      return NextResponse.json({ success: false, error: 'Invalid model' }, { status: 400 });
    }

    const data = await Model.findByIdAndDelete(id);

    if (!data) {
      return NextResponse.json({ success: false, error: 'Not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: {} });
  } catch (error) {
    console.error(`Error in DELETE /api/data/[model]/[id]:`, error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
