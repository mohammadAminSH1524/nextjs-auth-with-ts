import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between bg-primaryBg
     sticky top-0 border-b border-b-primaryText px-4 py-2 mb-4">
      <nav className="w-full">
        <ul className="flex w-full justify-center items-center gap-x-8">
          <li className="text-primaryText text-2xl ">
            <Link href="/login">login</Link>
          </li>
          <li className="text-primaryText text-2xl ">
            <Link href="/profile">profile</Link>
          </li>
          <li className="text-primaryText text-2xl ">
            <Link href="/signup">signup</Link>
          </li>
        </ul>
      </nav>
      <div>
        <ThemeButton />
      </div>
    </div>
  );
}
