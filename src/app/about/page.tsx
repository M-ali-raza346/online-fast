import React from 'react';
import Image from 'next/image';
import imgImage from "@/components/images/img.jpeg";
const page = () => {
  return (
    <div className=' items-center justify-center h-screen bd-gray-300'>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <Image className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={imgImage}
    alt="THIS IS AN IMAGE" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Completing matriculation and becoming a Hafiz ul Quran are significant achievements that demonstrate both academic dedication and spiritual commitment. Matriculation marks the foundation of a student is educational journey or providing essential knowledge and skills. On the other hand memorizing the entire Quran reflects deep devotion or discipline or and a strong connection to faith. These accomplishments together highlight a balance between worldly education and religious devotion and preparing an individual for a life of purpose and integrity. Such achievements are a source of pride for both the individual and their community..”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Muhammmad ALI raza
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          student of AI
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page