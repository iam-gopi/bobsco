import React from "react";

export default function Card({ courseName, smallDesc, img, url }) {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg transition ease-in-out duration-150 hover:shadow-2xl hover:scale-105">
      <a href="#">
        <img
          className="rounded-t-lg h-52 w-full"
          src={`${process.env.PUBLIC_URL}/${img}`}
          alt=""
          data-aos="fade-up"
          data-aos-duration="1000"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {courseName}
          </h5>
        </a>
        <p className="mb-3 text-lg text-gray-500">{smallDesc}</p>
        <div
          className="flex justify-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <a
            href={url}
            className="inline-flex items-center   px-3 py-2 text-lg font-medium text-white bg-primaryRed rounded-lg hover:bg-primaryRed focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-primaryRed dark:hover:bg-red-700 dark:focus:ring-blue-800 mt-5"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
