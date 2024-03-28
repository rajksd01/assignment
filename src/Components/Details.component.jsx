import { GiFullPizza, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { FaRegCreditCard } from "react-icons/fa6";
import { PiCurrencyInrLight } from "react-icons/pi";
import { useState, useEffect } from "react";

function Details() {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPosition =
        document.getElementById("features").offsetTop - 300;
      setShowContactForm(scrollPosition > triggerPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setFormSubmitted(true);
    setShowContactForm(false);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return (
    <div>
      {/* Investment Highlights section */}
      <div className="p-8 pl-28 -mt-24">
        <h1 className="text-2xl ml-2 text-green font-bold">
          Investment Highlights
        </h1>
        <div className="pt-8">
          <ul className="flex">
            <li className="flex p-3">
              <div className="p-2">
                <GiFullPizza className="w-12 h-12" />
              </div>
              <h2 className="text-lg bold text-green-700 flex">
                <span className="pt-1.5">
                  <PiCurrencyInrLight />
                </span>
                10.80L <br /> Per Share
              </h2>
            </li>
            <li className="flex p-3 ml-16">
              <div className="p-2">
                <GiReceiveMoney className="w-12 h-12" />
              </div>
              <h2 className="text-lg bold text-green-700">
                6%p.a <br />
                <span className="text-sm text-gray-500">Entry Year</span>
                <br />
                Rental Field
              </h2>
            </li>
            <li className="flex p-3 ml-16">
              <div className="p-2">
                <GiTakeMyMoney className="w-12 h-12" />
              </div>
              <h2 className="text-lg bold text-green-700 flex">
                14.32%* <br /> Targeted IRR
              </h2>
            </li>
            <li className="flex p-3 ml-16">
              <div className="p-2">
                <FaRegCreditCard className="w-12 h-12" />
              </div>
              <h2 className="text-lg bold text-green-700">
                Inaara Stay Credits** <br />
                <span className="text-sm text-gray-500">worth</span> <br />
                ₹18,000 Per Year
              </h2>
            </li>
          </ul>
        </div>
        <div className="flex m-4 text-sm">
          <p className="text-gray-500">
            * Based on assumption, actuals may vary
          </p>
          <p className="text-gray-500 ml-4">
            ** To be used at Inaara within a year
          </p>
        </div>
      </div>

      {/* Asset Overview and Milestone */}
      <div className="pl-32 mt-12 flex">
        {/* Table */}
        <div>
          <h2 className="text-xl font-bold">Asset Overview </h2>

          <div className="overflow-x-auto mt-8 ">
            <table className="table-auto border-collapse border border-green-800">
              <thead>
                <tr className="bg-green-900 text-[#FFFDCB]">
                  <th className=" text-sm p-4">Configuration</th>
                  <th className=" text-sm p-4 ">
                    Usable Carpet Area <br />
                    (In Sq feet)
                  </th>
                  <th className="text-sm p-4">No. of Units</th>
                  <th className=" text-sm p-4">
                    Total Usable Carpet <br /> (In Sq feet)
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="border border-gray-800 p-4 bg-white text-black">
                    Studio
                  </td>
                  <td className="border border-gray-800 p-4 bg-white text-black">
                    345
                  </td>
                  <td className="border border-gray-800 p-4 bg-white text-black">
                    17
                  </td>
                  <td className="border border-gray-800 p-4 bg-white text-black">
                    5,865
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-800 p-4 bg-white text-black">
                    1 BHK
                  </td>
                  <td className="border border-gray-800 p-4 bg-white text-black">
                    475
                  </td>
                  <td className="border border-gray-800  p-4 bg-white text-black">
                    18
                  </td>
                  <td className="border border-gray-800 p-4 bg-white text-black">
                    8,550
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-800 p-4 bg-white text-black">
                    1 BHK Garden Flat
                  </td>
                  <td className="border border-gray-800 p-4 bg-white text-black">
                    718
                  </td>
                  <td className="border border-gray-800 p-4 bg-white text-black">
                    4
                  </td>
                  <td className="border border-gray-800 p-4 bg-white text-black">
                    2,872
                  </td>
                </tr>

                {/* Total row */}
                <tr className="bg-green-900 text-gold">
                  <td className="border border-gray-800 p-4 bg-white text-black">
                    Total
                  </td>
                  <td className="border border-gray-800 p-4 bg-white text-black"></td>
                  <td className="border border-gray-800 p-4 bg-white text-black">
                    39
                  </td>
                  <td className="border border-gray-800 p-4 bg-white text-black">
                    17,287
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Milestone */}
        <div className="ml-28">
          <h2 className="text-2xl ml-2 text-green font-bold">Milestone</h2>
          <img
            src="../../src/assets/milestone.jpg"
            className="h-80 mt-8 -ml-8 shadow-right-bottom rounded-sm"
            alt="Milestone"
          />
        </div>
      </div>

      {/* Key Features */}
      <div id="features" className="features pl-32 mt-12 flex flex-col">
        <h2 className="text-2xl font-bold text-green-700 mt-12 mb-8">
          Key Features
        </h2>
        <div className="flex">
          <div className="flex-1 p-4">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <GiFullPizza className="mr-2 text-green-700" /> Feature 1
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex-1 p-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <GiReceiveMoney className="mr-2 text-green-700" /> Feature 2
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="flex-1 p-8">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <GiTakeMyMoney className="mr-2 text-green-700" /> Feature 3
            </h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="h-96 w-full"></div>
      </div>

      {/* Contact Form Popup */}
      {showContactForm && !formSubmitted && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50 backdrop-filter backdrop-blur-lg bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-2xl font-bold mb-4">
              Fill the form to view more details.
            </h2>
            <p className="text-gray-700 mb-4">
              Getting in touch is the first step towards forging meaningful
              connections and fostering collaborations.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
                <label
                  htmlFor="contactNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Notification */}
      {showNotification && (
        <div className="fixed bottom-5 right-5 bg-green-500 text-white px-4 py-2 rounded-md">
          You can now see the complete details
        </div>
      )}
    </div>
  );
}

export default Details;
