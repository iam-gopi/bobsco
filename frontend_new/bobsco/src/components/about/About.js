import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-28">
      <main className="mx-auto container grid sm:grid-cols-2 gap-4">
        <div>
          <img
            className="rounded-lg shadow transition ease-in duration-150 hover:shadow-2xl border-white p-3"
            src="images/carousel/33.png"
            alt=""
          />
        </div>
        <div>
          <p className="text-gray-700 mb-3 text-lg text-center sm:text-left sm:mt-0 mt-10">
            Bobsco Edu
          </p>
          <h1 className="font-bold text-3xl underline underline-offset-8 custom-underline-color mb-10 capitalize text-gray-700 text-center sm:text-left sm:mt-0 mt-7">
            introduction
          </h1>
          <p className="mb-7 text-lg sm:p-0 px-4">
            With the rich experience of academics from secondary schools to
            competitive exams being handled by Vedhik e-Schools and Vedhik IAS
            Academy we are opening the avenues for students/youth in GCC.
          </p>
          <p className="mb-7 text-lg sm:p-0 px-4">
            Bobsco has its business in variety of fields in GCC region
            handholding with multiple role-players in the development sector for
            the past 35 years We understand the growth of industry along with
            the progressive HR needs is to be through e-learning based on AI in
            this third decade of 21st Century.
          </p>
          <p className="mb-7 text-lg sm:p-0 px-4">
            We found that with stalwarts in the field of education and Indian
            Administrative Service; Vedhik Academy is leaping far ahead in India
            supporting millions of students/youth. We have decided to shake hand
            with Vedhik academy to create this eLearning Space in the GCC.
          </p>
          <div className="flex sm:justify-start justify-center">
            <button className="bg-primaryRed text-white px-10 py-5 text-xl font-bold rounded-lg hover:shadow-2xl hover:bg-gray-100 hover:text-primaryRed hover:border-primaryRed hover:border-2 transition ease-in-out duration-300 hover:translate-x-1 mt-10 ">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;
