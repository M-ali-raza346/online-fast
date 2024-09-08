import React from 'react';
import Image from 'next/image';
import contactImage from "@/components/images/contact.jpeg";
const page = () => {
  return (
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={contactImage}
    alt="this is an image" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
      <p className="text-lg font-medium text-red-500">
        My name is mali raza

      </p>
        <p className="text-lg font-medium">
          “this is my contact number.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          0302 8770999
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          this is my gmail contact
        </div>
        <div className="text-sky-500 dark:text-sky-400">
        maliraza.346346 

        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page