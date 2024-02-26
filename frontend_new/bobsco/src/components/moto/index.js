import React from "react";

const Moto = () => {
  const motobgImage = {
    backgroundImage: 'url("images/headerbg.jpg")',
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  return (
    <>
      <section
        className="mx-auto  max-w-12xl bg-red-800 text-white py-16 h-96 overflow-x-hidden"
        style={motobgImage}
      >
        <div
          className="flex justify-center items-center flex-col my-10 text-center"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <p className="text-3xl font-extrabold  uppercase underline underline-offset-8">
            our moto
          </p>
          <p className="text-3xl my-6 uppercase font-extrabold">
            UT PROSIM / THAT I MAY SERVE
          </p>
        </div>
      </section>
      <section className="py-14 bg-gray-100">
        <main className="mx-auto container grid sm:grid-cols-2 gap-4">
          <div
            className="text-center m-8"
            data-aos="fade-down"
            data-aos-duration="1000"
          >
            <p className="capitalize text-3xl">boundless impact</p>
            <p className="capitalize mt-6">the campaign for Virginia Tech</p>
            <button className="bg-primaryRed hover:bg-red-800 text-white text-center w-full p-5 my-6 rounded-lg font-bold text-xl">
              Learn More
            </button>
          </div>
          <div
            className="text-center m-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <p className="capitalize text-3xl">innovation campus</p>
            <p className="capitalize mt-6">news and updates</p>
            <button className="bg-primaryRed hover:bg-red-800 text-white text-center w-full p-5 my-6 font-bold text-xl rounded-lg">
              Visit the site
            </button>
          </div>
        </main>
      </section>
    </>
  );
};
export default Moto;
