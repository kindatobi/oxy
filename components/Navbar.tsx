import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Moon } from "@phosphor-icons/react/dist/ssr";

export default function Navbar() {
  return (
    <nav className="flex p-4 items-center justify-between">
      {/* LEFT */}
      collapse btn
      {/* RIGHT */}
      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>
        <Moon size={32} />
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
}
