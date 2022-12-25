import { SportsCard } from "../components/sport-card";
import { ContainedButton, Header } from "../components/gobal";
import React from "react";

export const HomePage = () => {
  return (
    <>
      <section>
        <div className="w-full">
          <div className="flex bg-white">
            <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2 p-10">
              <div>
                <Header>
                  Do you aspire to be an{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-main-400 to-main-300">
                    indoor champion
                  </span>
                </Header>
                <p className="mt-10 text-lg text-gray-700 md:text-base">
                  The only indoor sports facility and training center in
                  Sacramento CA, specializing in Baseball, Softball, Futsal and
                  Cricket. Book now for an action packed fun and learning.
                </p>
                <div className="flex justify-center lg:justify-start mt-6">
                  <ContainedButton href="/tour" text="Virtual Tour" />
                </div>
              </div>
            </div>
            <div className="hidden lg:block lg:w-1/2 player_header">
              <div className="h-full object-cover">
                <div className="h-full bg-main-400 opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SportsCard />
    </>
  );
};
