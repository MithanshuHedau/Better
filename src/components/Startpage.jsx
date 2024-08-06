import React from 'react';
import { Tooltip } from 'react-tooltip';

const Startpage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Hi, I'm Mithanshu!
            <br />
            What can I help you with?
          </h1>
        </header>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div role="radiogroup" className="flex gap-4">
            <button
              aria-checked="false"
              role="radio"
              tabIndex="0"
              className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transform transition-transform hover:scale-105"
            >
              <div className="mb-2">
                <svg
                  fill="transparent"
                  height="36"
                  viewBox="0 0 36 36"
                  width="36"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="start-purchase-icon"
                >
                  <title id="start-purchase-icon">Start Purchase</title>
                  <path
                    d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z"
                    fill="#017848"
                  ></path>
                  <path
                    d="M16.8 13v2.374h-1.2a3.607 3.607 0 0 0-3.118 1.78 3.527 3.527 0 0 0 0 3.56 3.607 3.607 0 0 0 3.118 1.78h4.8c.429 0 .825.227 1.04.594.214.367.214.82 0 1.187-.215.367-.611.593-1.04.593h-4.8c-.318 0-.624-.125-.849-.347a1.18 1.18 0 0 1-.351-.84H12c0 .945.38 1.85 1.054 2.518a3.622 3.622 0 0 0 2.546 1.043h1.2v2.373h2.4v-2.373h1.2a3.607 3.607 0 0 0 3.118-1.78 3.526 3.526 0 0 0 0-3.56A3.607 3.607 0 0 0 20.4 20.12h-4.8c-.429 0-.825-.226-1.04-.593a1.176 1.176 0 0 1 0-1.187c.215-.367.611-.594 1.04-.594h4.8c.318 0 .624.125.849.348.225.222.351.524.351.84H24c0-.945-.38-1.85-1.054-2.519a3.621 3.621 0 0 0-2.546-1.042h-1.2V13h-2.4Z"
                    fill="#017848"
                  ></path>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">
                Buying a home
              </span>
              <Tooltip
                content="Explore options for purchasing a new home, including loan and down payment assistance."
                placement="top"
                className="bg-gray-700 text-white text-xs p-2 rounded"
              >
                <span className="ml-2 text-gray-500">(more info)</span>
              </Tooltip>
            </button>

            <button
              aria-checked="false"
              role="radio"
              tabIndex="-1"
              className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-primary transform transition-transform hover:scale-105"
            >
              <div className="mb-2">
                <svg
                  fill="transparent"
                  height="36"
                  viewBox="0 0 36 36"
                  width="36"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-labelledby="start-refinance-icon"
                >
                  <title id="start-refinance-icon">Start Refinance</title>
                  <path
                    d="M35.579 13.748 18.703.247a1.124 1.124 0 0 0-1.406 0L.42 13.747a1.125 1.125 0 0 0 .698 2.003h2.25v19.126A1.126 1.126 0 0 0 4.494 36h27.001a1.125 1.125 0 0 0 1.125-1.125V15.75h2.25a1.125 1.125 0 0 0 .709-2.002Zm-4.084-.248a1.125 1.125 0 0 0-1.125 1.125V33.75H5.619V14.625A1.126 1.126 0 0 0 4.494 13.5h-.169l13.67-10.936L31.662 13.5h-.168Z"
                    fill="#017848"
                  ></path>
                  <path
                    d="M17.6 15v1.768h-.9c-.965 0-1.856.505-2.338 1.326a2.61 2.61 0 0 0 0 2.651 2.709 2.709 0 0 0 2.338 1.326h3.6c.322 0 .619.169.78.442a.87.87 0 0 1 0 .884.903.903 0 0 1-.78.442h-3.6a.908.908 0 0 1-.636-.259.876.876 0 0 1-.264-.625H14c0 .704.284 1.378.79 1.876a2.725 2.725 0 0 0 1.91.776h.9v1.768h1.8v-1.768h.9c.965 0 1.856-.505 2.338-1.326a2.61 2.61 0 0 0 0-2.651 2.709 2.709 0 0 0-2.338-1.326h-3.6a.903.903 0 0 1-.78-.442.87.87 0 0 1 0-.884.903.903 0 0 1 .78-.442h3.6c.239 0 .468.093.636.259.17.165.264.39.264.625H23c0-.704-.285-1.378-.79-1.876a2.725 2.725 0 0 0-1.91-.776h-.9V15h-1.8Z"
                    fill="#017848"
                  ></path>
                  <path
                    d="M18.456 10c-1.682 0-3.375.3-5.004.862a11.74 11.74 0 0 0-4.746 2.467c-1.578 1.313-2.795 2.915-3.487 4.67-.341.738-.545 1.528-.603 2.33-.065.984.057 1.963.303 2.933.38 1.605 1.111 3.159 2.103 4.569.027.036.055.073.083.109.15.207.319.4.511.581a11.648 11.648 0 0 0 2.765 1.74c.596.262 1.233.444 1.889.518.308.031.618.046.931.046a12.036 12.036 0 0 0 4.254-.773 9.304 9.304 0 0 0 3.091-1.93c.057.026.116.053.174.08a1.136 1.136 0 0 0 .72-.06c.085-.05.164-.11.234-.17.339-.312.553-.76.553-1.267V12.5a1.083 1.083 0 0 0-.447-.849c-.16-.138-.357-.24-.569-.318a11.621 11.621 0 0 0-3.547-.654c-.31 0-.622.016-.931.048a7.158 7.158 0 0 0-5.238 3.665c.276-.062.563-.092.849-.092a6.832 6.832 0 0 1 6.827 6.827 6.832 6.832 0 0 1-6.827 6.827c-.55 0-1.087-.069-1.62-.202a9.353 9.353 0 0 0-.927-.271A11.736 11.736 0 0 0 18.456 10Z"
                    fill="#017848"
                  ></path>
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">
                Refinance
              </span>
              <Tooltip
                content="Learn about refinancing options to lower your mortgage rate or adjust the term of your loan."
                placement="top"
                className="bg-gray-700 text-white text-xs p-2 rounded"
              >
                <span className="ml-2 text-gray-500">(more info)</span>
              </Tooltip>
            </button>
          </div>
        </div>

        <footer className="text-center">
          <p className="text-gray-600">© 2024 Mithanshu Solutions</p>
        </footer>
      </div>
    </div>
  );
};

export default Startpage;
