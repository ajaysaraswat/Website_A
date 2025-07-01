import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HorizontalCards = () => {
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const cardsContainer = cardsContainerRef.current;
    const cards = gsap.utils.toArray(".card");

    gsap.to(cardsContainer, {
      x: () => -(cardsContainer.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: "#cardsWrapper",
        start: "top top",
        end: () => `+=${cardsContainer.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 0.5,
        snap: 1 / (cards.length - 1),
        markers: true,
        invalidateOnRefresh: true,
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <>
      <div className="w-full h-screen flex justify-center">
        <div className="container mx-auto p-8 flex flex-col justify-center items-center">
          <h1 className="text-4xl text-center font-semibold mb-12">
            GSAP ScrollTrigger Horizontal Cards Animation
          </h1>
          <p className="text-lg font-medium text-center">
            Horizontal cards animation when the cards/slides width is not equal
            to the screen width or 100%
          </p>
        </div>
      </div>

      <div
        id="cardsWrapper"
        className="w-full h-screen flex items-center bg-gray-200 overflow-hidden"
      >
        <div
          ref={cardsContainerRef}
          id="cardsContainer"
          className="flex flex-nowrap gap-[50px] px-[50px] py-4"
        >
          {["One", "Two", "Three", "Four", "Five", "Six", "Seven"].map(
            (label, index) => (
              <div
                key={index}
                className="card shadow-md flex justify-center items-center bg-white rounded-lg p-8 w-[400px] h-[400px]"
              >
                <h1 className="text-4xl font-semibold">{label}</h1>
              </div>
            )
          )}
        </div>
      </div>

      <section className="w-full h-screen bg-gray-800 text-white px-4 py-2 flex justify-center items-center text-2xl font-semibold">
        FINAL SECTION
      </section>
    </>
  );
};

export default HorizontalCards;
