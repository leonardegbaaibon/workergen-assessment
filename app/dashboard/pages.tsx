'use client'
import Layout from '@/components/Layout';
import DetailModal from '@/components/ModalDetail';
import AgentSkillModal from '@/components/ModalPopup';
import UserTable from '@/components/UserTable';
import { useModal } from '@/context/ModalContext';
import { ChevronDownIcon } from '@/icons/ChevronDown';
import { CrossIcon } from '@/icons/CrossIcon';
import { ImageIcon } from '@/icons/ImageIcon';
import { MenuIcon } from '@/icons/MenuIcon';
import { RecentIcon } from '@/icons/RecentIcon';
import { SettingsIcon } from '@/icons/SettingsIcon';
import { Sparkles } from '@/icons/SparklesIcon';
import Image from 'next/image';
import { useState } from 'react';

// Dropdown Menu Item
interface DropdownMenuItemProps {
    label: string;
    onClick: () => void;
}
const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({ label, onClick }) => (
    <li
        className="p-2 hover:bg-gray-100 rounded-md cursor-pointer text-gray-700 text-[12px]"
        onClick={onClick}
    >
        {label}
    </li>
);


// Static Icon Item
interface IconItemProps {
    icon: React.ReactNode;
    label: string;
}
const IconItem: React.FC<IconItemProps> = ({ icon, label }) => (
    <div className="flex items-center space-x-2">
        <span className='w-5 text-gray-600'>{icon}</span>
        <span className="text-gray-700 text-[12px]">{label}</span>
    </div>
);

