import React from "react";
import image from "../books.jpg";
import imagex from "../book.jpg";


export default function Home(){
return (
    <main className="relative">
      <img src={image} alt="" className="absolute w-full" />
      <div className="p-10 lg:pt-48 container mx-auto relative">
        <section className="bg-yellow-700 rounded-lg shadow-2xl lg:flex p-20">
          <img
            src={imagex}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt="Kapehe"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 
            className="cursive text-6xl text-gray-100 mb-4"
            >
              Hello and Welcome to{" "}
              <span className="text-gray-100">satrachee</span>
            </h1>
            <p className="text-yellow-200 text-lg">आ वो होता जोहवीति सत्‍त: सत्राचीं रातिं मरुतो गृणान: ।  य ईवतो वृषणो अस्ति गोपा: सो अद्वयावी हवते व उक्‍थै: ।।  
उभयं  शृणवच्‍च न इन्‍द्रो  अर्वागिदं  वच: । सत्राच्‍या मधवा सोमपीतये धिया शविष्‍ठ आ गमत्  ।।</p>
          </div>
        </section>
      </div>
    </main>
  )};
