import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          description,
          projectType,
          link,
          tags
      }`
      )
      .then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-yellow-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">My Projects</h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        <section className="text-gray-600 body-font overflow-hidden">
         <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-12 bg-yellow-100 ">

          {projectData &&
            projectData.map((project, index) => (
             
              <div className="p-12 md:w-1/2 flex flex-col items-start">
               <div class="bg-white h-full px-8 pt-16 pb-24 rounded-lg overflow-hidden  relative shadow-xl"> 
                <h3 className="sm:text-3xl text-2xl title-font font-medium text-yellow-500 mt-4 mb-4 font-bold  mx-2">
                  <a
                    href={project.link}
                    alt={project.title}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                  </a>
                </h3>
                <div className="text-gray-500 text-xs space-x-1 ">
                  <span className="inline-block py-1 px-2 rounded bg-yellow-100 text-yellow-500 text-xs font-medium tracking-widest">
                    <strong className="font-bold">Type :  {project.projectType}</strong>{" "}
                   
                  </span>
                  <span className="inline-block py-1 px-2 rounded bg-yellow-100 text-yellow-500 text-xs font-medium tracking-widest">
                    <strong className="font-bold">{project.tags[0]}</strong>{" "}
                    
                  </span>
                 
                  <span className="inline-block py-1 px-2 rounded bg-yellow-100 text-yellow-500 text-xs font-medium tracking-widest">
                    <strong className="font-bold">{project.tags[1]}</strong>{" "} 
                  </span>

                  <span className="inline-block py-1 px-2 rounded bg-yellow-100 text-yellow-500 text-xs font-medium tracking-widest">
                    <strong className="font-bold">{project.tags[2]}</strong>{" "} 
                  </span>

                  <span className="inline-block py-1 px-2 rounded bg-yellow-100 text-yellow-500 text-xs font-medium tracking-widest">
                    <strong className="font-bold">{project.tags[3]}</strong>{" "} 
                  </span>

                  <p className="my-6 text-lg text-gray-700 leading-relaxed">
                    {project.description}
                  </p>
                  <span className="inline-block py-1 px-2 rounded bg-yellow-100 text-yellow-500 text-xs font-medium tracking-widest">
                  <a
                    href={project.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-yellow-500 font-bold hover:underline hover:text-yellow-400 text-xl"
                  >
                    View The Project{" "}
                    {/* <span role="img" aria-label="right pointer">
                      👉 */}
                    
                  </a>
                  </span>

                </div>
                </div>
                </div>



            ))}
            </div>
            </div>
        </section>
      </section>
    </main>
  );
}