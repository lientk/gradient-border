// import React from "react";

// type GradientBorderDirectionType =
//   | "top-to-bottom"
//   | "right-to-left"
//   | "bottom-to-top"
//   | "left-to-right";
// type GradientBorderColorType = Array<{
//   offset: number;
//   color: string;
// }>;
// export interface GradientBorderComponentProps {
//   gradientBorderWidth: number;
//   gradientBorderRadius: number;
//   gradientBorderColor: GradientBorderColorType;
//   gradientBorderDirection: GradientBorderDirectionType;
//   gradientBorderColorDeg: number;
//   gradientBorderChildren: React.ReactNode;
// }

// const GradientBorderComponent = (props: GradientBorderComponentProps) => {
//   const {
//     gradientBorderWidth,
//     gradientBorderRadius,
//     gradientBorderColor,
//     gradientBorderDirection,
//     gradientBorderColorDeg,
//     gradientBorderChildren,
//   } = props;
//   const elementRef = React.useRef<SVGSVGElement>(null);
//   const [Width, setWidth] = React.useState(0);
//   const [Height, setHeight] = React.useState(0);

//   React.useEffect(() => {
//     if (elementRef.current) {
//       const { width, height } = elementRef.current.getBoundingClientRect();
//       console.log("first", width, height);
//       setWidth(width);
//       setHeight(height);
//     }
//   }, []);
//   return (
//     <svg
//       ref={elementRef}
//       xmlns="http://www.w3.org/2000/svg"
//       style={{
//         width: "100%",
//         height: "100%",
//         position: "relative",
//       }}
//     >
//       <defs>
//         <linearGradient
//           id="customGradient"
//           x1={`${gradientBorderDirection === "right-to-left" ? "100%" : "0%"}`}
//           y1={`${gradientBorderDirection === "bottom-to-top" ? "100%" : "0%"}`}
//           x2={`${gradientBorderDirection === "left-to-right" ? "100%" : "0%"}`}
//           y2={`${gradientBorderDirection === "top-to-bottom" ? "100%" : "0%"}`}
//           gradientTransform={`rotate(${gradientBorderColorDeg})`}
//         >
//           {gradientBorderColor.map((item, index) => (
//             <stop
//               offset={`${item?.offset}%`}
//               stopColor={item?.color}
//               key={index}
//             />
//           ))}
//         </linearGradient>
//         <path
//           d={`M${
//             gradientBorderRadius + gradientBorderWidth
//           } ${gradientBorderWidth} h${
//             Width - 2 * gradientBorderRadius - 2 * gradientBorderWidth
//           } a${gradientBorderRadius},${gradientBorderRadius} 0 0 1 ${gradientBorderRadius},${gradientBorderRadius} v${
//             Height - 2 * gradientBorderRadius - 2 * gradientBorderWidth
//           } a${gradientBorderRadius},${gradientBorderRadius} 0 0 1 -${gradientBorderRadius},${gradientBorderRadius} h-${
//             Width - 2 * gradientBorderRadius - 2 * gradientBorderWidth
//           } a${gradientBorderRadius},${gradientBorderRadius} 0 0 1 -${gradientBorderRadius},-${gradientBorderRadius} v-${
//             Height - 2 * gradientBorderRadius - 2 * gradientBorderWidth
//           } a${gradientBorderRadius},${gradientBorderRadius} 0 0 1 ${gradientBorderRadius},-${gradientBorderRadius} z`}
//           stroke="url('#customGradient')"
//           strokeWidth={gradientBorderWidth}
//           fill="none"
//           id="myCircle"
//         />
//       </defs>
//       <use href="#myCircle" fill="url('#customGradient')" />
//       <foreignObject
//         x="0"
//         y="0"
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           position: "relative",
//         }}
//       >
//         <div
//           style={{
//             width: `${Width - 2 * gradientBorderWidth}px`,
//             height: `${Height - 2 * gradientBorderWidth}px`,
//             borderRadius: `${gradientBorderRadius}px`,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             overflow: "hidden",
//             position: "absolute",
//             top: `${gradientBorderWidth}px`,
//             left: `${gradientBorderWidth}px`,
//           }}
//         >
//           <div
//             style={{
//               width: `100%`,
//               height: `100%`,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             {gradientBorderChildren}
//           </div>
//         </div>
//       </foreignObject>
//     </svg>
//   );
// };

// export default GradientBorderComponent;

