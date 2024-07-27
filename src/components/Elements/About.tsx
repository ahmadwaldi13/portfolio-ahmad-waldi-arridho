import React from 'react'

const About = () => {
  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
    >
      <div className="py-5 sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 backdrop-blur lg:sr-only lg:relative lg:top-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>
      <div>
        <p className="mb-4 text-slate-400 leading-normal">
          With over two years of professional experience, I am a dedicated and
          experienced software engineer specializing in backend development. My
          proficiency in Node.js and PHP allows me to create robust and
          efficient server-side applications, ensuring that they meet the
          highest standards of performance and reliability. I am passionate
          about designing and implementing scalable backend solutions that can
          handle a high volume of transactions and data processing, making me
          adept at solving complex technical challenges.
        </p>
        <p className="mb-4 text-slate-400 leading-normal">
          In addition to my backend expertise, I possess strong capabilities in
          frontend development using React.js. This dual skill set enables me to
          develop interactive and user-friendly interfaces that enhance the
          overall user experience. By combining my knowledge of frontend and
          backend technologies, I am able to build seamless and cohesive web
          applications that are both functional and visually appealing. My
          experience in React.js allows me to efficiently translate design
          mockups into high-quality code, ensuring that the final product is not
          only aesthetically pleasing but also highly responsive.
        </p>
        <p className="text-slate-400 leading-normal">
          Throughout my career, I have demonstrated a commitment to continuous
          learning and professional growth. I stay updated with the latest
          industry trends and advancements in technology, which enables me to
          incorporate modern practices into my work. My strong problem-solving
          skills, attention to detail, and ability to collaborate effectively
          with cross-functional teams have consistently contributed to the
          successful delivery of projects. As a software engineer, I am
          dedicated to achieving excellence in every aspect of my work and
          strive to exceed client and employer expectations.
        </p>
      </div>
    </section>
  )
}

export default About
