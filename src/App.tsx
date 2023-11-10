import { useEffect, useRef, useState } from "react";
import "./App.css";
import GradientBorderComponent from "./components/GradientBorderComponent/GradientBorderComponent";

function App() {
  const customDivRef = useRef<HTMLDivElement>(null);

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (customDivRef.current) {
      setWidth(customDivRef.current.getBoundingClientRect().width);
      setHeight(customDivRef.current.getBoundingClientRect().height);
    }
  }, [customDivRef]);

  return (
    <GradientBorderComponent
      gradientCustomId={"gradientCustomId"}
      gradientCustomName={"gradientCustomName"}
      gradientBorderWidth={4}
      gradientBorderRadius={16}
      gradientBorderColor={[
        {
          color: "#E4E4E454",
          offset: 0,
        },
        {
          color: "#E4E4E400",
          offset: 100,
        },
      ]}
      gradientBorderDirection={"top-to-bottom"}
      gradientBorderColorDeg={0}
      gradientBorderChildren={
        <div
          ref={customDivRef}
          style={{
            width: `fit-content`,
            height: `fit-content`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            backgroundColor: "#1F2937",
            padding: "10px",
          }}
          className="w-[300px] h-[160px] px-[24px] py-[16px] md:py-2 md:px-6 flex gap-[2px] md:gap-2 mx-auto items-center bg-slate-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="14"
            viewBox="0 0 13 14"
            fill="none"
          >
            <path
              d="M6.5 0L7.62 5.0601L12.5622 3.5L8.74 7L12.5622 10.5L7.62 8.9399L6.5 14L5.38 8.9399L0.437822 10.5L4.26 7L0.437822 3.5L5.38 5.0601L6.5 0Z"
              fill="url(#paint0_linear_657_15252)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_657_15252"
                x1="13.5"
                y1="10.3704"
                x2="-0.94914"
                y2="9.70143"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#EBF3FF" />
                <stop offset="0.273958" stopColor="#CDE1FF" />
                <stop offset="1" stopColor="#BECCFF" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-xs md:text-lg font-normal md:font-medium text-white">
            Contact
          </span>
        </div>
      }
      width={width}
      height={height}
    />
  );
}

export default App;
