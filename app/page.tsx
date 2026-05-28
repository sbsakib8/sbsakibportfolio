import MyHome from './../src/page/home/home';
import dbConnect from "@/src/lib/db";
import { Profile } from "@/src/models/Profile";

export const revalidate = 0; // Disable cache so changes show up immediately

export default async function Home() {
  await dbConnect();

  const profile = await Profile.findOne({}).lean();
  const serializedProfile = profile ? {
    ...profile,
    _id: profile._id.toString(),
    createdAt: profile.createdAt?.toISOString(),
    updatedAt: profile.updatedAt?.toISOString()
  } : null;

  return (
    <>
      <MyHome dbProfile={serializedProfile} />
    </>
  );
}
