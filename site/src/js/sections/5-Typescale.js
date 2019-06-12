import React, { Component } from "react";
import { BH, Link, H } from "../components/Components";

const scale = [
  {
    size: "f1",
    sample: "I have always imagined that Paradise will be a kind of library.",
    a: "h1, .f1",
    b: "48px 3rem",
    c: "64px 4rem @1.33x",
    d: "400, 600"
  },
  {
    size: "f2",
    sample: "I have always imagined that Paradise will be a kind of library.",
    a: "h2, .f2",
    b: "32px 2rem",
    c: "48px 3rem @1.5x",
    d: "400, 600"
  },
  {
    size: "f3",
    sample: "I have always imagined that Paradise will be a kind of library.",
    a: "h3, .f3",
    b: "24px 1.75rem",
    c: "32px 2rem @1.5x",
    d: "400, 600"
  },
  {
    size: "f4",
    sample: "I have always imagined that Paradise will be a kind of library.",
    a: "h4, .f4",
    b: "20px 1.5rem",
    c: "32px 2rem @1.33x",
    d: "400, 600"
  },
  {
    size: "f5",
    sample: "I have always imagined that Paradise will be a kind of library.",
    a: "h5, .f5",
    b: "16px 1rem",
    c: "32px 2rem @1.33x",
    d: "400, 600"
  },
  {
    size: "f6",
    sample: "I have always imagined that Paradise will be a kind of library.",
    a: "h6, .f6",
    b: "16px 1rem",
    c: "32px 2rem @1.33x",
    d: "400, 600"
  }
];

