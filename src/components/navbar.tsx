"use client";

import React from "react";
import Link from "next/link";

function Navbar() {
  const [selected, setSelected] = React.useState("Home");

  return (
    <div className="nav">
      <div className="items-center rounded-full box-border text-zinc-400 font-light h-14 justify-center fixed select-none w-fit flex bg-neutral-900 min-[690px]:mt-8">
        <div className="nav-links">
          <Link
            href={"#home"}
            replace={true}
            onClick={() => setSelected("Home")}
            className="nav-links-item "
          >
            Home
          </Link>
          <Link
            href={"#about"}
            replace={true}
            onClick={() => setSelected("About")}
            className="nav-links-item "
          >
            About
          </Link>
          <Link
            href={"#work"}
            replace={true}
            onClick={() => setSelected("Work")}
            className="nav-links-item "
          >
            Work
          </Link>
          <Link
            href={"#writings"}
            replace={true}
            onClick={() => setSelected("Writings")}
            className="nav-links-item "
          >
            Writings
          </Link>
          <div className={`nav-slider ${selected}`}></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
