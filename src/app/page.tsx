import Image from 'next/image';
import webstorepic from './chromewebstore.png';

export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center justify-center gap-12 ">
        <div>
          <h1 className="mb-8 mt-24 text-center text-6xl font-bold tracking-tighter">
            Save URL to Todoist
          </h1>
          <p className="text-center text-xl">
            A simple browser extension for easily saving URLs to Todoist
          </p>
        </div>
        <div className="w-4/12">
          <a
            className="block w-full rounded-full bg-red-500 py-3 text-center text-lg text-white hover:bg-red-600"
            href="https://github.com/ryanarnold/todoist-save-url-extension"
            target="_blank"
          >
            Download Chrome Extension
          </a>
        </div>
        <div className="mb-20 text-center text-lg ">
          Fork this in{' '}
          <a
            href="https://github.com/ryanarnold/todoist-save-url-site"
            className="underline"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
