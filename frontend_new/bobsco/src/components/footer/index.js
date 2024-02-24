import React from "react";

export default function Footer() {
  const footerbgImage = {
    backgroundImage: 'url("images/footerbg.svg")',
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };
  return (
    <footer className="bg-gray-900 " style={footerbgImage}>
      <div className="mx-auto container w-full  p-4 py-6 lg:py-8 ">
        <div className="md:flex md:justify-between md:items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <img
                src="images/logo.png"
                className="h-40 me-3"
                alt="Bobsco Edu Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Bobsco Edu
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-lg font-bold text-white uppercase underline underline-offset-8 transition ease-in-out delay-150 duration-150">
                Resources
              </h2>
              <ul className="text-white font-medium list-none">
                <li className="mb-4">
                  <a
                    href="#"
                    className=" text-white no-underline text-lg  transition ease-in-out delay-100 duration-100 hover:text-primaryRed hover:scale-150"
                  >
                    asdf
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white no-underline text-lg hover:text-primaryRed  transition ease-in-out delay-150 duration-105"
                  >
                    Tailwind CSS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold text-white uppercase underline underline-offset-8 transition ease-in-out delay-150 duration-150 ">
                Follow us
              </h2>
              <ul className="text-white font-medium list-none">
                <li className="mb-4">
                  <a
                    href="#"
                    className=" text-white no-underline text-lg hover:text-primaryRed  transition ease-in-out delay-150 duration-105"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white no-underline text-lg hover:text-primaryRed  transition ease-in-out delay-150 duration-105"
                  >
                    Discord
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-lg font-bold text-white uppercase underline underline-offset-8 transition ease-in-out delay-150 duration-150">
                Legal
              </h2>
              <ul className="text-white font-medium list-none">
                <li className="mb-4">
                  <a
                    href="#"
                    className=" text-white no-underline text-lg hover:text-primaryRed  transition ease-in-out delay-150 duration-105"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className=" ">
                  <a
                    href="#"
                    className="text-white no-underline text-lg hover:text-primaryRed  transition ease-in-out delay-150 duration-105"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-lg text-white sm:text-center ">
            © {new Date().getFullYear()}
            <a href="#" className="text-white underline-offset-4 ps-2">
              Bobsco Edu
            </a>
            . All Rights Reserved.
          </span>

          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <a
              href="#"
              className="text-white hover:text-gray-500 "
              title="Facebook"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-500  ms-5"
              title="Telegram"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-500  ms-5"
              title="WhatsApp"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill="currentColor"
                  d="M5 4.768a.5.5 0 01.761.34l.14.836a.5.5 0 01-.216.499l-.501.334A4.501 4.501 0 015 5.5v-.732zM9.5 10a4.5 4.5 0 01-1.277-.184l.334-.5a.5.5 0 01.499-.217l.836.14a.5.5 0 01.34.761H9.5z"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M0 7.5a7.5 7.5 0 113.253 6.182l-2.53 1.265a.5.5 0 01-.67-.67l1.265-2.53A7.467 7.467 0 010 7.5zm4.23-3.42l.206-.138a1.5 1.5 0 012.311 1.001l.14.837a1.5 1.5 0 01-.648 1.495l-.658.438A4.522 4.522 0 007.286 9.42l.44-.658a1.5 1.5 0 011.494-.648l.837.14a1.5 1.5 0 011.001 2.311l-.138.207a.5.5 0 01-.42.229h-1A5.5 5.5 0 014 5.5v-1a.5.5 0 01.23-.42z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            <a
              href="#"
              className="text-white hover:text-gray-500  ms-5"
              title="Twitter"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fill-rule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clip-rule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>
            <a
              href="#"
              className="text-white hover:text-gray-500  ms-5"
              title="Linkedin"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 01.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              <span className="sr-only">Linkedin</span>
            </a>
            <a href="#" className="text-white hover:text-gray-500  ms-5">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M21.973 6.68a6.124 6.124 0 00-.098-1.073 4.372 4.372 0 00-.406-1.246 4.324 4.324 0 00-.832-1.11 4.125 4.125 0 00-1.816-1.036 7.36 7.36 0 00-1.92-.205L16.898 2H7.099v.01a10.488 10.488 0 00-1.101.05 5.243 5.243 0 00-1.176.264A4.262 4.262 0 002.219 5.17a7.338 7.338 0 00-.205 1.905l-.006 9.838a9.445 9.445 0 00.09 1.333 4.616 4.616 0 00.41 1.345 4.305 4.305 0 001.201 1.454 3.903 3.903 0 001.203.651 6.516 6.516 0 001.976.29c.42.003.839.014 1.258.012 3.047-.013 6.094.022 9.14-.019a7.19 7.19 0 001.2-.127 4.06 4.06 0 002.007-.977 4.162 4.162 0 001.326-2.212 8.062 8.062 0 00.173-1.75v-.117c0-.046-.017-9.984-.019-10.115zm-2.676 9.25c-.128.3-.774.548-1.868.717-.102.016-.146.182-.205.454-.024.112-.05.222-.083.337a.204.204 0 01-.216.162h-.018a1.746 1.746 0 01-.31-.04 4.097 4.097 0 00-.821-.086 3.637 3.637 0 00-.592.05 2.836 2.836 0 00-1.123.574 3.257 3.257 0 01-1.97.776 2.33 2.33 0 01-.112-.003.854.854 0 01-.073.003 3.253 3.253 0 01-1.97-.776 2.84 2.84 0 00-1.123-.574 3.633 3.633 0 00-.592-.05 4.047 4.047 0 00-.82.093 1.82 1.82 0 01-.311.044.214.214 0 01-.234-.167c-.035-.117-.06-.23-.083-.34-.06-.273-.103-.44-.205-.456-1.094-.168-1.74-.417-1.869-.718a.278.278 0 01-.023-.095.176.176 0 01.147-.183 3.818 3.818 0 002.296-1.365A5.145 5.145 0 007.9 13.07l.004-.008a.785.785 0 00.075-.658c-.14-.332-.607-.48-.916-.578a3.27 3.27 0 01-.207-.07c-.274-.108-.724-.337-.664-.652a.61.61 0 01.593-.39.42.42 0 01.18.036 1.796 1.796 0 00.742.196.621.621 0 00.428-.131q-.012-.219-.027-.438a7.388 7.388 0 01.177-2.951 3.837 3.837 0 013.562-2.298l.295-.002a3.843 3.843 0 013.568 2.298 7.398 7.398 0 01.176 2.955l-.003.047-.023.389a.602.602 0 00.388.13 1.86 1.86 0 00.7-.195.552.552 0 01.228-.046.694.694 0 01.261.05l.004.002a.485.485 0 01.367.398c.003.153-.11.381-.669.602-.057.022-.13.046-.207.07-.31.098-.776.246-.916.578a.784.784 0 00.074.657l.004.009a4.522 4.522 0 003.079 2.582.176.176 0 01.146.183.28.28 0 01-.023.096z" />
              </svg>
              <span className="sr-only">Snapchat</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
