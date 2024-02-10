import React from "react";
import Card from "../card";

export default function Courses() {
  return (
    <section className="mx-auto max-w-10xl py-14 bg-gray-100 px-5">
      <p className="capitalize text-3xl font-bold">
        Stories from Virginia Tech News
      </p>
      <div className="grid grid-rows-1 grid-flow-row  md:grid-flow-col gap-4 mt-6">
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
