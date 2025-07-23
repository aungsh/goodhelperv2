export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      {/* Curved Text */}
      <div className="-mb-15 w-full flex justify-center overflow-x-hidden">
        <svg
          width="100%"
          height="120"
          viewBox="0 0 600 120"
          className="overflow-visible max-w-full"
          preserveAspectRatio="xMidYMin meet"
        >
          <defs>
            <path
              id="curve"
              d="M 80 140 Q 300 -80 520 140"
              fill="none"
              stroke="none"
            />
          </defs>
          <text
            className="fill-black font-medium "
            style={{ fontSize: "42px" }}
          >
            <textPath href="#curve" startOffset="50%" textAnchor="middle">
              MÈRE COURAGE
            </textPath>
          </text>
        </svg>
        {/* Bouncing scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <span className="animate-bounce text-3xl">↓</span>
          <span className="mt-2 text-sm font-medium">Scroll down</span>
        </div>
      </div>

      {/* Subtitle */}
      <div className="text-center">
        <p className="text-xl italic">je t'aime,</p>
        <p className="text-xl italic">maman (esz)</p>
      </div>

      {/* Large .g text */}
      <div className="mb-10 -mt-10">
        <span className="text-[12rem] font-bold leading-none">.g</span>
      </div>

      {/* Goodhelper text with slashes */}
      <div className="text-center">
        <p className="text-4xl font-bold">\ goodhelper /</p>
        <p className="text-md font-medium mt-10 text-color-gray-600">
          A modern domestic helper agency in Singapore.
        </p>
      </div>
    </div>
  );
}
