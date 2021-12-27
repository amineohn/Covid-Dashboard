import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";
import Loading from "../components/Loading";
import fetcher from "../libs/fetcher";
import { Example } from "../libs/types";
import FadeIn from "react-fade-in";
const Home: NextPage = () => {
  const { data } = useSWR<Example>(`/api/example`, fetcher);
  return (
    <>
      <FadeIn className="flex flex-col justify-center px-8 my-20 overflow-hidden">
        <div className="flex flex-col items-start justify-center max-w-2xl mx-auto mb-16 dark:text-white">
          <div className="flex-col items-center">
            <h1 className="pb-2 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-coolGray-900 to-warmGray-600 dark:bg-gradient-to-bl dark:from-gray-50 dark:to-gray-100">
              Template NextJS
            </h1>
            <div className="mb-8">
              <p className="mb-4 bg-clip-text bg-gradient-to-tl from-gray-700 via-gray-900 to-black dark:bg-gradient-to-tl dark:from-gray-50 dark:via-gray-100 dark:to-white">
                Simple template with NextJS, Tailwind, React ALPHA 18,
                TypeScript
              </p>
            </div>
            <div className="w-full overflow-hidden metric-card max-w-72 bg-gray-100 dark:bg-white bg-opacity-50 dark:bg-opacity-20 rounded-2xl p-4">
              <div className="flex items-center font-bold text-gray-900 dark:text-gray-100">
                API Hello
              </div>
              <p className="mt-2 text-sm font-medium text-gray-800 spacing-sm dark:text-white">
                {data ? (
                  <FadeIn>{data?.name}</FadeIn>
                ) : (
                  <>
                    <Loading />
                  </>
                )}
              </p>
            </div>
            <div className="flex flex-col w-full overflow-y-scroll space-y-2">
              <div className="grid w-full grid-cols-1 gap-4 my-2 sm:grid-cols-2">
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full overflow-hidden transition transform metric-card max-w-72 hover:scale-95 bg-gray-100 dark:bg-white bg-opacity-50 dark:bg-opacity-20 rounded-2xl p-4">
                    <div className="flex items-center font-bold text-gray-900 dark:text-gray-100">
                      NextJS
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-800 spacing-sm dark:text-white">
                      Next.js gives you the best developer experience with all
                      the features you need for production: hybrid static &
                      server rendering, TypeScript support, smart bundling,
                      route pre-fetching, and more. No config needed.
                    </p>
                    <div className="flex justify-end space-y-2">
                      <span className="text-xs font-medium">12.0.7 Stable</span>
                    </div>
                  </div>
                </a>

                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full overflow-hidden transition transform metric-card max-w-72 hover:scale-95 bg-gray-100 dark:bg-white bg-opacity-50 dark:bg-opacity-20 rounded-2xl p-4">
                    <div className="flex items-center font-bold text-gray-900 dark:text-gray-100">
                      Tailwind
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-800 spacing-sm dark:text-white">
                      A utility-first CSS framework packed with classes like
                      <code className="bg-purple-500 bg-opacity-50 font-sm text-white rounded-xl p-1 ml-0.5">
                        flex, pt-4, text-center
                      </code>
                      and <br />
                      that can be composed to build any design, directly in your
                      markup.
                      <div className="flex justify-end space-y-2">
                        <span className="text-xs font-medium">
                          2.2.19 Stable (3.0 is in Alpha)
                        </span>
                      </div>
                    </p>
                  </div>
                </a>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full overflow-hidden transition transform metric-card max-w-72 hover:scale-95 bg-gray-100 dark:bg-white bg-opacity-50 dark:bg-opacity-20 rounded-2xl p-4">
                    <div className="flex items-center font-bold text-gray-900 dark:text-gray-100">
                      React
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-800 spacing-sm dark:text-white">
                      A JavaScript library for building user interfaces
                    </p>
                    <div className="flex justify-end space-y-2">
                      <span className="text-xs font-medium">18.x Beta</span>
                    </div>
                  </div>
                </a>
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="w-full overflow-hidden transition transform metric-card max-w-72 hover:scale-95 bg-gray-100 dark:bg-white bg-opacity-50 dark:bg-opacity-20 rounded-2xl p-4">
                    <div className="flex items-center font-bold text-gray-900 dark:text-gray-100">
                      TypeScript
                    </div>
                    <p className="mt-2 text-sm font-medium text-gray-800 spacing-sm dark:text-white">
                      TypeScript is a strongly typed programming language that
                      builds on JavaScript, giving you better tooling at any
                      scale.
                    </p>
                    <div className="flex justify-end space-y-2">
                      <span className="text-xs font-medium">4.5.2 Stable</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full overflow-hidden metric-card max-w-72 bg-gray-100 dark:bg-white bg-opacity-50 dark:bg-opacity-20 rounded-2xl p-4">
              <div className="flex items-center font-bold text-gray-900 dark:text-gray-100">
                Any issue?
              </div>
              <p className="mt-2 text-sm font-medium text-gray-800 spacing-sm dark:text-white">
                <div className="space-y-2 inline ">
                  Please report issue on Github.
                  <br />
                  <button className="bg-white transition bg-opacity-10 hover:bg-opacity-20 p-2 rounded-lg">
                    <a
                      href="https://github.com/amineohn/next-template/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Here
                    </a>
                  </button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default Home;
