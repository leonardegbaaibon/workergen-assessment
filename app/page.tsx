import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
import Dashboard from "./dashboard/pages";
import { ModalProvider } from "@/context/ModalContext";

export default function Home() {
  return (
    <ModalProvider>
      <Dashboard />
    </ModalProvider>
  );
}
