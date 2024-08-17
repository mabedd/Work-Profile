import dynamic from "next/dynamic";

import { Welcome, Grid } from "@/components/index";

export default function Home() {
  return (
    <>
      <Welcome />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="relative w-full flex justify-center">
          <div className="max-w-7xl w-full">{/* <Grid /> */}</div>
        </div>
      </main>
    </>
  );
}
