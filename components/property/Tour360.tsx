"use client";

import { useEffect, useRef } from "react";

const CSS_URL = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";
const JS_URL = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";

export function Tour360({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    let viewer: any;

    const ensureCss = () => {
      if (!document.querySelector(`link[data-pannellum]`)) {
        const l = document.createElement("link");
        l.rel = "stylesheet";
        l.href = CSS_URL;
        l.dataset.pannellum = "1";
        document.head.appendChild(l);
      }
    };

    const init = () => {
      const w = window as any;
      if (cancelled || !ref.current || !w.pannellum) return;
      viewer = w.pannellum.viewer(ref.current, {
        type: "equirectangular",
        panorama: src,
        autoLoad: true,
        autoRotate: -2,
        showZoomCtrl: true,
        showFullscreenCtrl: true,
      });
    };

    ensureCss();
    const w = window as any;
    if (w.pannellum) {
      init();
    } else {
      let s = document.querySelector("script[data-pannellum]") as HTMLScriptElement | null;
      if (!s) {
        s = document.createElement("script");
        s.src = JS_URL;
        s.async = true;
        s.dataset.pannellum = "1";
        document.body.appendChild(s);
      }
      s.addEventListener("load", init);
    }

    return () => {
      cancelled = true;
      try {
        if (viewer && viewer.destroy) viewer.destroy();
      } catch {
        /* ignore */
      }
    };
    /* eslint-enable @typescript-eslint/no-explicit-any */
  }, [src]);

  return <div ref={ref} className="h-80 w-full bg-[#06121f] md:h-96" />;
}
