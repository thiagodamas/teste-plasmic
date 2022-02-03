// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Polygon4IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Polygon4Icon(props: Polygon4IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 104 75"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path d={"M52 0l51.095 74.25H.905L52 0z"} fill={"currentColor"}></path>
    </svg>
  );
}

export default Polygon4Icon;
/* prettier-ignore-end */
