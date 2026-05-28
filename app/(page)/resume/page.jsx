import MyResume from './../../../src/page/myresume/myResume';
import dbConnect from "@/src/lib/db";
import { Experience } from "@/src/models/Experience";
import { Education } from "@/src/models/Education";

export const revalidate = 0;

const Resume = async () => {
  await dbConnect();
  
  const experiences = await Experience.find({}).sort({ createdAt: -1 }).lean();
  const education = await Education.find({}).sort({ createdAt: -1 }).lean();
  
  const serialize = (doc) => ({
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt?.toISOString(),
    updatedAt: doc.updatedAt?.toISOString()
  });

  return (
    <div>
      <MyResume 
        dbExperiences={experiences.map(serialize)}
        dbEducation={education.map(serialize)}
      />
    </div>
  )
}

export default Resume