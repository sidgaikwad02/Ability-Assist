import React, { useRef, useEffect } from "react";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import { Navbar } from "../components/Navbar";
import { drawRect } from "../utils/utilities";

function ObjectDetection() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const runCoco = async () => {
      const net = await cocossd.load();
      const detectInterval = setInterval(() => {
        detect(net);
      }, 10);

      return () => clearInterval(detectInterval); // Cleanup interval on unmount
    };

    runCoco();

    return () => {}; // Clean up any resources if needed
  }, []);

  const detect = async (net) => {
    if (
      webcamRef.current &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const { videoWidth, videoHeight } = video;

      video.width = videoWidth;
      video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const obj = await net.detect(video);
      const ctx = canvasRef.current.getContext("2d");

      drawRect(obj, ctx);
    }
  };

  return (
    <div className="bg-green-200 min-h-screen">
      <Navbar />
      <h1 className="text-5xl font-semibold mt-12 mb-8">Object Detection</h1>
      <div className="flex justify-center items-center h-[70vh]">
        <Webcam
          ref={webcamRef}
          muted={true}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zIndex: 8,
            width: 640,
            height: 480,
          }}
        />
      </div>
    </div>
  );
}

export default ObjectDetection;
