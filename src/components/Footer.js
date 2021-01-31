// import userEvent from "@testing-library/user-event";
import React from "react";
// import { Linking } from 'react'
// import { useHistory } from 'react-router-dom';
// user={
  
//   email:'mailto:vibhubhatia0007@gmail.com'

// }

export default function Footer() {
  return (
    <>
      <footer className="relative bg-white pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">
                Let's keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
               
              </h5>
              <div className="mt-6">
              <button
            
                  className="bg-gray text-black-600  font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <a href="mailto:vibhubhatia0007@gmail.com">
                  <i className="flex fa fa-envelope">
                  </i>
                  </a>
                </button>
                <button
                  className="bg-gray text-black-600  font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <a href="https://www.facebook.com/profile.php?id=100008940287252">
                  <i className="flex fab fa-facebook-square"></i>
                  </a>
                </button>
                <button
                  className="bg-gray text-black-800  font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <a href="https://www.instagram.com/vibhu.669/">
                  <i className="flex fab fa-instagram"></i>
                  </a>
                  </button>
                <button
                  className="bg-gray text-black-600  font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                   <a href="tel:7705982980">
                  <i className="flex fa fa-phone"></i>
                  </a>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="https://github.com/vibhubhatia007">
                           Github
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="https://www.linkedin.com/in/vibhu-bhatia-483629167/">Linkedin
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="https://psyberduck.com/">PsyberDuck
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="https://www.stopstalk.com/user/profile/vibhu007">Stopstalk
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                   Pages
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="/resume">
                        Resume
                    </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="/project">
                           Projects
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="/post">
                           Blogs
                      </a>
                    </li>
                    <li>
                      <a className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                         href="/contact">Contact Us
                      </a>
                    </li>
                  </ul>

                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © 2020 Designed By
                <a
                  href="/"
                  className="text-gray-600 hover:text-gray-900"
                >
                 Vibhu Bhatia
                </a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}