import { Header } from "../app/pages/header"

export default function Home() {
  return (
    <div className="main">
      <Header />
      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32">
          <div className="hidden sm:mb-4 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 ring-1 ring-blue-900/10 hover:ring-blue-900/20">
              Hello, My name is
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Mansi Mahant</h1>
            <p className="mt-4 text-lg leading-8">Full Stack Developer</p>
            <p className="mt-4 text-sm leading-8">As a full stack developer, I bring a passion for problem-solving and a keen eye for detail to every project. With a solid foundation in both front-end and back-end technologies, I thrive in dynamic environments where I can leverage my diverse skill set to create seamless, intuitive user experiences. Whether it&apos;s crafting pixel-perfect interfaces or architecting robust server-side solutions, I&apos;m dedicated to delivering high-quality, scalable software that meets the needs of users and stakeholders alike.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Download Resume</a>
              <a href="#" className="text-sm font-semibold leading-6">Learn more about me <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
