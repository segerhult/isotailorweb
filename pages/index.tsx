import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      <main className="flex flex-col items-center justify-center py-2 text-gray-900">
        <p className="text-center font-sans text-xl">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">pages/_app.tsx</code>
        </p>
        <div className="mt-auto mb-4">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className="logo">
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </div>
      </main>
    </div>
  );
}