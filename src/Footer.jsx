import React from "react";
import { TbCopyright } from "react-icons/tb";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { SocialIcon } from "./SocialIcon";

export const Footer = () => {
  const currYear = new Date().getFullYear();

  return (
    <div className="bg-transparent py-4 mt-32 p-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-text flex items-start text-center gap-0.5">
            <TbCopyright className="text-2xl" />
            {currYear} ExpressResume. All rights reserved.
          </h1>
          <div className="text-text flex flex-col md:flex-row  items-center gap-4">
            <p>
              Created by <span className="text-highlight">Vishal Verma</span>
            </p>
            <div className="flex">
              <SocialIcon
                link={"https://www.linkedin.com/in/vishal-verma-2775b9197/"}
              >
                <BsLinkedin className="text-2xl text-highlight" />
              </SocialIcon>
              <SocialIcon link={"https://github.com/itsvishy321"}>
                <BsGithub className="text-2xl text-highlight" />
              </SocialIcon>
              <SocialIcon link={"https://www.instagram.com/vishal.verma.10/"}>
                <BsInstagram className="text-2xl text-highlight" />
              </SocialIcon>
            </div>
          </div>
        </div>
    </div>
  );
};