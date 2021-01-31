import React from "react";
// import Navbar from "../components/NavBar"
import cover from "../cover.png"
import Footer from "./Footer";
import image from "../books.jpg";
// import imagex from "../book.jpg";

export default function Landing() {
  return (
    <>
      {/* <Navbar transparent /> */}
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
             style={{ backgroundImage: `url(${image})` }}
             >
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl">
                    Hey I'm Vibhu Bhatia
                    </h1>
                    <p className="mt-4 text-lg text-gray-300">
                    A B.Tech undergraduate , sports fanatic and a tech enthusiast curious about the world around me.
                    </p>
                  </div>
                </div>

              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
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
                className="text-gray-100 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-100 -mt-24">
          <div className="container mx-auto px-4">
          <div className="flex flex-wrap">

          <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                     Current Vision
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                     I am currently working on a startup psyberduck with an initiative to offer a one stop solution to all the digital and technological needs of small and medium scale enterprises.
                    </p>
                  </div>
                </div>
              </div>

            
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">My Qualifications</h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    B.Tech. in Information Technology <br></br>
                    BIT Mesra (2018-2022) <br></br>
                    Class 12th from RNS World School,Jhansi<br></br>
​                   Class 10th from RLPS ,Jhansi<br></br>
                
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                    My background
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    I am born and broght up in Jhansi,Uttar Pradesh.I am an avid cricket fan who likes solving difficult challenges by implementing some innovative ideas.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Advisory Board
                </h3>
                <p className="text-lg  leading-relaxed mt-4 mb-4 text-gray-700">
                 Professor Mukteshwar Nath Tiwary.<br></br>
                 Hindi Bhawan, Vishwa Bharti,Shanti <br></br>
                 Niketan. West Bengal (+91-9474765831)  <br></br>   
                 <br></br>  
                 Dr. Kamlesh Verma. Dept. of Hindi<br></br>
                 Rajkiya Mahila Mahavidyalya,Sewapuri,<br></br>
                 Varanasi, U.P. (+91-9415256226)<br></br>
                 E-mail: kamleshvermajnu@gmail.com<br></br>
                </p>
                <p className="text-lg  leading-relaxed mt-0 mb-4 text-gray-700">
                Dr. Ashutosh Partheshwar<br></br>
                Assistant Professor, Dept. of Hindi  <br></br>
                Oriental College, Patna City.<br></br>
                Mob. 09934260232<br></br>
                E-mail: parthdot@gmail.com<br></br>
                </p>
              
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              
                  <img
                    alt="..."
                    src={cover}
                    className="w-full align-middle rounded-t-lg"
                   
                  />
                 
          </div>
          </div>
          </div>
        </section>


       
      </main>
      <Footer />
    </>
  );
}
