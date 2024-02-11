import React from "react";
import Card from "../card";

export default function Courses() {
  return (
    <section className="mx-auto max-w-10xl py-14 bg-gray-100 px-5">
      <p className="capitalize text-3xl font-bold">Top Courses</p>
      <div className="grid grid-rows-1 grid-flow-row  md:grid-flow-col gap-4 mt-6">
        <Card
          courseName="Data Analysis"
          smallDesc="Data analysis involves inspecting, cleansing, transforming, and modeling data to discover useful information, inform conclusions, and support decision-making. It's a critical process in various domains to extract insights and assess the performance of different strategies or processes."
          img="images/course/DA.jpg"
        />
        <Card
          courseName="Artificial Intelligence"
          smallDesc="Artificial Intelligence (AI) encompasses the development of computer systems that can perform tasks typically requiring human intelligence, such as visual perception, speech recognition, decision-making, and language translation. It aims to simulate human cognitive processes through algorithms and machine learning models."
          img="images/course/AI.webp"
        />
        <Card
          courseName="Data Science"
          smallDesc="Data Science is an interdisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data. It combines aspects of statistics, data analysis, machine learning, and their related methods to understand and analyze actual phenomena with data."
          img="images/course/DS.jpg"
        />
        <Card
          courseName="Data Engineering"
          smallDesc="Data Engineering involves the design, construction, and maintenance of systems for collecting, storing, and analyzing data at scale. It focuses on the practical application of data collection and data processing frameworks, ensuring data is accessible and usable for analytics and machine learning tasks."
          img="images/course/DE.jpg"
        />
      </div>
    </section>
  );
}
