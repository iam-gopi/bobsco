import React from "react";

export default function Hero() {
  return (
    <section className="mx-auto  max-w-12xl grid grid-rows-1 grid-flow-col min-h-svh">
      <div className="flex items-center  bg-gray-100">
        <div className="px-12 text-wrap">
          <p className="pt-8 pb-8">
            With the rich experience of academics from secondary schools to
            competitive exams being handled by Vedhik e-Schools and Vedhik IAS
            Academy we are opening the avenues for students/youth in GCC. Bobsco
            has its business in variety of fields in GCC region handholding with
            multiple role-players in the development sector for the past 35
            years
          </p>
          <p className="pb-8">
            We understand the growth of industry along with the progressive HR
            needs is to be through e-learning based on AI in this third decade
            of 21st Century. We found that with stalwarts in the field of
            education and Indian Administrative Service; Vedhik Academy is
            leaping far ahead in India supporting millions of students/youth.{" "}
          </p>
          <p className="pb-8">
            We have decided to shake hand with Vedhik academy to create this
            eLearning Space in the GCC.
          </p>
          <button className="text-white text-lg bg-red-800 hover:bg-red-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-800 dark:hover:bg-red-800 focus:outline-none dark:focus:ring-red-800">
            Learn More
          </button>
        </div>
      </div>
      <div className="order-2">
        <img
          src="images/headerbg.jpg"
          alt="header bg - Bobsco edu"
          className="w-full h shadow-2xl "
        />
      </div>
    </section>
  );
}
