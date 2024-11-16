"use client";

import Admin from "@/component/Dashboard/Admin/Admin";
import Loader from "@/component/Loader";
import { useEffect, useState } from "react";

 
const Page = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    // Simulating a delay of 2 seconds before disabling the loading state
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clearing the timeout to prevent memory leaks
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {
        loading ? (
          <Loader />
        ) : (

          <div className="px-[50px]"> 
          <Admin />
          </div>
        )
      }
    </>
  );
};

export default Page;