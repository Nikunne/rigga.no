'use client';
import Image from "next/image";


import { useRouter } from 'next/navigation';
import {router} from "next/dist/client";



export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <p>Dette er litt sånn tekst not gonna lie</p>
      <button type="button" onClick={() => router.back()}>
          Gå tilbake, ingenting her
      </button>
    </div>
  );
}
