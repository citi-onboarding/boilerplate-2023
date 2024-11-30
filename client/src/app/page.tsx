import Image from "next/image";
import EnterMatchButton from "@/components/button";

import { LogoCITi } from "../assets";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col h-full justify-center items-center bg-white">
      <div>
        <Image src={LogoCITi} alt="Logo citi" />
      </div>
      <EnterMatchButton matchStatus="inMatch" />
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-black text-4xl font-bold">NextJS Boilerplate</h1>
        <p className="text-black text-xl">
          Made with <strong>&lt; &#x0002F; &gt;</strong> and{" "}
          <strong>&hearts;</strong> by CITi
        </p>
      </div>
    </div>
  );
}
