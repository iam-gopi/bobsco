import React from "react";
import { useParams } from "react-router-dom";
import Card from "../card";

function SubCourses() {
  const { id } = useParams();
  if (id == 1) {
    return (
      <>
        <section className="mx-auto  py-28 bg-gray-100 px-5">
          <main className="mx-auto sm:container">
            <p className="capitalize text-3xl font-bold">IIT Offered Courses</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <Card
                courseName="Foundation Courses In Integrated AI"
                smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />
              <Card
                courseName="Full Stack Web Development: Basic Course"
                smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />
              <Card
                courseName="Full Stack Web Development: Advanced Course"
                smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />
              <Card
                courseName="Practical DataScience"
                smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />
              <Card
                courseName="Advanced DataScience"
                smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />
              <Card
                courseName="Block chain & Cryptocurrency"
                smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />
              <Card
                courseName="Network Security"
                smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />
              <Card
                courseName="Deep Learning Foundation Course"
                smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />
              <Card
                courseName="deep Learning Methods and Applications"
                smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />{" "}
              <Card
                courseName="Machine Learning"
                smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />
            </div>
          </main>
        </section>
      </>
    );
  } else {
    return (
      <>
        <section className="mx-auto  py-28 bg-gray-100 px-5">
          <main className="mx-auto sm:container">
            <p className="capitalize text-3xl font-bold">
              Language Proficiency Courses
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <Card
                courseName="IELTS"
                smallDesc="Course of IELTS Exam preparation"
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />
              <Card
                courseName="OET"
                smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />
              <Card
                courseName="TOEFL"
                smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />
              <Card
                courseName="German"
                smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />
              <Card
                courseName="Japanese Proficiency"
                smallDesc="IITs offer specialized programming courses within Computer Science and Engineering departments, focusing on areas like Algorithms, Data Structures, Machine Learning, Artificial Intelligence, Software Engineering, and Web Technologies, aimed at equipping students with cutting-edge programming skills and computational thinking."
                img={`${process.env.PUBLIC_URL}/images/course/DA.jpg`}
              />
            </div>
          </main>
        </section>
      </>
    );
  }
}

export default SubCourses;
