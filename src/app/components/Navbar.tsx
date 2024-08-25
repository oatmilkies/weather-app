/** @format */

import React from "react";
import IconBxsSun from "./IconBxsSun";
import IconLocationCrosshairs from "./IconLocationCrosshairs";
import IconLocationDot from "./IconLocationDot";
import Searchbox from "./SearchBox";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather</h2>
          <IconBxsSun className="text-3xl mt-1" />
        </div>

        {/* Location information */}
        <section className="flex gap-2 items-center">
          <IconLocationCrosshairs className="text-2xl hover:opacity-80 cursor-pointer" />
          <IconLocationDot className="text-2xl" />
          <p className="text-slate-900/80 text-sm"> Location </p>

          {/* Search box */}
          <div>
            <Searchbox />
          </div>
        </section>
      </div>
    </nav>
  );
}
