import React from 'react'
import MyServices from './../../../src/page/myservices/myServices';
import dbConnect from "@/src/lib/db";
import { Service } from "@/src/models/Service";

export const revalidate = 0;

const Servicepage = async () => {
  await dbConnect();
  const services = await Service.find({}).sort({ createdAt: -1 }).lean();
  
  const serializedServices = services.map(doc => ({
    ...doc,
    _id: doc._id.toString(),
    createdAt: doc.createdAt?.toISOString(),
    updatedAt: doc.updatedAt?.toISOString()
  }));

  return (
    <div>
        <MyServices dbServices={serializedServices} />
    </div>
  )
}

export default Servicepage