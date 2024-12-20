'use client'
import { BarIcon } from "@/icons/BarIcon";
import { ChevronDownIcon } from "@/icons/ChevronDown";
import { CopyIcon } from "@/icons/CopyIcon";
import { DocumentIcon } from "@/icons/DocumentIcon";
import { PersonIcon } from "@/icons/PersonIcon";
import { RightIcon } from "@/icons/RightIcon";
import Image from "next/image";
import React, { useState } from "react";

interface AgentSkillModalProps {
    onClose: () => void;
    onAllowAccess: (email: string) => void;
}

const AgentSkillModal: React.FC<AgentSkillModalProps> = ({ onClose, }) => {
    const [email, setEmail] = useState("purchasing@contoso.com");
    const [isOpen, setIsOpen] = useState(false);


    const handleRemoveEmail = () => {
        setEmail(""); // Clears the email when the cross is clicked
    };

    const toggleAccordion = () => {
        setIsOpen((prev) => !prev);
    };


    return (
        <div className="z-30 fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg w-11/12 md:w-1/2 p-6 pt-10 lg:pt-20 shadow-lg overflow-y-auto lg:h-[auto] h-[80vh]">
                <div className="flex items-center mb-4">
                    <Image
                        src="/images/copilot2.jpg"
                        alt="Description of image"
                        width={30}
                        height={30}
                        className="mx-1 mr-2 rounded-full"
                    />
                    <h2 className="text-[15px] font-semibold text-gray-800 ">Agent Skill</h2>

                </div>


                <div className="shadow-outset p-6 rounded-md">
                    {/* Trigger to open/close the accordion */}
                    <div className="flex justify-between items-center cursor-pointer" onClick={toggleAccordion}>
                        <p className="text-gray-600 text-[14px] font-medium py-2">
                            Check if on-hand inventory will allow all sales orders to ship without delay.
                        </p>
                        <div className={`w-[20px] transition-transform duration-300 ease-in-out text-black ${isOpen ? 'transform rotate-180' : ''
                            }`}>
                            <ChevronDownIcon />

                        </div>
                    </div>

                    {/* Accordion content */}
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'
                            }`}
                    >
                        <div className="text-gray-700 leading-relaxed text-[14px]">
                            When{" "}
                            <span className="text-[13px] font-normal px-3 py-1 bg-blue-50 text-sky-800 rounded-full inline-flex items-center gap-2">
                                <div className="w-[15px] h-[15px]">
                                    <PersonIcon className="w-full h-full text-sky-800" />
                                </div>
                                any vendor
                            </span>{" "}
                            sends an email with changes to{" "}
                            <span className="text-[13px] font-normal px-3 py-1 bg-blue-50 text-sky-800 rounded-full inline-flex items-center gap-2">
                                <div className="w-[15px] h-[15px]">
                                    <DocumentIcon className="w-full h-full text-sky-800" />
                                </div>
                                Confirmed purchase orders
                            </span>{" "}
                            , check if the resulting{" "}
                            <span className="text-[13px] font-normal px-3 py-1 bg-blue-50 text-sky-800 rounded-full inline-flex items-center gap-2">
                                <div className="w-[15px] h-[15px]">
                                    <BarIcon className="w-full h-full text-sky-800" />
                                </div>
                                on-hand inventory
                            </span>{" "}
                            will allow{" "}
                            <span className="text-[13px] font-normal px-3 py-1 bg-blue-50 text-sky-800 rounded-full inline-flex items-center gap-2">
                                <div className="w-[15px] h-[15px]">
                                    <CopyIcon className="w-full h-full text-sky-800" />
                                </div>
                                all sales orders
                            </span>{" "}
                            to{" "}
                            <span className="text-[13px] font-normal px-3 py-1 bg-blue-50 text-sky-800 my-2 rounded-full inline-flex items-center gap-2">
                                <div className="w-[15px] h-[15px]">
                                    <RightIcon className="w-full h-full text-sky-800" />
                                </div>
                                ship without delay
                            </span>{" "}
                            if so{" "}
                            <span className="text-[13px] font-normal px-3 py-1 bg-blue-50 text-sky-800 my-2 rounded-full inline-flex items-center gap-2">
                                <div className="w-[15px] h-[15px]">
                                    <RightIcon className="w-full h-full text-sky-800" />
                                </div>
                                update the purchaser order
                            </span>{" "}
                            to reflect the change.
                        </div>
                    </div>
                </div>


                <div className=" border-gray-300 pt-4 mb-4">
                    <h3 className="text-lg font-medium text-gray-800 mb-2 text-[13px]">Enable email access</h3>
                    <p className="text-gray-600 text-[13px] mb-4">
                        Allow the agent to access email inboxes to read mail from known vendors.
                    </p>
                    <div className=" flex gap-2 lg:gap-0 lg:items-center flex-col lg:flex-row justify-between">
                        <div className="p-1 border-2 border-gray-300 rounded-lg lg:w-4/5 h-[5.5vh]">

                            {email && (
                                <div className="flex items-center gap-2 bg-gray-50 rounded-full  w-[30vh] ">
                                    {/* Email Text */}
                                    <div className="p-[3px] px-[9px] bg-red-100 text-center border-2 border-gray-300 rounded-full text-[13px] text-gray-500">P</div>
                                    <span className="text-gray-700 text-[13px] flex items-center">
                                        {email}
                                    </span>

                                    {/* Cancel Cross Icon */}
                                    {email && (
                                        <button
                                            type="button"
                                            onClick={handleRemoveEmail}
                                            className="text-gray-600 hover:text-gray-800 focus:outline-none"
                                        >
                                            ✕
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                        <button
                        // onClick={() => onAllowAccess(email)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-[13px]"
                    >
                        Allow Access
                    </button>
                    </div>
                </div>

                <div className="flex justify-end gap-2 mt-28">
                    <button
                        onClick={onClose}
                        className="bg-gray-200 text-gray-400 px-4 py-2 rounded-lg hover:bg-gray-300 text-[13px]"
                    >
                        Activate
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 text-[13px]"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgentSkillModal;
