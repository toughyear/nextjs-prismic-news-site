import { AiOutlineBell, AiOutlineUser } from "react-icons/ai";
import { GiAstronautHelmet } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <div className="px-2 md:px-24 bg-black text-white flex justify-between h-16">
        <Link href="/">
          <a className="text-white uppercase text-2xl flex align-baseline px-10 my-auto">
            <GiAstronautHelmet className="inline text-4xl mr-4" /> Channel 21
          </a>
        </Link>

        <div className="flex items-center w-1/3 text-lg">
          <input
            type="text"
            className="bg-transparent border-b w-full border-white outline-none"
          />
          <FiSearch className="-ml-8 text-2xl hover:text-red-600 cursor-pointer" />
        </div>

        <div className="flex items-center text-2xl">
          <AiOutlineBell className="mr-2 cursor-pointer hover:text-red-600" />
          <AiOutlineUser className="mr-2 cursor-pointer hover:text-red-600" />
        </div>
      </div>

      <div className="px-2 md:px-24 bg-white flex border-b border-black">
        <Link href="/">
          <a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Home
          </a>
        </Link>
        <Link href="/politics">
          <a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Politics
          </a>
        </Link>
        <Link href="/business">
          <a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Business
          </a>
        </Link>
        <Link href="/sports">
          <a className="mr-10 text-xl mt-5 px-5 border-b-2 border-transparent hover:border-black">
            Sports
          </a>
        </Link>
      </div>
      {children}
      <div className="bg-black text-white text-xl py-10 px-24 flex flex-col">
        <div>
          <Link href="/">
            <a className="text-white uppercase text-2xl flex align-baseline px-10 my-auto">
              <GiAstronautHelmet className="inline text-4xl mr-4" /> Channel 21
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-5 mt-10 max-w-3xl">
          <h1>Careers</h1>
          <h1>About Us</h1>
          <h1>API</h1>
          <h1>Media</h1>
          <h1>Contact Us</h1>
          <h1>Privacy Policy</h1>
          <h1>Partners</h1>
          <h1>Vision</h1>
          <h1>Project VisQ</h1>
        </div>

        <div className="my-10 text-sm max-w-2xl">
          Channel 21 is a open-media intiative by Xmedia Gcorp, US ® and is
          registered as not for profit organization. All rights reserved. &copy;
          &nbsp; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
}
