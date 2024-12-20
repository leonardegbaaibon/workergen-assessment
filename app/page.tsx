import Dashboard from "./dashboard/pages";
import { ModalProvider } from "@/context/ModalContext";

export default function Home() {
  return (
    <ModalProvider>
      <Dashboard />
    </ModalProvider>
  );
}
