"use client";

import Image from "next/image";
import React from "react";
import CarImage from "@/public/hero_car.png";
import Button from "../ui/Button";

function Hero() {
  return (
    <div className="hero-section">
      <div className="hero_left-container">
        <h1 className="hero_title">Car Gallery</h1>
        <p className="hero_subtitle">
          Explore the world of cars. Where you can buy, sell, and trade or rent
          cars easily.
        </p>

        <p className="hero_text">
          Streamline your experience with our easy-to-use search bar &
          effortless booking process.
        </p>

        <div className="outline-button-wrapper">
          <Button text="Get started" variant="outline" />
        </div>
      </div>
      <div className="hero_image-container">
        <div className="hero_image-wrapper">
          <Image
            src={CarImage}
            alt="car"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "contain" }}
            className="hero_image"
          />

          <div className="hero__image-overlay_bg"></div>

          <div className="hero__image-overlay_circle"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
