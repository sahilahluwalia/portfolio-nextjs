import React from "react";
import { socialMediaLink } from "@/app/contants";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex  justify-center p-5 bg-white h-screen text-black">
      <div className="w-[670px]">
        <nav>
          <a
            className="hover:bg-gray-200 text-xl font-bold   p-2 rounded-sm -ml-2 transition-[background-color]"
            href="/"
          >
            Sahil Ahluwalia
          </a>
        </nav>
        {children}
        <footer className="p-6 pt-3 pb-6 flex text-xs text-center mt-3 dark:text-gray-400 text-gray-500 font-mono">
          <div className="grow text-left">
            Sahil Ahluwalia (
            <a
              className="border-b text-gray-600 border-gray-300 transition-[border-color] hover:border-gray-600 "
              target="_blank"
              href={socialMediaLink.twitter}
            >
              @sahillovescode
            </a>
            )
          </div>
          <div>
            <a
              className="border-b text-gray-600 border-gray-300 transition-[border-color] hover:border-gray-600 "
              target="_blank"
              href={socialMediaLink.sourceCode}
            >
              Source
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Layout;
