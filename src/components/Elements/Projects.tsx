const Projects = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 md:mb-24">
      <div className="py-5 sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <ul className="group/list">
        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 sm:grid-cols-8 sm:gap-8">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  href="https://web-dev-eku6icmjxq-et.a.run.app/"
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                  target="_blank"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>Eproc</span>
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal text-slate-400">
                This project aims to develop an electronic system for the
                procurement of goods and services, making the process more
                efficient and transparent. Utilizing backend technologies such
                as Node.js, TypeScript, and Vue.js.
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
                    VueJs
                  </div>
                </li>
              </ul>
            </div>
            <img
              alt="Build a eproc"
              src="projects/project1.png"
              width="200"
              height="48"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 mt-2 sm:order-1 sm:col-span-2 sm:translate-y-1"
            />
          </div>
        </li>

        <li className="mb-12">
          <div className="group relative grid gap-4 pb-1 sm:grid-cols-8 sm:gap-8">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <a
                  href="https://kembangsetaman13.vercel.app/"
                  className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                  target="_blank"
                >
                  <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                  <span>Product Showcase App</span>
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal text-slate-400">
                The Product Showcase App is a specialized e-commerce platform
                designed to display a curated selection of products and redirect
                users to external e-commerce sites for purchases. The app is
                built with a dual-interface system featuring a guest and admin
                panel.
              </p>
              <ul className="mt-2 flex flex-wrap">
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    NextJS
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    TypeScript
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    Laravel
                  </div>
                </li>
                <li className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    Mysql
                  </div>
                </li>
              </ul>
            </div>
            <img
              alt="Build a eproc"
              src="projects/project2.png"
              width="200"
              height="48"
              className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 mt-2 sm:order-1 sm:col-span-2 sm:translate-y-1"
            />
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Projects
