import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center"> BMI Calculator </h1>
        <div className="flex flex-row items-center space-x-4">
          <Link href="/blog">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Blog
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              About
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
