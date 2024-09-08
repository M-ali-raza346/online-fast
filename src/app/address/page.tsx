import React from 'react';
import Image from 'next/image';
import addressImage from "@/components/images/address.png";
const page = () => {
  return (
    <div className=' items-center justify-center h-screen bd-gray-300'>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={addressImage}
     alt="this is am image" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “MY address.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          chowk pathanistan
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          Rahimyarkhan  pakistan
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page