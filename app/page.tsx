"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { YouTubeEmbed } from "@next/third-parties/google";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Download from "@/components/sections/Download";
import LimitedTime from "@/components/sections/LimitedTime";
import Benefits from "@/components/sections/Benefits";
import Pricing from "@/components/sections/Pricing";
import Faq from "@/components/sections/Faq";
import ReactLenis from "lenis/react";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <ReactLenis root>
        <Navbar />
        <Hero />
        <Download />
        <LimitedTime />
        <Benefits />

        {/* Call to action */}
        <div className="bg-[#4F75FB] w-full py-14 lg:py-18 flex items-center">
          <div className="container flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-semibold text-center w-full xl:w-[80%]">
              Accelerate your firm’s growth with deep insights from Generative
              A.I.
            </h1>
            <p className="text-md md:text-lg lg:text-xl w-full xl:w-[65%] text-center mt-2 lg:mt-5">
              All of this delivered using &ldquo;A.I. Glue&ldquo; for a seamless
              integration with your existing workflows and IT systems, and
              without the need for in-house technical support!
            </p>
            <div className="flex w-full md:w-[70%] lg:w-1/2 items-center justify-center space-x-4 mt-8 lg:mt-10">
              <Input type="email" placeholder="Enter your email" />
              <Button
                size={"lg"}
                className="bg-black text-white hover:bg-white hover:text-black font-semibold"
              >
                Sign-up
              </Button>
            </div>
          </div>
        </div>

        {/* video */}
        <div className="bg-black py-16 w-full">
          <div className="container flex items-center justify-center">
            <YouTubeEmbed videoid="6OBgKtayz2M" width={720} />
          </div>
        </div>

        <Pricing />
        <Faq />
        <Footer />
      </ReactLenis>
    </main>
  );
}
