"use client";

import { useEffect } from "react";
import { gql, useQuery } from "@apollo/client";
import { FaLocationArrow } from "react-icons/fa6";

import MagicButton from "../common/MagicButton";
import { Spotlight } from "../ui/spotlight";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const GET_WELCOME_SECTION = gql`
  query {
    welcomeSectionCollection(limit: 1) {
      items {
        title
        subtitle
        introduction {
          json
        }
      }
    }
  }
`;

const Welcome = () => {
  const { data, loading, error } = useQuery(GET_WELCOME_SECTION);
  useEffect(() => {
    if (data) {
      console.log("Welcome Section Data:", data);
    }
    if (error) {
      console.error("Error fetching Welcome Section:", error);
    }
  }, [data, error]);

  if (loading) return <p>Loading...</p>;

  const welcomeData = data?.welcomeSectionCollection?.items[0];

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-1/2 transform -translate-x-1/2"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div
        className="h-screen w-full bg-black-100  dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>
          <TextGenerateEffect
            words="Utilizing Technology to Solve Problems"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl text-white">
            Hi! I&apos;m Mohammed, a Full-Stack Software Engineer.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
