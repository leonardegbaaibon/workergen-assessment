// components/Layout.tsx
import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ModalProvider } from "@/context/ModalContext";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        // <ModalProvider>
            <div className="flex">
                <Header />
                <Sidebar />
                <div className="flex-1">
                    <main className="p-4 mt-5 overflow-y-auto lg:ml-[40vh]">{children}</main>
                </div>
            </div>
        // </ModalProvider>
    );
};

export default Layout;
