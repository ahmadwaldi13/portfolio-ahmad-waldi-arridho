import React from 'react'

const Experiance = () => {
  return (
    <section id="experiance" className="mb-16 scroll-mt-16 md:mb-24">
      <div className="py-5 sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          <li className="mb-12">
            <div className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header className="text-xs tracking-wide font-semibold uppercase text-slate-500 mt-1 mb-2 sm:col-span-2">
                Aug - Dec 2023
              </header>
              <div className="z-10 sm:col-span-6">
                <h3>
                  <div className="text-slate-200">
                    <a
                      href="https://gits.id"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      target="_blank"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>Software Engineer . Gits Indonesia</span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">
                  I am currently interning at PT Gist Indonesia as a Software
                  Engineer. During this internship, I have had the opportunity
                  to develop my technical skills in software development,
                  particularly in backend technologies. I collaborate with an
                  experienced team to deliver innovative and efficient software
                  solutions.
                </p>
                <ul className="mt-2 flex flex-wrap">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      PostgreSQL
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      TypeScript
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      AdonisJS
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      Redis
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      NodeJS
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
              <header className="text-xs tracking-wide font-semibold uppercase text-slate-500 mt-1 mb-2 sm:col-span-2">
                Aug - Dec 2022
              </header>
              <div className="z-10 sm:col-span-6">
                <h3>
                  <div className="text-slate-200">
                    <a
                      href="https://www.hacktiv8.com"
                      className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                      target="_blank"
                    >
                      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                      <span>Backend Developer . Hacktiv8</span>
                    </a>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-slate-400">
                  I am currently interning a as a Backend Engineer. During this
                  internship, I have had the opportunity to develop my technical
                  skills in software development, particularly in backend
                  technologies.
                </p>
                <ul className="mt-2 flex flex-wrap">
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      PostgreSQL
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      Javascript
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                      NodeJS
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default Experiance
