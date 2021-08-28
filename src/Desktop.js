import React from "react";
import Lottie from "react-lottie";
import animationData from "./lotties/desktop";
import DesktopNav from "./DesktopNav";

export default function Desktop() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <>
      <DesktopNav />
      <div className="desktop">
        <h2>Welcome to InterviewReady</h2>

        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </>
  );
}
