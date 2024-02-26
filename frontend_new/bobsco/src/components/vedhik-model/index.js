import React, { useState, useMemo } from "react";
import countryList from "react-select-country-list";
import Select from "react-select";

const VedhikModel = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
  });
  const options = useMemo(() => countryList().getData(), []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleCountryChange = (event) => {
    console.log(event);
    setFormData((prevFormData) => ({
      ...prevFormData,
      country: event.label,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window
      .fetch("http://localhost:3000/api/evedhik/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then(() => {
        window.open("https://vedhikeschools.com/", "_blank");
      })
      .catch();
  };

  return (
    <section className="py-28 ">
      <p className="text-3xl text-center my-20">Kindly do fill the form.</p>
      <form className="max-w-md mx-5 sm:mx-auto " onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primaryRed peer"
              placeholder=" "
              required
              onChange={handleChange}
              autoComplete="false"
              aria-autocomplete="none"
              autoFocus
            />
            <label
              for="firstName"
              className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primaryRed peer-focus:dark:text-primaryRed peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              First name
            </label>
          </div>
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primaryRed peer"
              placeholder=" "
              required
              autoComplete="false"
              aria-autocomplete="none"
              onChange={handleChange}
            />
            <label
              for="lastName"
              className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primaryRed peer-focus:dark:text-primaryRed peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Last name
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primaryRed peer"
            placeholder=" "
            required
            autoComplete="false"
            aria-autocomplete="none"
            onChange={handleChange}
          />
          <label
            for="email"
            className="peer-focus:font-medium absolute text-lg text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primaryRed peer-focus:dark:text-primaryRd peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>

        <div className="grid md:grid-cols-1 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="tel"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primaryRed peer"
              placeholder=" "
              required
              value={formData.phone}
              minLength="10"
              autoComplete="false"
              aria-autocomplete="none"
              onChange={handleChange}
            />
            <label
              for="phone"
              className="peer-focus:font-medium absolute text-lg text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-primaryRed peer-focus:dark:text-primaryRed peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone number
            </label>
          </div>
        </div>

        <div>
          <Select
            name="country"
            options={options}
            value={formData.country.split("-")[1]}
            onChange={handleCountryChange}
          />
        </div>
        <button
          type="submit"
          className="text-white hover:text-white bg-primaryRed hover:bg-red-800 font-bold rounded-lg text-lg w-full px-9 py-2.5 text-center mt-10"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default VedhikModel;
