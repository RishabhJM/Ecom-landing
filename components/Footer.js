import { FOOTER_LINKS } from "@/constants/constants";
import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

export default function Footer() {
  return (
    <div className="w-screen h-full bg-black text-white flex justify-between p-20 pb-16">
      <div>
        <Image
          src="/blue-dot.png"
          width={40}
          height={40}
          alt="logo of company"
        ></Image>
        <div className="flex gap-4 my-6">
          {FOOTER_LINKS.map((item) => (
            <Link href={item.href}>{item.label}</Link>
          ))}
        </div>
      <div>© 2021 Marks Designed. All rights reserved</div>
      </div>
      <div>
        <Socials></Socials>
      </div>
    </div>
  );
}
