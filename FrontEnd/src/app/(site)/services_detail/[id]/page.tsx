"use client";
import GetService from "@/components/pages/servisesSection/GetService";
import Rodology from "@/components/pages/servisesSection/Rodology";
import { useGetAllServicesQuery } from "@/redux/api/data";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React from "react";

const page = () => {

  let content = null;

  const { id } = useParams(); 
  const searchParams = useSearchParams(); 
  const pattern = searchParams.get("pattern");
  console.log("🚀 ~ page ~ pattern:", pattern)

  if (pattern === "1") {
    content = <div><GetService/></div>;
  } else if (pattern === "2") {
    content = <div><Rodology/></div>;
  }

  return <div>
    {content}
    
    </div>;
};

export default page;
