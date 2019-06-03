import React, { Component } from "react";
import { BH, Link, H } from "../components/Components";

const Typescale = () => {
  return (
    <div className="grid12 ph8 ph32-lg bb1 pt4 pb9">
      <div>
        <h1 className="mv6 fw-bold c1-13" id="intro">
          Typescale
        </h1>
        <p className="p mb8 measure c1-13">
          We needed a simple, proportional typescale that didn't have a lot of
          attitude. We want to stand out for what we do, not how we look.
        </p>
        <h2 className="fw-bold">Headers</h2>
        <div className="flex-row mb4 align-end">
          <div className="flex-col self-center w30 mr4">
            <div className="caption">H1 Large</div>
            <div className="caption mono gray-50">.f1l, .t1</div>
          </div>
          <div className="f1l">Hello World</div>
        </div>

        <div className="flex-row mb4 align-end">
          <div className="flex-col self-center w30 mr4">
            <div className="caption">H1</div>
            <div className="caption mono gray-50">.f1, .t2</div>
          </div>
          <div className="f1">Hello World</div>
        </div>

        <div className="flex-row mb4 align-end">
          <div className="flex-col self-center w30 mr4">
            <div className="caption">H1 Mono</div>
            <div className="caption mono gray-50">.f1 .</div>
          </div>
          <div className="f1 mono">Hello World</div>
        </div>

        <div className="flex-row mb4 align-end">
          <div className="flex-col self-center w30 mr4">
            <div className="caption">H2</div>
            <div className="caption mono gray-50">.f2</div>
          </div>
          <div className="f2">Hello World</div>
        </div>

        <div className="flex-row mb4 align-end">
          <div className="flex-col self-center w30 mr4">
            <div className="caption">H2 Mono</div>
            <div className="caption mono gray-50">.f2</div>
          </div>
          <div className="f2 mono">Hello World</div>
        </div>

        <div className="flex-row mb4 align-end">
          <div className="flex-col self-center w30 mr4">
            <div className="caption">H3</div>
            <div className="caption mono gray-50">.f3, .t4</div>
          </div>
          <div className="f3">Hello World</div>
        </div>

        <div className="flex-row mb4 align-end">
          <div className="flex-col self-center w30 mr4">
            <div className="caption">H3 Mono</div>
            <div className="caption mono gray-50">.f3, .t4, .mono</div>
          </div>
          <div className="f3 mono">Hello World</div>
        </div>

        <div className="flex-row mb4 align-end">
          <div className="flex-col self-center w30 mr4">
            <div className="caption">H4</div>
            <div className="caption mono gray-50">.f4</div>
          </div>
          <div className="f4">Hello World</div>
        </div>

        <div className="flex-row mb4 align-end">
          <div className="flex-col self-center w30 mr4">
            <div className="caption">H4 Mono</div>
            <div className="caption mono gray-50">.f4</div>
          </div>
          <div className="f4 mono">Hello World</div>
        </div>

        <div className="f2 mb4 pt16">Body Text</div>
        <div className="flex-row mb4">
          <div className="flex-col self-start w30 mr4">
            <div className="caption">Paragraph Large</div>
            <div className="caption mono gray-50">.pl</div>
          </div>
          <div className="pl gray-80 measure-wide mb4">
            I underwent, during the summer that I became fourteen, a prolonged
            religious crisis. I use “religious” in the common, and arbitrary,
            sense, meaning that I then discovered God, His saints and angels,
            and His blazing Hell. And since I had been born in a Christian
            nation, I accepted this Deity as the only one. I supposed Him to
            exist only within the walls of a church—in fact, of our church—and I
            also supposed that God and safety were synonymous. The word “safety”
            brings us to the real meaning of the word “religious” as we use it.
            Therefore, to state it in another, more accurate way, I became,
            during my fourteenth year, for the first time in my life,
            afraid—afraid of the evil within me and afraid of the evil without.
            What I saw around me that summer in Harlem was what I had always
            seen; nothing had changed.{" "}
          </div>
        </div>
        <div className="flex-row mb4">
          <div className="flex-col self-start w30 mr4">
            <div className="caption">Paragraph</div>
            <div className="caption mono gray-50">.p</div>
          </div>
          <div className="p measure">
            But now, without any warning, the whores and pimps and racketeers on
            the Avenue had become a personal menace. It had not before occurred
            to me that I could become one of them, but now I realized that we
            had been produced by the same circumstances. Many of my comrades
            were clearly headed for the Avenue, and my father said that I was
            headed that way, too. My friends began to drink and smoke, and
            embarked—at first avid, then groaning—on their sexual careers.
            Girls, only slightly older than I was, who sang in the choir or
            taught Sunday school, the children of holy parents, underwent,
            before my eyes, their incredible metamorphosis, of which the most
            bewildering aspect was not their budding breasts or their rounding
            behinds but something deeper and more subtle, in their eyes, their
            heat, their odor, and the inflection of their voices. Like the
            strangers on the Avenue, they became, in the twinkling of an eye,
            unutterably different and fantastically present.
          </div>
          <div className="markdown container ml8">
            <article className="content">
              <h1>Installing Urbit</h1>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typescale;
