import { Header } from "../app/pages/header"

export default function Home() {
  return (
    <div className="main">
      <Header />
      <section className="banner-section">
        <div className="relative isolate px-6 lg:px-8">
          <div className="mx-auto max-w-6xl py-20 flex flex-col sm:flex-row items-center justify-center">
            <div className="sm:w-1/2 sm:pl-4">
              <div className="sm:mb-4 sm:flex text-center sm:text-left">
                <div className="animate-fade-right relative rounded-full text-sm leading-6">
                  Hello, My name is
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h1 className="animate-fade-right text-4xl font-bold tracking-tight sm:text-6xl">Mansi Mahant</h1>
                <p className="animate-fade-right mt-4 text-lg leading-8">Full Stack Developer</p>
                <p className="animate-fade-right mt-4 text-sm leading-8">As a full stack developer, I bring a passion for problem-solving and a keen eye for detail to every project. With a solid foundation in both front-end and back-end technologies, I thrive in dynamic environments where I can leverage my diverse skill set to create seamless, intuitive user experiences. Whether it's crafting pixel-perfect interfaces or architecting robust server-side solutions, I'm dedicated to delivering high-quality, scalable software that meets the needs of users and stakeholders alike.</p>
                <div className="mt-10 flex items-center justify-center sm:justify-start gap-x-6">
                  <a href="/resume/Mansi-Resume.pdf" target="_blank" className="animate-jump-in transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Download Resume</a>
                  <a href="#" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 text-sm font-semibold leading-6">Learn more about me <span aria-hidden="true">→</span></a>
                </div>
              </div>
            </div>
            <div className="sm:w-1/2 mt-8 sm:mt-0 flex justify-center">
              <img src="/banner/mansi.png" alt="Your Image" className="animate-fade-left max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="text-center sm:text-center">
          <h1 className="animate-fade-down text-3xl font-bold tracking-tight sm:text-5xl">My Experience</h1>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
          <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
            <p className="animate-fade-right text-cyan-300 uppercase tracking-loose">My Experience Journey</p>
            <p className="animate-fade-right text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Navigating the World of Information Technology</p>
            <p className="animate-fade-right text-sm md:text-base mb-4">
              As I reflect on my journey through the tech fest process, I am reminded of the endless possibilities that lie ahead. With each challenge conquered and each solution implemented, I am not just shaping my career but also contributing to the advancement of technology on a global scale.
            </p>
          </div>
          <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
            <div className="container mx-auto w-full h-full">
              <div className="relative wrap overflow-hidden h-full">
                <div
                  className="absolute h-full"
                  style={{
                    right: '50%',
                    border: '2px solid #9733FF',
                    borderRadius: '1%'
                  }}
                ></div>
                <div
                  className=" absolute h-full"
                  style={{
                    left: '50%',
                    border: '2px solid #9733FF',
                    borderRadius: '1%'
                  }}
                ></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="animate-fade-right order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-cyan-300">Jan 2022 - May 2022</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Web Developer Intern</h4>
                    <h5 className="mb-3 text-base text-cyan-300">It Idol Technologies - Valsad</h5>
                    <p className="text-sm md:text-base">
                      Worked with different frameworks like Laravel
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="animate-fade-left order-1 w-5/12 px-1 py-4 text-left">
                    <p className="mb-3 text-base text-cyan-300">Nov 2022 - Sep 2023</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Web Developer Laravel</h4>
                    <h5 className="mb-3 text-base text-cyan-300">RnD Technosoft - Vapi</h5>
                    <p className="text-sm md:text-base leading-snug">
                      Developed and integrated payment processing features onto eCommerce websites
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                  <div className="order-1 w-5/12"></div>
                  <div className="animate-fade-right order-1 w-5/12 px-1 py-4 text-right">
                    <p className="mb-3 text-base text-cyan-300">Oct 2023 - Current</p>
                    <h4 className="mb-3 font-bold text-lg md:text-2xl">Full Stack Developer</h4>
                    <h5 className="mb-3 text-base text-cyan-300">Xira Infotech - Vapi</h5>
                    <p className="text-sm md:text-base ">
                      Designed and developed user-friendly interfaces using React.js, ensuring responsiveness and optimal
                      user experience across devices and browsers
                    </p>
                  </div>
                </div>
              </div>
              <img className="animate-flip-up mx-auto -mt-42 md:-mt-42 h-96 w-96" src="/experience/experience.png" />
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center sm:text-center">
            <h1 className="animate-fade-down text-3xl font-bold tracking-tight sm:text-5xl">My Skills</h1>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mt-20 mb-20">
            <div className="animate-shake p-4 text-center"><img src="/skills/css-3.png" alt="" /></div>
            <div className="animate-shake p-4 text-center"><img src="/skills/github.png" alt="" /></div>
            <div className="animate-shake p-4 text-center"><img src="/skills/html.png" alt="" /></div>
            <div className="animate-shake p-4 text-center"><img src="/skills/js.png" alt="" /></div>
            <div className="animate-shake p-4 text-center"><img src="/skills/python.png" alt="" /></div>
            <div className="animate-shake p-4 text-center"><img src="/skills/atom.png" alt="" /></div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="text-center sm:text-center">
          <h1 className="animate-fade-down text-3xl font-bold tracking-tight sm:text-5xl">My Projects</h1>
        </div>
        <div className="flex justify-center flex-wrap gap-6 mt-20">
          <div className="animate-fade-down max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://s10eventmakers.com/index">
              <img className="rounded-t-lg" src="/projects/project1.png" alt="" />
            </a>
            <div className="p-5">
              <a href="https://s10eventmakers.com/index">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">S10 Event Makers</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">S10 Event Makers is a bespoke wedding design company that plans and produces exclusive weddings and events across India.</p>
              <a href="https://s10eventmakers.com/index" target="_blank" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800">
                Visit Site
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
          <div className="animate-fade-down max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://market.cliniify.com/">
              <img className="rounded-t-lg" src="/projects/project3.png" alt="" />
            </a>
            <div className="p-5">
              <a href="https://market.cliniify.com/">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Cliniify Marketplace</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Find doctors in every field. Experienced eye doctors provide comprehensive care and treatments.</p>
              <a href="https://market.cliniify.com/" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800">
                Visit Site
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
          <div className="animate-fade-down max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="https://www.shahfiresafety.in/">
              <img className="rounded-t-lg" src="/projects/project2.png" alt="" />
            </a>
            <div className="p-5">
              <a href="https://www.shahfiresafety.in/">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Shah Fire & Safety</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">SHAH INDUSTRIAL PRODUCTS established with the strong brand name SHAH FIRE SAFETY is the Engineering Company.</p>
              <a href="https://www.shahfiresafety.in/" target="_blank" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800">
                Visit Site
                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section mt-20" id="projects">
        <div className="w-full bg-gray-800 h-screen">
          <div className="bg-gradient-to-b from-blue-400 to-blue-600 h-96"></div>
          <div className="animate-fade-down max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
            <div className="bg-gray-900 w-full shadow rounded p-8 sm:p-12 -mt-72">
              <p className="text-3xl font-bold leading-7 text-center text-white">Contact me</p>
              <form action="" method="post">
                <div className="md:flex items-center mt-12">
                  <div className="w-full md:w-1/2 flex flex-col">
                    <label className="font-semibold leading-none text-gray-300">Name</label>
                    <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                  </div>
                  <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                    <label className="font-semibold leading-none text-gray-300">Phone</label>
                    <input type="email" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                  </div>
                </div>
                <div className="md:flex items-center mt-8">
                  <div className="w-full flex flex-col">
                    <label className="font-semibold leading-none text-gray-300">Subject</label>
                    <input type="text" className="leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                  </div>
                </div>
                <div>
                  <div className="w-full flex flex-col mt-8">
                    <label className="font-semibold leading-none text-gray-300">Message</label>
                    <textarea className="h-40 text-base leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                  </div>
                </div>
                <div className="flex items-center justify-center w-full">
                  <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="footer-section mt-0 sm:mt-28" id="contact">
        <div className="w-full min-h-screen flex items-center justify-center">
          <div className="md:w-2/3 w-full px-4 flex flex-col">
            <div className="w-full text-6xl font-bold">
              <h1 className="animate-fade-right w-full md:w-2/3">How can i help you. get
                in touch</h1>
            </div>
            <div className="flex mt-8 flex-col md:flex-row md:justify-between">
              <p className="animate-fade-down w-full md:w-2/3">To ensure that all Wikipedia content is verifiable, anyone may question an uncited claim. If your work has been tagged</p>
            </div>
            <div className="flex flex-col">
              <div className="flex mt-24 mb-6 flex-row justify-between">
                <a href="#" className="animate-fade-down hidden md:block cursor-pointer uppercase">About Me</a>
                <a href="#experience" className="animate-fade-down hidden md:block cursor-pointer uppercase">Experience</a>
                <a href="#projects" className="animate-fade-down hidden md:block cursor-pointer uppercase">Projects</a>
                <a href="#contact" className="animate-fade-down hidden md:block cursor-pointer uppercase">Contact Me</a>
              </div>
              <hr className="border-gray-600" />
              <p className="animate-fade-left w-full text-center my-5 text-gray-600">Copyright © 2024. Designed & Developed by Mansi Mahant :)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
