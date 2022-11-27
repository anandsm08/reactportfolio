import Head from "next/head";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsMoonStarsFill } from "react-icons/bs";
import {
  AiFillBehanceCircle,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillCode,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import Image from "next/image";
import hero from "../public/yoo.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Anand&apos;s Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/icon_1.png" />
      </Head>

      <main className=" dark:bg-gradient-to-b from-dark1 to-dark6">
        <section className="min-h-screen min-w-0 bg-gradient-to-b from-sky-50 to-sky-100 dark:bg-none ">
          <nav className="py-5 mb-10 flex justify-between dark:text-dark4 ">
            <h1 className=" text-lg ml-20 font-akira ">AM</h1>
            <ul className="  flex  mr-5 items-center ">
              <li className="ml-4   text-md ">
                <AnchorLink href="#projects">Work</AnchorLink>
              </li>
              <li className=" ml-4 text-md ">
                <a href="#">Resume</a>
              </li>

              <li className="ml-4 mr-4">
                <BsMoonStarsFill
                  className="cursor-pointer"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
            </ul>
          </nav>

          <div className=" relative mx-auto  mt-44 py-20 h-80 w-80 justify-center">
            <Image
              src={hero}
              alt=""
              className="bg-gradient-to-b from-teal-300  to-gray-100 rounded-full "
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className=" pt-10 py-10 px-20 text-center ">
            <h2 className="font-bold text-4xl font-mono text-teal-600 mt-10 dark:text-teal-300">
              Anand Menon
            </h2>
            <h3 className="font-semibold text-2xl dark:text-light ">
              {" "}
              Learning Enthusiast | Budding Flutter Developer{" "}
            </h3>

            <p className=" font-medium text-lg text-slate-500 dark:text-dark4">
              {" "}
              Connect me down and let&apos;s tinker around.{" "}
            </p>
          </div>

          <div className=" flex  justify-center ml-10 mr-10  gap-4 text-4xl dark:text-zinc-300 ">
            <a href="https://linkedin.com/in/anandsm08">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/anandsm08">
              <AiFillGithub />
            </a>
            <a href="mailto:codinand@gmail.com">
              <AiFillMail />
            </a>
            <a href="https://discordapp.com/users/264769172104413196">
              <FaDiscord />
            </a>
          </div>
        </section>

        <section
          class="about-me"
          className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-200 dark:bg-none"
        >
          <div className="">
            <div className="flex justify-between">
              <div className="mx-10 justify-center dark:text-dark4">
                <h2 className="text-4xl font-mono py-10 px-28 dark:text-light">
                  Who am I?
                </h2>
                <p className="text-xl font-medium  px-32">
                  Namaste! Myself Anand Menon{" "}
                </p>
                <p className="text-xl font-medium ml-32">
                  I&apos;ve been learning, tinkering and exploring various
                  fields and would love to help the community by my
                  contributions someday!.Also a HAM Radio Operator.{" "}
                </p>
                <p className="text-xl font-medium ml-32">
                  Working on Flutter/Dart, Kotlin,C/C++. Currently learning
                  Javascript,ReactJS,TailwindCSS to boost my development skills.{" "}
                </p>
              </div>
            </div>
            <div className=" font-mono py-10 px-28 ml-10 text-gray-800 font-semibold ">
              <h2 className="text-2xl py-8 dark:text-light">When and Where</h2>
              <h3 className="text-xl underline dark:text-emerald-200 ">
                2020-2024
              </h3>
              <ul className="text-xl ml-10 py-2 list-disc dark:text-dark4">
                <li>
                  Currently a Student at{" "}
                  <a href="https://www.pce.ac.in" rel="noreferer">
                    <strong>
                      Pillai College of Engineerring(PCE),Navi Mumbai.
                    </strong>
                  </a>
                </li>
                <li>Tech at Google Developers Student Clubs,PCE (2022-23). </li>
              </ul>
              <h3 className="text-xl underline dark:text-emerald-200">
                2018-2020
              </h3>
              <ul className="text-xl ml-10 py-2 list-disc dark:text-dark4">
                <li>
                  Studied and completed my HSC from{" "}
                  <a href="https://www.abhinav.ac.in" rel="noreferer">
                    <strong>Abhinav Vidyalaya and Jr College,Thane.</strong>
                  </a>
                </li>
                <li>
                  Participated and achieved Rank #3 for Robotic Arm at
                  Nat&apos;l Science Day at GMRT (TIFR),Pune (2019) .{" "}
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section
          className="min-h-screen bg-gradient-to-b from-sky-200 to-sky-600 dark:bg-none"
          id="projects"
        >
          <div clasName="mx-10 justify-center">
            <h2 className="text-4xl font-mono py-10 px-28 dark:text-light">
              Projects
            </h2>
          </div>
          <div className="grid xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 gap-2 px-12">
            <div className="rounded-lg h-70 w-60 mx-10 dark:text-light">
              <div class="relative  py-6 px-6 rounded-3xl w-64 my-4 shadow-xl  backdrop-blur-lg bg-slate-300 dark:bg-dark5">
                <div class=" text-white flex items-center absolute rounded-lg py-2 px-2 shadow-xl bg-green-500 right-4 -top-6 dark:bg-teal-600">
                  <p>NEW</p>
                </div>
                <div class="mt-6">
                  <p class="text-xl font-semibold my-2">Expense Tracker</p>
                  <div class="flex space-x-2 text-black text-sm py-2">
                    <AiFillCode className="h-6 w-6 dark:text-white"></AiFillCode>
                    <p className="text-lg dark:text-white">Flutter | Dart</p>
                  </div>

                  <div class="border-t-2 "></div>

                  <div class="flex justify-end py-2 ">
                    <div class="my-2">
                      <div class="flex space-x-2 align-middle rounded-lg bg-white mr-4 dark:text-black">
                        <a href="https://github.com/anandsm08/ExpenseTracker_Expensa">
                          {" "}
                          <AiFillGithub className="h-8 w-8"></AiFillGithub>
                        </a>
                      </div>
                    </div>
                    <div class="my-2 rounded-lg bg-white">
                      {/* <FiArrowUpRight className="h-8 w-8"></FiArrowUpRight> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg h-70 w-60 mx-10 dark:text-light">
              <div class="relative  py-6 px-6 rounded-3xl w-64 my-4 shadow-xl  backdrop-blur-lg bg-slate-300 dark:bg-dark5">
                <div class=" text-white flex items-center absolute rounded-lg py-2 px-2 shadow-xl bg-green-500 right-4 -top-6 dark:bg-teal-600">
                  <p>NEW</p>
                </div>
                <div class="mt-6">
                  <p class="text-xl font-semibold my-2">Portfolio Website</p>
                  <div class="flex space-x-2 text-black text-sm py-2">
                    <AiFillCode className="h-6 w-6 dark:text-white"></AiFillCode>
                    <p className="text-lg dark:text-white">
                      ReactJs | TailwindCSS
                    </p>
                  </div>

                  <div class="border-t-2 "></div>

                  <div class="flex justify-end py-2 ">
                    <div class="my-2">
                      <div class="flex space-x-2 align-middle rounded-lg bg-white mr-4 dark:text-black">
                        <a href="https://github.com/anandsm08/ExpenseTracker_Expensa">
                          {" "}
                          <AiFillGithub className="h-8 w-8"></AiFillGithub>
                        </a>
                      </div>
                    </div>
                    <div class="my-2 rounded-lg bg-white dark:text-black">
                      <a href="#">
                        {" "}
                        <FiArrowUpRight className="h-8 w-8"></FiArrowUpRight>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg h-70 w-60 mx-10 dark:text-light">
              <div class="relative  py-6 px-6 rounded-3xl w-64 my-4 shadow-xl  backdrop-blur-lg bg-slate-300 dark:bg-dark5">
                {/* <div class=" text-white flex items-center absolute rounded-lg py-2 px-2 shadow-xl bg-green-500 right-4 -top-6 dark:bg-teal-600">
                  <p>NEW</p>
                </div> */}
                <div class="mt-6">
                  <p class="text-xl font-semibold my-2">Wallet App UI</p>
                  <div class="flex space-x-2 text-black text-sm py-2">
                    <AiFillCode className="h-6 w-6 dark:text-white"></AiFillCode>
                    <p className="text-lg dark:text-white">Flutter | Dart</p>
                  </div>

                  <div class="border-t-2 "></div>

                  <div class="flex justify-end py-2 ">
                    <div class="my-2">
                      <div class="flex space-x-2 align-middle rounded-lg bg-white mr-4 dark:text-black">
                        <a href="https://github.com/anandsm08/ExpenseTracker_Expensa">
                          {" "}
                          <AiFillGithub className="h-8 w-8"></AiFillGithub>
                        </a>
                      </div>
                    </div>
                    <div class="my-2 rounded-lg bg-white">
                      {/* <FiArrowUpRight className="h-8 w-8"></FiArrowUpRight> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className=" text-center  lg:text-left">
        <div className="text-gray-300 text-center text-lg p-6 bg-gradient-to-b from-sky-600 to-sky-800 dark:bg-none dark:text-light" >
            © Copyright 2022, Developed by 
            <a className="text-gray-100 font-semibold dark:text-emerald-300" href="#"> Anand Menon</a>
        </div>
      </footer>
      </main>
      
    </div>
    
  );
}
