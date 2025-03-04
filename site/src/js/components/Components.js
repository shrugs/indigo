import React, { Component } from "react";

// Banner Heading
const BH = props => {
  return <div className="f3-ns f4 mv6 mv10-ns">{props.children}</div>;
};

const Link = props => {
  return (
    <a
      href={props.href}
      className={`table f5 pointer ${props.className} black`}
    >
      {props.children}
    </a>
  );
};

const H = props => {
  return (
    <div id={props.id} className={""}>
      <h1 className={"f2"}>
        {
          // <a className={"gray30 no-underline"} href={props.id}>
          //   #{" "}
          // </a>
        }
        {props.children}
      </h1>
    </div>
  );
};

export { BH, Link, H };
