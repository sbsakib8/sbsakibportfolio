import MyPortfolio from './../../../src/page/myPortfolio/myPortfolio';
import dbConnect from "@/src/lib/db";
import { Project } from "@/src/models/Project";

export const revalidate = 0;

const Portfolio = async () => {
  await dbConnect();
  
  const projects = await Project.find({}).sort({ createdAt: -1 }).lean();
  
  const serializedProjects = projects.map(doc => ({
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt?.toISOString(),
    updatedAt: doc.updatedAt?.toISOString()
  }));

  return (
    <div>
      <MyPortfolio dbProjects={serializedProjects} />
    </div>
  )
}

export default Portfolio