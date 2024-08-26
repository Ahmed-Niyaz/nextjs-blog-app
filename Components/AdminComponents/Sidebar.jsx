import { assets } from "@/Assests/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col bg-slate-100">
      <div className="px-2 sm:pl-14 py-3">
        <Image src={assets.blog} height={30} width={30} alt="logo" />
      </div>
      <div className="w-28 sm:w-80 h-[100vh] relative py-12 ">
        <div className="w-[50%] sm:w-[80%] absolute right-10 md:text-md">
          <Link href='/admin/addProduct' className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.add_icon} alt="add-blog" width={28} />
            <p className="md:block hidden">Add blogs</p>
          </Link>
          <Link href='/admin/blogList' className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.blog_icon} alt="add-blog" width={28} />
            <p className="md:block hidden">Blog List</p>
          </Link>
          <Link href='/admin/subscriptions' className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.email_icon} alt="add-blog" width={28} />
            <p className="md:block hidden">Subscription</p>
          </Link>

          <Link href='/' className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
            <Image src={assets.home_icon} alt="add-blog" width={28} />
            <p className="md:block hidden">Home</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
