import React, { Component } from "react";
import { BH, Link, H } from "../components/Components";

const grays = [
  {
    hex: "#000000",
    name: "Black",
    bg: "bg-black",
    text: "black",
    fg: "white"
  },
  {
    hex: "#333333",
    name: "Gray6",
    bg: "bg-gray6",
    text: "gray6",
    fg: "white"
  },
  {
    hex: "#4d4d4d",
    name: "Gray5",
    bg: "bg-gray5",
    text: "gray5",
    fg: "white"
  },
  {
    hex: "#7f7f7f",
    name: "Gray4",
    bg: "bg-gray4",
    text: "gray4",
    fg: "black"
  },
  {
    hex: "#b1b2b3",
    name: "Gray3",
    bg: "bg-gray3",
    text: "gray3",
    fg: "black"
  },
  {
    hex: "#e6e6e6",
    name: "Gray2",
    bg: "bg-gray2",
    text: "gray2",
    fg: "black"
  },
  {
    hex: "#f9f9f9",
    name: "Gray1",
    bg: "bg-gray1",
    text: "gray1",
    fg: "black"
  },
  {
    hex: "#fffff",
    name: "white",
    bg: "bg-white",
    text: "white",
    fg: "black"
  }
];

const blues = [
  {
    hex: "#190d7b",
    name: "blue4",
    bg: "bg-blue4",
    text: "blue4",
    fg: "white"
  },
  {
    hex: "#4330fc",
    name: "blue3",
    bg: "bg-blue3",
    text: "blue3",
    fg: "white"
  },
  {
    hex: "#b0c7ff",
    name: "blue2",
    bg: "bg-blue2",
    text: "blue2",
    fg: "black"
  },
  {
    hex: "#ecf6ff",
    name: "blue1",
    bg: "bg-blue1",
    text: "blue1",
    fg: "black"
  }
];

const reds = [
  {
    hex: "#c10d30",
    name: "red4",
    bg: "bg-red4",
    text: "red4",
    fg: "white"
  },
  {
    hex: "#ee5432",
    name: "red3",
    bg: "bg-red3",
    text: "red3",
    fg: "white"
  },
  {
    hex: "#ffa073",
    name: "red2",
    bg: "bg-red2",
    text: "red2",
    fg: "black"
  },
  {
    hex: "#f9d6ce",
    name: "red1",
    bg: "bg-red1",
    text: "red1",
    fg: "black"
  }
];

const greens = [
  {
    hex: "#286e55",
    name: "green4",
    bg: "bg-green4",
    text: "green4",
    fg: "white"
  },
  {
    hex: "#2aa779",
    name: "green3",
    bg: "bg-green3",
    text: "green3",
    fg: "white"
  },
  {
    hex: "#2ed196",
    name: "green2",
    bg: "bg-green2",
    text: "green2",
    fg: "black"
  },
  {
    hex: "#bdebcc",
    name: "green1",
    bg: "bg-green1",
    text: "green1",
    fg: "black"
  }
];

const yellows = [
  {
    hex: "#EE892B",
    name: "yellow4",
    bg: "bg-yellow4",
    text: "yellow4",
    fg: "white"
  },
  {
    hex: "#fcc440",
    name: "yellow3",
    bg: "bg-yellow3",
    text: "yellow3",
    fg: "black"
  },
  {
    hex: "#ffd972",
    name: "yellow2",
    bg: "bg-yellow2",
    text: "yellow2",
    fg: "black"
  },
  {
    hex: "#ffefc5",
    name: "yellow1",
    bg: "bg-yellow1",
    text: "yellow1",
    fg: "black"
  }
];

const Color = () => {
  return (
    <React.Fragment>
      <div className="full bt4 b-black mv10" />
      <h1 className="mb8 fw-bold full" id="color">
        Color
      </h1>
      <p className="measure full">
        We do not use color for branding purposes. To us, color is used to
        indicate state.
      </p>

      <ColorSection title={"Grays"} list={grays} />
      <ColorSection title={"Blues"} list={blues} />
      <ColorSection title={"Greens"} list={greens} />
      <ColorSection title={"Reds"} list={reds} />
      <ColorSection title={"Yellows"} list={yellows} />
    </React.Fragment>
  );
};

const ColorSection = ({ title, list }) => {
  return (
    <React.Fragment>
      <h2 className="mt6 mb6 fw-bold full">{title}</h2>
      <div className="fourth-1-ns half-1 f6 mb2 gray3 fw-bold">
        Background Color
      </div>
      <div className="fourth-2-ns half-2 f6 mb2 gray3 fw-bold">Class</div>
      <div className="fourth-3-ns half-1 f6 mb2 gray3 fw-bold">Text Color</div>
      <div className="fourth-4-ns half-2 f6 mb2 gray3 fw-bold">Class</div>
      {list.map(color => {
        return (
          <React.Fragment>
            <div className="mt1" />

            <div className="fourth-1-ns half-1">
              <div
                className={`fourth-1 align-center pl2 h10 ${color.bg} ${
                  color.fg
                }`}
              >{`${color.hex}`}</div>
            </div>

            <div className="fourth-2-ns half-2">
              <div className={`fourth-3 align-center h9 mono`}>{`.${
                color.bg
              }`}</div>
            </div>

            <div className="fourth-3-ns half-1">
              <div className={`${color.text} fourth-3 f1 fw-bold align-center`}>
                Ag
              </div>
            </div>

            <div className="fourth-4-ns half-2">
              <div className={`fourth-3 align-center mono`}>{`.${
                color.text
              }`}</div>
            </div>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
};

export default Color;
