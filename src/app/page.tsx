import Image from 'next/image';
import webstorepic from './chromewebstore.png';

export default function Home() {
  return (
    <main>
      <div className="flex justify-center flex-col items-center gap-12 ">
        <div>
          <h1 className="text-6xl text-center font-bold mt-24 tracking-tighter mb-8">
            Save URL to Todoist
          </h1>
          <p className="text-center text-xl">
            A simple browser extension for easily saving URLs to Todoist
          </p>
        </div>
        <div className="w-4/12">
          <a
            className="py-3 w-full rounded-full text-white bg-red-500 hover:bg-red-600 block text-center text-lg"
            href="https://github.com/ryanarnold/todoist-save-url-extension"
            target="_blank"
          >
            Download Chrome Extension
          </a>
        </div>
        <div className="mb-20 text-center text-lg ">
          Fork this in{' '}
          <a href="https://github.com/ryanarnold/todoist-save-url-extension" className="underline">
            GitHub
          </a>
        </div>
      </div>
    </main>
  );
}
