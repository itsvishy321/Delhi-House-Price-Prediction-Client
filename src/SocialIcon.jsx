import React from "react";

export const SocialIcon = (props) => {
  return (
    <>
      <button className="social-icon">
        <a href={props.link}>{props.children}</a>
      </button>
    </>
  );
};