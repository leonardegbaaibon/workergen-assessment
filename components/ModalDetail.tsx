import { PlaneIcon } from "@/icons/PlaneIcon";
import { Sparkles } from "@/icons/SparklesIcon";
import Image from "next/image";
import React, { useState } from "react";

interface ModalProps {
  onClose: () => void;
}

const DetailModal: React.FC<ModalProps> = ({ onClose }) => {
  const [selected, setSelected] = useState("engage"); // Default selection is "engage"

  return (
    <div className="fixed inset-0 bg-gray-50 bg-opacity-0 flex justify-center items-center z-50">
      <div className="rounded-[10px] p-px bg-gradient-to-r from-indigo-500 to-purple-400 mt-5 bg-white shadow-outset w-11/12 lg:w-4/5 max-w-4xl ">
        <div className="bg-white rounded-lg shadow-lg m-[2px] h-[87vh] overflow-y-auto">
          <div className="flex justify-between items-center px-6 py-4 border-b">
            <h2 className="text-xl font-semibold">Engage with Jane Reyes</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              ✕
            </button>
          </div>
          <div className="p-6 space-y-4">
            <div className=" p-3 rounded-md shadow-outset justify-between flex items-center">
              <div className='flex items-center'>
                <Image
                  src="/images/reyes.jpg" // Path to the image in the 'public' folder
                  alt="Description of image"
                  width={40}  
                  height={100} 
                  className="mx-1 mt-1 mb-2 mr-2 rounded-full"
                />
                <div className='flex flex-col'>
                  <span className='text-[12px] font-semibold text-gray-800'>
                    Jane reyes
                  </span>
                  <span className='text-[11px] font-normal text-gray-500'>
                    COO . Northwind Traders
                  </span>
                </div>
              </div>
            </div>
            {/* Placeholder for top details */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-100 p-4 rounded-md shadow-sm justify-between flex items-start lg:items-center lg:flex-row flex-col">
              <div className="flex items-center ">
                <div className='w-[20px] h-[20px] pr-1'>
                  <Sparkles />
                </div>
                <p className="text-gray-600 text-[12px]">
                  Jane may be interested in upgrading espresso machines for her
                  in-store coffee shops.
                </p>
              </div>
              <div className="flex items-start lg:items-center gap-2  lg:flex-row flex-col">
                <button className="border border-gray-400 px-4 text-[14px] text-gray-500 rounded-sm">
                  Edit
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-purple-400 px-4 py-[2px] flex items-center rounded">
                  <div className="w-[20px] h-[17px] pr-1"><PlaneIcon /></div><span className="text-[13px] py-1 text-white">Approve and send</span>
                </button>
              </div>
            </div>

            {/* Placeholder for Engage/Search Tabs */}
            <div className="flex items-center space-x-4 shadow-md">
              {/* Engage Button Wrapper */}
              <div
                className={`px-4 py-2 border-b-2 ${selected === "engage" ? "border-blue-600" : "border-transparent"
                  }`}
                onClick={() => setSelected("engage")}
              >
                <button className="text-gray-500 text-[12px]">Engage</button>
              </div>

              {/* Search Button Wrapper */}
              <div
                className={`px-4 py-2 border-b-2 ${selected === "search" ? "border-blue-600" : "border-transparent"
                  }`}
                onClick={() => setSelected("search")}
              >
                <button className="text-gray-600 text-[12px]">Search</button>
              </div>
            </div>

            {/* Placeholder for Lead Details */}
            <div className="bg-white-600 p-4 shadow-md rounded-lg ">
              <div className="relative bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg  space-y-2">
                <div className='w-[35px] h-[35px] p-2 rounded-bl-md bg-white absolute top-0 right-0'>
                  <Sparkles />
                </div>
                <h3 className="font-medium text-indigo-500 text-[14px]">Why I picked this lead</h3>
                <ul className="list-disc list-inside text-gray-700">
                  <li className="text-[12px]">
                    Jane is a key decision maker and was browsing ‘espresso
                    machines’.
                  </li>
                  <li className="text-[12px]">
                    Multiple people at her company reported slowness during
                    service requests.
                  </li>
                  <li className="text-[12px]">
                    Northwind Traders currently see $200M in revenue from their
                    coffee shops.
                  </li>
                </ul>
                <div className="flex items-start lg:items-center lg:flex-row flex-col gap-4">
                  <div className=" w-52 flex items-center bg-white shadow-outset p-4 rounded-2xl">
                    <div>
                      <Image
                        src="/images/Check.jpg" // Path to the image in the 'public' folder
                        alt="Description of image"
                        width={50}  // Specify the width of the image
                        height={100} // Specify the height of the imagemx
                        className="mx-1 mr-2 rounded-full"
                      />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900 text-[12px]">Decision maker</p>
                      <p className="text-indigo-600 text-start text-[12px]">Yes</p>
                    </div>

                  </div>
                  <div className=" w-52 flex items-center bg-white shadow-outset p-4 rounded-2xl">
                    <div>
                      <Image
                        src="/images/Rate.jpg" // Path to the image in the 'public' folder
                        alt="Description of image"
                        width={50}  // Specify the width of the image
                        height={100} // Specify the height of the imagemx
                        className="mx-1 mr-2 rounded-full"
                      />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900 text-[12px]">Potential deal value</p>
                      <p className="text-indigo-600 text-start text-[12px]">Yes</p>
                    </div>

                  </div>
                  <div className=" w-52 flex items-center bg-white shadow-outset p-4 rounded-2xl">
                    <div>
                      <Image
                        src="/images/Note.jpg" // Path to the image in the 'public' folder
                        alt="Description of image"
                        width={50}  // Specify the width of the image
                        height={100} // Specify the height of the imagemx
                        className="mx-1 mr-2 rounded-full"
                      />
                    </div>
                    <div className="text-center">
                      <p className="font-semibold text-gray-900 text-[12px]">Intent</p>
                      <p className="text-indigo-600 text-start text-[12px]">High</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder for About section */}
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="font-medium text-[12px]">About Jane</h3>
              <p className="text-gray-700 text-[12px]">
                Jane Reyes is the Chief Operating Officer of Northwind Traders, a
                dynamic leader with a proven track record in optimizing operations
                and enhancing customer experiences.Under her guidance, Northwind traders, in-store coffee shops have flourished, becoming
                a hallmark of quality and innovation. Janes commitment to excellence makes her an ideal partner for first Coffee. She is always
                seeking top-tier equipment to elevate her coffee shops offerings ensuring consistent, high-quality service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailModal;
