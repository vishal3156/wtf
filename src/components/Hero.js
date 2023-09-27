import React from "react"
import HeroImg from "../img/men-2421449_1280.png"
import { Link } from "react-router-dom"
import { IoMdArrowDown } from "react-icons/io"

const Hero = () => {
  return (
    <section className="h-[700px] bg-hero bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[5px] bg-blue-900 mr-3"></div>
            New Arrivals
            <div className="w-10 h-[5px] bg-red-900 ml-3"></div>
          </div>

          <h1 className="text-[70px] leading-[1.1] font-light mb-4">
            New Trend
          </h1>
          <Link
            to={"/Home"}
            className="self-start uppercase font-semibold border-b-2 border-primary flex justify-center items-center"
          >
            Scroll down
            <IoMdArrowDown />
          </Link>
        </div>
        <div className="hidden lg:block">
          <img
            src={HeroImg}
            alt=""
            className="h-[100%] overflow-hidden flex items-end"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