// Main Component
const Dashboard: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [detail, setDetail] = useState<boolean>(false);

    const { isModalOpen, closeModal } = useModal();


    const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

    // const handleClose = () => {
    //     console.log("Modal closed");
    //     setDisplay(false); // Hide the modal
    // };
    const handleClose2 = () => {
        console.log("Modal closed");
        setDetail(false); // Hide the modal
    };


    const handleAllowAccess = () => {
        console.log("Access allowed");
        // setDisplay(false); // Hide the modal after allowing access
    };

    return (
        <Layout>
            {isModalOpen && (
                <AgentSkillModal onClose={closeModal} onAllowAccess={handleAllowAccess} />
            )}
            {
                detail && (
                    <DetailModal onClose={handleClose2} />
                )
            }
            <div className="h-auto bg-white shadow-outset mt-5 rounded-[4px] px-4 py-3 flex flex-wrap items-center justify-between space-y-4 md:space-y-0">
                <div className="relative w-full md:w-auto">
                    <button
                        onClick={toggleDropdown}
                        className="text-gray-800 flex justify-center items-center font-semibold focus:outline-none text-sm md:text-[12px] w-full md:w-auto"
                    >
                        <span>My Open Leads</span>
                        <div className="w-[15px] h-[15px] ml-2">
                            <ChevronDownIcon />
                        </div>
                    </button>

                    {isDropdownOpen && (
                        <ul className="absolute left-0 mt-2 w-full md:w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
                            <DropdownMenuItem label="Tsaron" onClick={() => alert('Tsaron selected')} />
                            <DropdownMenuItem label="Durian Dynamic" onClick={() => alert('Durian Dynamic selected')} />
                            <DropdownMenuItem label="Pioneer" onClick={() => alert('Pioneer selected')} />
                        </ul>
                    )}
                </div>

                <div className="flex flex-wrap justify-end w-full md:w-auto space-y-4 md:space-y-0">
                    <div className="flex flex-wrap gap-4 justify-center md:justify-end w-full md:w-auto">
                        <IconItem icon={<ImageIcon />} label="Show Cart" />
                        <IconItem icon={<MenuIcon className="text-green-500" />} label="Focused View" />
                        <IconItem icon={<CrossIcon className="text-purple-500" />} label="New" />
                        <IconItem icon={<RecentIcon className="text-yellow-500" />} label="Refresh" />
                        <IconItem icon={<ImageIcon className="text-pink-500" />} label="Collaborate" />
                        <IconItem icon={<SettingsIcon className="text-red-500" />} label="Delete" />
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-end w-full md:w-auto">
                        {['Smart data', 'Edit filters', 'Edit columns'].map((text, index) => (
                            <p
                                key={index}
                                className="border border-gray-300 rounded-md p-2 text-[12px] text-gray-700 text-center"
                                // onClick={() => setDisplay(true)}
                            >
                                {text}
                            </p>
                        ))}
                        <div className="bg-blue-700 px-4 py-2 rounded-md flex items-center">
                            <span className="text-white text-[12px]">Drop</span>
                            <div className="w-[2px] ml-2 mr-1 h-5 bg-white"></div>
                            <div className="w-[20px] text-white">
                                <ChevronDownIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* Build the rest of the dashboard */}

            <div className="rounded-[18.5px] p-px bg-gradient-to-r from-blue-200 to-pink-200 mt-5 bg-white shadow-outset">
                <div className="bg-gray-50 m-[1px] p-5 rounded-[16.5px]">
                    <div className="block justify-between items-center lg:flex">
                        <div className='flex items-center'>
                            <Image
                                src="/images/copilot2.jpg"
                                alt="Description of image"
                                width={35}
                                height={100}
                                className="mx-1 mr-2 rounded-full"
                            />
                            <h2 className="text-[14px] font-semibold text-black">
                                Hi Mona, <span className="text-blue-500">68% of goal achieved</span> and rest can be achieved by focusing on 20 top leads.
                            </h2>
                        </div>
                        <div className="text-gray-500 text-[12px] mt-3 lg:mt-0">
                            Target: <strong>$45 million</strong> &middot; 68% of target achieved
                        </div>
                    </div>

                    <div className='block lg:flex justify-between items-center mt-6'>
                        <div className='gap-3'>
                            <h2 className="text-[13px] font-semibold text-gray-500">
                                Copilot has pinpointed 20 keys leads that show purchase intent and are actively engaging. These leads need your focus
                            </h2>

                            <div className="mt-4 flex flex-wrap gap-4">
                                <div className="p-4 h-auto w-full lg:w-[50vh] bg-white border rounded-md shadow-sm cursor-pointer" onClick={() => setDetail(true)}>
                                    <div className='flex items-center'>
                                        <Image
                                            src="/images/reyes.jpg"
                                            alt="Description of image"
                                            width={40}
                                            height={100}
                                            className="mx-1 mt-1 mb-2 mr-2 rounded-full"
                                        />
                                        <div className='flex flex-col'>
                                            <span className='text-[12px] font-semibold text-gray-800'>
                                                Jane Reyes
                                            </span>
                                            <span className='text-[11px] font-normal text-gray-500'>
                                                COO . Northwind Traders
                                            </span>
                                        </div>
                                    </div>
                                    <div className='relative bg-gradient-to-r from-blue-100 to-pink-50 p-4 rounded-md'>
                                        <div className='bg-white w-7 h-7 flex justify-center items-center p-1 absolute top-0 right-0 rounded-bl'>
                                            <div className='w-[15px] h-[15px]'>
                                                <Sparkles />
                                            </div>
                                        </div>
                                        <h3 className="font-medium text-gray-800 text-sm flex items-center">
                                            Engage with Jane Reyes
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Jane may be interested in upgrading espresso machines for her in-store coffee shops.
                                        </p>
                                    </div>
                                    <div className="text-gray-500 mt-2 text-[12px] font-semibold cursor-pointer">
                                        Expand business &middot; High buying intent
                                    </div>
                                </div>

                                <div className="p-4 h-auto w-full lg:w-[50vh] bg-white border rounded-md shadow-sm">
                                    <div className='flex items-center'>
                                        <Image
                                            src="/images/reyes.jpg"
                                            alt="Description of image"
                                            width={40}
                                            height={100}
                                            className="mx-1 mt-1 mb-2 mr-2 rounded-full"
                                        />
                                        <div className='flex flex-col'>
                                            <span className='text-[12px] font-semibold text-gray-800'>
                                                Jane Reyes
                                            </span>
                                            <span className='text-[11px] font-normal text-gray-500'>
                                                COO . Northwind Traders
                                            </span>
                                        </div>
                                    </div>
                                    <div className='relative bg-gradient-to-r from-blue-100 to-pink-50 p-4 rounded-md'>
                                        <div className='bg-white w-7 h-7 flex justify-center items-center p-1 absolute top-0 right-0 rounded-bl'>
                                            <div className='w-[15px] h-[15px]'>
                                                <Sparkles />
                                            </div>
                                        </div>
                                        <h3 className="font-medium text-gray-800 text-sm flex items-center">
                                            Prepare for meeting with Allan
                                        </h3>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Prepare for high-buying intent meeting scheduled for 2 PM regarding upgrading service contract.
                                        </p>
                                    </div>
                                    <div className="text-gray-500 mt-2 text-[12px] font-semibold">
                                        Upcoming meeting &middot; Due today
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative hidden lg:block h-[30vh]'>
                            <div className="border-l-2 mx-6 border-gray-100 h-full"></div>
                        </div>

                        <div className='flex flex-col gap-2 mt-4 lg:mt-0'>
                            <span className='text-[13px] text-gray-500'>Other key activities</span>
                            <div className="py-2 px-3 h-auto w-full lg:w-[45vh] bg-gray-50 border rounded-md shadow-sm">
                                <h3 className="font-medium text-gray-800 text-[13px]">
                                    Cafe A100 for Woodland Bank
                                </h3>
                                <p className="text-[10px] text-gray-500 mt-1">
                                    Woodland Bank . $280,000. 8 days to close
                                </p>
                                <div className='flex justify-between items-center w-full mt-2'>
                                    <div className="text-gray-600 w-full lg:w-[44vh] p-1 border rounded-md text-[11px] font-semibold bg-gray-200">
                                        Review draft and reply to Chris Nadio
                                    </div>
                                    <div className='w-[15px] h-[15px]'>
                                        <Sparkles />
                                    </div>
                                </div>
                            </div>
                            <div className="py-2 px-3 h-auto w-full lg:w-[45vh] bg-gray-50 border rounded-md shadow-sm">
                                <h3 className="font-medium text-gray-800 text-[13px]">
                                    Cafe A100 for Woodland Bank
                                </h3>
                                <p className="text-[10px] text-gray-500 mt-1">
                                    Woodland Bank . $280,000. 8 days to close
                                </p>
                                <div className='flex justify-between items-center w-full mt-2'>
                                    <div className="text-gray-600 w-full lg:w-[44vh] p-1 border rounded-md text-[11px] font-semibold bg-gray-200">
                                        Review draft and reply to Chris Nadio
                                    </div>
                                    <div className='w-[15px] h-[15px]'>
                                        <Sparkles />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UserTable />
            
        </Layout >
    );
};

export default Dashboard;
