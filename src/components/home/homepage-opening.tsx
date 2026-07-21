"use client";

import { useCallback, useState } from "react";
import { FilmCountdownIntro } from "./film-countdown-intro";
import { HeroSection } from "./hero-section";

export function HomepageOpening() {
  const [openingReady, setOpeningReady] = useState(false);
  const handleIntroComplete = useCallback(() => setOpeningReady(true), []);

  return (
    <>
      <FilmCountdownIntro onComplete={handleIntroComplete} />
      <HeroSection openingReady={openingReady} />
    </>
  );
}
