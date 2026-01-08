'use client';

import { useRouter } from 'next/navigation';

function BackButton() {
  const router = useRouter();

  return (
    <button className="border-2 border-amber-950" type="button" onClick={() => router.back()}>
      Kanskje vi kan dra tilbake?
    </button>
  );
}

export default BackButton;