const Typescale = () => {
  return (
    <React.Fragment>
      <div className="full bt4 b-black mv10" />
      <h1 className="mb8 fw-bold full" id="typescale">
        Typescale
      </h1>
      <p className="p mb8 measure full">
        We needed a simple, proportional typescale that didn't have a lot of
        attitude. We want to stand out for what we do, not how we look. We use
        two fonts: Inter and Source Code Pro.
      </p>

      <h2 className="mt6 fw-bold half-1">Inter</h2>
      <a href="https://rsms.me/inter/" className="f2 mt6 fw-bold half-2">
        {"-> Source"}
      </a>
      {scale.map(item => {
        return (
          <React.Fragment>
            <div className="full mt8 mb4 bt1 b-gray2 pt4">
              <div className="f6 gray3 fw-bold mb2">Sample</div>
              <div className={`${item.size} full `}>{item.sample}</div>
            </div>
            <div className="fourth-1-ns half-1">
              <div className="f6 gray3 fw-bold">Classes</div>
              <div className="f5 mono">{item.a}</div>
            </div>
            <div className="fourth-2-ns half-2">
              <div className="f6 gray3 fw-bold">Font Size</div>
              <div className="f5 mono">{item.b}</div>
            </div>
            <div className="fourth-3-ns half-1">
              <div className="f6 gray3 fw-bold">Line Height</div>
              <div className="f5 mono">{item.c}</div>
            </div>
            <div className="fourth-4-ns half-2">
              <div className="f6 gray3 fw-bold">Font Weight Options</div>
              <div className="f5 mono">{item.d}</div>
            </div>
          </React.Fragment>
        );
      })}

      <h2 className="mt10 fw-bold half-1">Source Code Pro</h2>
      <a
        href="https://fonts.google.com/specimen/Source+Code+Pro"
        className="f2 mt10 fw-bold half-2"
      >
        {"-> Source"}
      </a>
      {scale.map(item => {
        return (
          <React.Fragment>
            <div className="full mt8 mb4 bt1 b-gray2 pt4">
              <div className="f6 gray3 fw-bold mb2">Sample</div>
              <div className={`${item.size} full mono`}>{item.sample}</div>
            </div>
            <div className="fourth-1-ns half-1">
              <div className="f6 gray3 fw-bold">Classes</div>
              <div className="f5 mono">{item.a}</div>
            </div>
            <div className="fourth-2-ns half-2">
              <div className="f6 gray3 fw-bold">Font Size</div>
              <div className="f5 mono">{item.b}</div>
            </div>
            <div className="fourth-3-ns half-1">
              <div className="f6 gray3 fw-bold">Line Height</div>
              <div className="f5 mono">{item.c}</div>
            </div>
            <div className="fourth-4-ns half-2">
              <div className="f6 gray3 fw-bold">Font Weight Options</div>
              <div className="f5 mono">{item.d}</div>
            </div>
          </React.Fragment>
        );
      })}

      <h2 className="mt10 mb6 fw-bold full">Measure</h2>
      <p className="p measure-narrow full pt4">
        I/O is inherently impure: input operations undermine referential
        transparency, and output operations create side effects. Nevertheless,
        there is a sense in which function can perform input or output and still
        be pure, if the sequence of operations on the relevant I/O devices is
        modeled explicitly as both an argument and a result, and I/O operations
        are taken to fail when the input sequence does not describe the
        operations actually taken since the program began execution.
      </p>
      <div className="fourth-1-ns half-1">
        <div className="f6 gray3 fw-bold">Class</div>
        <div className="f5 mono">.measure-narrow</div>
      </div>
      <div className="fourth-2-ns half-2">
        <div className="f6 gray3 fw-bold">Width</div>
        <div className="f5 mono">20rem</div>
      </div>

      <p className="p measure full pt4">
        I/O is inherently impure: input operations undermine referential
        transparency, and output operations create side effects. Nevertheless,
        there is a sense in which function can perform input or output and still
        be pure, if the sequence of operations on the relevant I/O devices is
        modeled explicitly as both an argument and a result, and I/O operations
        are taken to fail when the input sequence does not describe the
        operations actually taken since the program began execution.
      </p>
      <div className="fourth-1-ns half-1">
        <div className="f6 gray3 fw-bold">Class</div>
        <div className="f5 mono">.measure</div>
      </div>
      <div className="fourth-2-ns half-2">
        <div className="f6 gray3 fw-bold">Width</div>
        <div className="f5 mono">30rem</div>
      </div>

      <p className="p measure-wide full pt4">
        I/O is inherently impure: input operations undermine referential
        transparency, and output operations create side effects. Nevertheless,
        there is a sense in which function can perform input or output and still
        be pure, if the sequence of operations on the relevant I/O devices is
        modeled explicitly as both an argument and a result, and I/O operations
        are taken to fail when the input sequence does not describe the
        operations actually taken since the program began execution.
      </p>
      <div className="fourth-1-ns half-1">
        <div className="f6 gray3 fw-bold">Class</div>
        <div className="f5 mono">.measure-wide</div>
      </div>
      <div className="fourth-2-ns half-2">
        <div className="f6 gray3 fw-bold">Width</div>
        <div className="f5 mono">34rem</div>
      </div>

      <h2 className="mt10 mb6 fw-bold full">Markdown</h2>
      <p className="p measure full">
        We isolate vertical padding and margin to the{" "}
        <code className="bg-gray2 p1 r2 mono">.md</code> container class. This
        way the typescale can be used in applications that are not
        publishing-centric, like many apps and interfaces.
      </p>
      <div className="md full ph8 b1 b-gray3 b-gray3 r2">
        <h1>Principles of Nock</h1>
        <code>nock(a) *a</code>
        <p>
          Nock is a{" "}
          <a href="https://en.wikipedia.org/wiki/Pure_function">pure</a>{" "}
          (stateless) function from noun to noun. We express this with the
          prefix operator <code>*</code> in our pseudocode.
        </p>
        <p>
          This function is defined for every noun, but on many nouns it does
          nothing useful. For instance, if <code>a</code> is an atom,{" "}
          <code>*a</code> reduces to... <code>*a</code>. In theory, this means
          that Nock spins forever in an infinite loop. In other words, Nock
          produces no result - and in practice, your interpreter will stop.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Typescale;
