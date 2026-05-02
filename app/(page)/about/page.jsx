import MyAbout from "../../../src/page/myabout/myAbout";
import dbConnect from "@/src/lib/db";
import { Profile } from "@/src/models/Profile";
import { Experience } from "@/src/models/Experience";
import { Education } from "@/src/models/Education";
import { Skill } from "@/src/models/Skill";

export const revalidate = 0; // Disable cache so changes show up immediately

export default async function About() {
  await dbConnect();
  
  // Fetch all necessary data for the About page
  const profile = await Profile.findOne({}).lean();
  const experiences = await Experience.find({}).sort({ createdAt: -1 }).lean();
  const education = await Education.find({}).sort({ createdAt: -1 }).lean();
  const skills = await Skill.find({}).sort({ level: -1 }).lean();
  
  // Clean up MongoDB _id to string for serialization to Client Components
  const serialize = (doc) => ({
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt?.toISOString(),
    updatedAt: doc.updatedAt?.toISOString()
  });

  const serializedProfile = profile ? serialize(profile) : null;
  const serializedExperiences = experiences.map(serialize);
  const serializedEducation = education.map(serialize);
  const serializedSkills = skills.map(serialize);

  return (
    <div>
      <MyAbout 
        dbProfile={serializedProfile} 
        dbExperiences={serializedExperiences} 
        dbEducation={serializedEducation} 
        dbSkills={serializedSkills} 
      />
    </div>
  )
}