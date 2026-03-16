import React from "react";

type Props = {
  children: React.ReactNode;
};

const SiteShell = ({ children }: Props) => {
  return (
    <div className="grain-bg bg-background min-h-screen relative">
      {/* WATERMARK (ABOVE BACKGROUND, BELOW CONTENT) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-10 flex items-start justify-center pt-24 sm:pt-28"
      >
        <img
          src="/privenlogo.png"
          alt=""
          className="w-[420px] sm:w-[600px] opacity-[0.06] blur-[0.1px] mix-blend-soft-light"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default SiteShell;