import React, {
  ReactElement,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

type GradientBorderDirectionType =
  | "top-to-bottom"
  | "right-to-left"
  | "bottom-to-top"
  | "left-to-right";
type GradientBorderColorType = Array<{
  offset: number;
  color: string;
}>;
export interface GradientBorderComponentProps {
  gradientCustomName: string;
  gradientCustomId: string;
  gradientBorderWidth: number;
  gradientBorderRadius: number;
  gradientBorderColor: GradientBorderColorType;
  gradientBorderDirection: GradientBorderDirectionType;
  gradientBorderColorDeg: number;
  gradientBorderChildren: ReactElement;
  width: number;
  height: number;
}

const GradientBorderComponent = (props: GradientBorderComponentProps) => {
  const {
    gradientCustomName,
    gradientCustomId,
    gradientBorderWidth,
    gradientBorderRadius,
    gradientBorderColor,
    gradientBorderDirection,
    gradientBorderColorDeg,
    gradientBorderChildren,
    width,
    height,
  } = props;
  const [Width, setWidth] = React.useState(0);
  const [Height, setHeight] = React.useState(0);
  const [radius, setRadius] = useState(0);

  useLayoutEffect(() => {
    setWidth(width + 2 * gradientBorderWidth);
    setHeight(height + 2 * gradientBorderWidth);
  }, [width, height, gradientBorderWidth]);

  useEffect(() => {
    if (Width < Height) {
      if (2 * gradientBorderRadius > Width) {
        setRadius(2 * gradientBorderRadius - Width + 2 * gradientBorderWidth);
      } else {
        setRadius(gradientBorderRadius);
      }
    } else if (Width > Height) {
      if (2 * gradientBorderRadius > Height) {
        setRadius(2 * gradientBorderRadius - Height + 2 * gradientBorderWidth);
      } else {
        setRadius(gradientBorderRadius);
      }
    }
  }, [Width, Height, gradientBorderRadius, gradientBorderWidth]);
  return (
    <svg
      className="relative"
      style={{
        width: `${
         width + 2 * gradientBorderWidth
        }px`,
        height: `${
          height + 2 * gradientBorderWidth
        }px`,
      }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={gradientCustomId}
          x1={`${gradientBorderDirection === "right-to-left" ? "100%" : "0%"}`}
          y1={`${gradientBorderDirection === "bottom-to-top" ? "100%" : "0%"}`}
          x2={`${gradientBorderDirection === "left-to-right" ? "100%" : "0%"}`}
          y2={`${gradientBorderDirection === "top-to-bottom" ? "100%" : "0%"}`}
          gradientTransform={`rotate(${gradientBorderColorDeg})`}
        >
          {gradientBorderColor.map((item, index) => (
            <stop
              offset={`${item.offset}%`}
              stopColor={item.color}
              key={index}
            />
          ))}
        </linearGradient>
        <path
          d={`M${radius + gradientBorderWidth} ${gradientBorderWidth} h${
            Width - 2 * radius - 2 * gradientBorderWidth
          } a${radius},${radius} 0 0 1 ${radius},${radius} v${
            Height - 2 * radius - 2 * gradientBorderWidth
          } a${radius},${radius} 0 0 1 -${radius},${radius} h-${
            Width - 2 * radius - 2 * gradientBorderWidth
          } a${radius},${radius} 0 0 1 -${radius},-${radius} v-${
            Height - 2 * radius - 2 * gradientBorderWidth
          } a${radius},${radius} 0 0 1 ${radius},-${radius} z`}
          stroke={`url('#${gradientCustomId}')`}
          strokeWidth={gradientBorderWidth}
          fill="none"
          id={gradientCustomName}
        />
      </defs>
      <use
        href={`#${gradientCustomName}`}
        fill={`url('#${gradientCustomId}')`}
      />
      <foreignObject
        x="0"
        y="0"
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${Width - 2 * gradientBorderWidth}px`,
            height: `${Height - 2 * gradientBorderWidth}px`,
            borderRadius: `${gradientBorderRadius}px`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            position: "absolute",
            top: `${gradientBorderWidth}px`,
            left: `${gradientBorderWidth}px`,
          }}
        >
          <div
            style={{
              width: `100%`,
              height: `100%`,
            }}
          >
            {gradientBorderChildren}
          </div>
        </div>
      </foreignObject>
    </svg>
  );
};

export default GradientBorderComponent;
