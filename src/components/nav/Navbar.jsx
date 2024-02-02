import React from "react";
import { LogoCat } from "../cat";

function Navbar() {
  return (
    <ul className="float left-0 text-white p-6 text-xl justify-start flex">
      <li className="flex">
        <LogoCat size={55} />
      </li>
    </ul>
  );
}

export default Navbar;
