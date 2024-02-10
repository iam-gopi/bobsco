import React from "react";

export default function Moto() {
  return (
    <>
      <section className="mx-auto  max-w-12xl py-14 bg-red-800 text-white">
        <div className="flex justify-center items-center flex-col my-10 text-center">
          <p className="text-3xl uppercase underline underline-offset-8">
            our moto
          </p>
          <p className="text-3xl my-6 uppercase">
            UT PROSIM / THAT I MAY SERVE
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-12xl py-14   bg-gray-100 grid grid-rows-1 grid-flow-row md:grid-flow-col gap-4">
        <div className="text-center m-8">
          <p className="capitalize text-3xl">boundless impact</p>
          <p className="capitalize mt-6">the campaign for Virginia Tech</p>
          <button className="bg-red-800 text-white text-center w-full p-5 my-6">
            Learn More
          </button>
        </div>
        <div className="text-center m-8">
          <p className="capitalize text-3xl">innovation campus</p>
          <p className="capitalize mt-6">news and updates</p>
          <button className="bg-red-800 text-white text-center w-full p-5 my-6">
            Visit the site
          </button>
        </div>
      </section>
    </>
  );
}
