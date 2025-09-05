import { Metadata } from "next";
import MainContent from "./ui/components/MainContent";

export const metadata: Metadata = {
  title: "NovaCorporation | Inicio",
  description: "Pagina Inicio de NovaCorporation",
};

export default function Home() {
  return (
    <MainContent />
  );
}
