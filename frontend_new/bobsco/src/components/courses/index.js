import React from "react";
import Card from "../card";

const Courses = () => {
  return (
    <section className="mx-auto  py-28 bg-gray-100 px-5">
      <main className="mx-auto sm:container">
        <p className="capitalize text-3xl font-bold">Top Courses</p>
        <div className="grid grid-rows-1 md:grid-flow-col gap-4 mt-6">
          <Card
            courseName="Technical - IIT Offered Courses"
            smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
            img="images/course/DA.jpg"
          />
          <Card
            courseName="Non Technical Courses"
            smallDesc="Non-technical courses offered such as Humanities and Social Sciences, Design, aimed at providing a holistic education that fosters critical thinking, creativity, and a deep understanding of societal impacts. These courses are designed to complement technical education with a broad perspective on global challenges and human values."
            img="images/course/AI.webp"
          />
          <Card
            courseName="Language Courses"
            smallDesc="Language exam preparation courses focus on enhancing proficiency in languages like English, French, German, and Spanish, specifically targeting international exams such as TOEFL, IELTS, DELF, and DELE, to equip students with the necessary skills for academic and professional success in global settings."
            img="images/course/DS.jpg"
          />
          <Card
            courseName="Competitive Exam Courses"
            smallDesc="CUET, JEE, NEET, CLAT, Civil Services, UPSC, PSC, SSC, Banking, and RRB exams are competitive entrance and recruitment tests in India for universities, engineering, medical, public sector jobs, and banking sectors. Exam patterns, and strategic approaches to succeed. These courses aim to equip aspirants with the knowledge, skills, and techniques to excel in these exams."
            img="images/course/DE.jpg"
            url="/evedhik"
          />
        </div>
      </main>
    </section>
  );
};

export default Courses;
