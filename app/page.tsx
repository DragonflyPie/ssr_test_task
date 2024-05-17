import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import Search from "./_components/Search";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="flex flex-col pt-[25vh]">
        <Search />
      </div>
    </main>
  );
}
