'use client';

import { useRouter } from 'next/navigation';

function BackButton() {
  const router = useRouter();

  return (
    <button className="px-4 py-2 border-2 bg-black border-amber-950 cursor-pointer"
          type="button" onClick={() => router.back()}>
      Kanskje vi kan dra tilbake?
    </button>
  );
}

export default BackButton;