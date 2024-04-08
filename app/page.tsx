import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center p-24">
      <Link href='/admin/dashboard'>
        <Button className="px-16 py-10 font-semibold text-2xl " variant='outline'>
          Go to Admin Dashboard
        </Button>
      </Link>
    </main>
  );
}
