import React, { useState, useEffect, useRef } from 'react';
import './App.css'; 

const messages = [
  "获得 xxx",
  "恭喜 aaa 获得 xxx2",
  "恭喜 aaa 获得 xxx3",
  "恭喜 aaa 获得 xxx4",
  "恭喜 aaa 获得 xxx5",
  "恭喜 aaa 获得 xxx",
  "恭喜 aaa 获得 xxx2",
  "恭喜 aaa 获得 xxx3",
  "恭喜 aaa 获得 xxx4",
  "恭喜 aaa 获得 xxx5"
];

export default function ScrollData() {
  const [wrapWidth, setWrapWidth] = useState(0);
  const [offset, setOffset] = useState(0);
  const wrapRef = useRef(null);
  const speed = 1;

  let animationFrameId;


  useEffect(() => {
    const wrapWidth = messages.length * 180;
    setWrapWidth(wrapWidth);
    const move = () => {
      window.requestAnimationFrame(() => {
        setOffset((offset) => {
          if (-offset === Math.floor(wrapWidth / 2)) {
            return 0;
          }
          return offset - speed;
        });
        move();
      });
    };
    move();
    return () => {
        window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="App">
      <div className="wrap">
        <div
          className="msg-wrap"
          ref={wrapRef}
          style={{
            width: `${wrapWidth}px`,
            transform: `translateY(${offset}px)`
          }}
        >
          {messages.map((msg, i) => (
            <div className="msg-item" key={i}>
              {msg}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
