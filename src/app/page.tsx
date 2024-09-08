import React from 'react';
import Image from 'next/image';
import contactImage from "@/components/images/download.jpeg";
const page = () => {
  return (
    <div><figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
    <Image className="w-24 h-24 rounded-full mx-auto" src={contactImage} alt="" width="384" height="512"/>
    <div className="pt-6 space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Our home provides us with a sense of protection and shelter from the outside world. We can be ourselves and let our guard down in the comfort of our homes. The feeling of safety and security that home provides is essential to our mental and emotional well-being..”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          dream
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          home
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page