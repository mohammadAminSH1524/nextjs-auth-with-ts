import ThemeButton from "@/components/ThemeButton";
import Image from "next/image";

export default function Home() {
  return (
    <main className="text-primaryText">
      hello
      <div className="text-red-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, nesciunt!
      </div>
      <ThemeButton />
    </main>
  );
}
