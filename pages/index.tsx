import Image from "next/image";
import { inter } from "@/fonts";
import Header from "@/components/sections/header";
import Organizations from "@/components/sections/Organizations";

export default function Home() {
  return (
    <main>
      <Header />
      <Organizations />
    </main>
  );
}
