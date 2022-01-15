import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black h-full px-4">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full grid place-items-center text-white text-center">
        <div className="space-y-3">
          <p className="text-3xl font-bold">Nextjs + Tailwind Starter</p>
          <p className="text-xl font-bold">W/ my favorite configs -Matt</p>
          <div>
            <p>To update:</p>
            <button
              onClick={() => {
                navigator.clipboard.writeText(
                  "npm install -D tailwindcss@latest postcss@latest autoprefixer@latest"
                );
              }}
              className="bg-zinc-800 rounded text-gray-400 p-1 sm:p-2 flex items-center space-x-2"
            >
              <span>
                npm install -D tailwindcss@latest postcss@latest
                autoprefixer@latest
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
