/* eslint-disable react/no-unknown-property */

import { useState } from "react";

const NoticeBoard = () => {
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="py-4 bg-red-0 -mt-8 md:-mt-0">
      <div className="">
        <h2 className="text-2xl font-bold mb-4 text-center text-red-700">
          {/* Notice Board */}
        </h2>
        <div
          className="relative bg-red-700 text-white p-4   overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="flex whitespace-nowrap"
            style={{
              display: "flex",
              whiteSpace: "nowrap",
              animation: `marquee 20s linear infinite`,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            <a href="/" className="text-lg font-semibold px-4">
              <span className="text-red-300">Notice:</span> G.O.No.-1602/1(8)
              (Notification: Out of Bangladesh Holiday) (New)
            </a>
            <a href="/" className="text-lg font-semibold px-4">
              <span className="text-red-300"></span> G.O.No.-332 (Condolence)
              (New)
            </a>
            <a href="/" className="text-lg font-semibold px-4">
              <span className="text-red-300"></span> G.O.No.-330(8)
              (Notification) Transfer/Appointment of Officers. (new)
            </a>
            <a href="/" className="text-lg font-semibold px-4">
              <span className="text-red-300"></span> G.O.No.-237 (Office Order:
              Directing to join own office)
            </a>
            <a href="/" className="text-lg font-semibold px-4">
              <span className="text-red-300"></span> G.O.No.-322(5)
              (Notification) Regarding Permanentization of Employment.
            </a>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </section>
  );
};

export default NoticeBoard;
