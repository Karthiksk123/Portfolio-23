import React from "react";
import { timeline } from "motion";
import { useEffect, useRef } from "react";
import './Loader.scss'

const Loader = () => {
  function getSectionHeight(element) {
    const { height } = element.getBoundingClientRect();
    const { childElementCount } = element;
    return height / childElementCount;
  }

  const countRef = useRef(null);
  const countRef2 = useRef(null);
  const loaderRef = useRef(null);

  useEffect(() => {
    if (countRef.current && countRef2.current && loaderRef.current) {
      const transformAmount = getSectionHeight(countRef.current);

      const sequence1 = new Array(3).fill("").flatMap((_, index) => [
        [countRef.current, { y: `-${transformAmount * (index + 1)}px` }],
        [
          countRef2.current,
          { y: `-${transformAmount * (index + 1)}px` },
          { at: "-1.8" },
        ],
      ]);

      timeline(sequence1, {
        defaultOptions: { easing: [0.77, 0, 0.175, 1], duration: 2 },
      });
    }
  }, []);

  useEffect(() => {
    const sequence2 = [
      [countRef.current, { opacity: 0 }, { at: "<" }],
      [countRef2.current, { opacity: 0 }, { at: "<" }],
      [loaderRef.current, { y: "-100vh" }, { at: "-0.5" }],
    ];

    timeline(sequence2, {
      defaultOptions: { easing: [0.77, 0, 0.175, 1], duration: 1, delay: 7 },
    });
  }, []);
  return (
    <div>
      <div className="loader-container" ref={loaderRef}>
        <div className="counter-container">
          <ul className="counter-list" ref={countRef}>
            <li>
              <h3>2</h3>
            </li>
            <li>
              <h3>4</h3>
            </li>
            <li>
              <h3>6</h3>
            </li>
            <li>
              <h3>9</h3>
            </li>
          </ul>
        </div>

        <div className="counter-container">
          <ul className="counter-list" ref={countRef2}>
            <li>
              <h3>3</h3>
            </li>
            <li>
              <h3>9</h3>
            </li>
            <li>
              <h3>8</h3>
            </li>
            <li>
              <h3>9</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Loader;
