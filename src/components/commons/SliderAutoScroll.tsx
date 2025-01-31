'use client'
import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const animation = { duration: 5000, easing: (t: number) => t };

export default function SliderAutoScroll() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1 bg-red-500">1</div>
      <div className="keen-slider__slide number-slide2 bg-green-500">2</div>
      <div className="keen-slider__slide number-slide3 bg-yellow-200">3</div>
      <div className="keen-slider__slide number-slide1 bg-red-500">1</div>
      <div className="keen-slider__slide number-slide2 bg-green-500">2</div>
      <div className="keen-slider__slide number-slide3 bg-yellow-200">3</div>
    </div>
  );
}
