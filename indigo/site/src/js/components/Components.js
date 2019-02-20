import React, { Component } from "react";

// Banner Heading
const BH = props => {
  return <div className="fs6 regular mt8 mb10">{props.children}</div>;
};

const Link = props => {
  return (
    <a href={props.href} className="block fs4 regular mb3 pointer">
      {props.children}
    </a>
  );
};

const H = props => {
  return (
    <div id={props.id} className={""}>
      <h1 className={"t2"}>
        <a className={"gray30 no-underline"} href={props.id}>
          #{" "}
        </a>
        {props.children}
      </h1>
    </div>
  );
};

export { BH, Link, H };
