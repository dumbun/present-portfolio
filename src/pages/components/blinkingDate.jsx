"use client";

import { useEffect, useState } from "react";
import styled from "styled-components";

export default function BlinkingData() {
  var [date, setDate] = useState(Date());
  useEffect(() => setDate(Date()), []);
  function getDate() {
    setDate(Date());
  }
  setTimeout(getDate, 1000);
  return (
    <BlinkingDate
      id="blink"
      className="block mb-2 text-sm font-normal leading-none"
    >
      on going {date}
    </BlinkingDate>
  );
}

var BlinkingDate = styled.time`
  -webkit-animation: blink-text 1000ms linear infinite;
  -moz-animation: blink-text 1000ms linear infinite;
  -ms-animation: blink-text 1000ms linear infinite;
  -o-animation: blink-text 1000ms linear infinite;
  animation: blink-text 1400ms linear infinite;
  @-webkit-keyframes blink-text {
    0% {
      color: green;
      opacity: 1;
    }
    20% {
      color: green;
      opacity: 0.8;
    }
    30% {
      color: green;
      opacity: 0.6;
    }
    40% {
      color: green;
      opacity: 0.4;
    }
    50% {
      color: green;
      opacity: 0.2;
    }
    60% {
      color: green;
      opacity: 0;
    }
    70% {
      color: green;
      opacity: 0.2;
    }
    80% {
      color: green;
      opacity: 0.4;
    }
    90% {
      color: green;
      opacity: 0.6;
    }
    98% {
      color: green;
      opacity: 0.8;
    }
    100% {
      color: green;
      opacity: 1;
    }
  }
  @-moz-keyframes blink-text {
    0% {
      color: green;
      opacity: 1;
    }
    20% {
      color: green;
      opacity: 0.8;
    }
    30% {
      color: green;
      opacity: 0.6;
    }
    40% {
      color: green;
      opacity: 0.4;
    }
    50% {
      color: green;
      opacity: 0.2;
    }
    60% {
      color: green;
      opacity: 0;
    }
    70% {
      color: green;
      opacity: 0.2;
    }
    80% {
      color: green;
      opacity: 0.4;
    }
    90% {
      color: green;
      opacity: 0.6;
    }
    98% {
      color: green;
      opacity: 0.8;
    }
    100% {
      color: green;
      opacity: 1;
    }
  }
  @-ms-keyframes blink-text {
    0% {
      color: green;
      opacity: 1;
    }
    20% {
      color: green;
      opacity: 0.8;
    }
    30% {
      color: green;
      opacity: 0.6;
    }
    40% {
      color: green;
      opacity: 0.4;
    }
    50% {
      color: green;
      opacity: 0.2;
    }
    60% {
      color: green;
      opacity: 0;
    }
    70% {
      color: green;
      opacity: 0.2;
    }
    80% {
      color: green;
      opacity: 0.4;
    }
    90% {
      color: green;
      opacity: 0.6;
    }
    98% {
      color: green;
      opacity: 0.8;
    }
    100% {
      color: green;
      opacity: 1;
    }
  }
  @-o-keyframes blink-text {
    0% {
      color: green;
      opacity: 1;
    }
    20% {
      color: green;
      opacity: 0.8;
    }
    30% {
      color: green;
      opacity: 0.6;
    }
    40% {
      color: green;
      opacity: 0.4;
    }
    50% {
      color: green;
      opacity: 0.2;
    }
    60% {
      color: green;
      opacity: 0;
    }
    70% {
      color: green;
      opacity: 0.2;
    }
    80% {
      color: green;
      opacity: 0.4;
    }
    90% {
      color: green;
      opacity: 0.6;
    }
    98% {
      color: green;
      opacity: 0.8;
    }
    100% {
      color: green;
      opacity: 1;
    }
  }
  @keyframes blink-text {
    0% {
      color: green;
      opacity: 1;
    }
    20% {
      color: green;
      opacity: 0.8;
    }
    30% {
      color: green;
      opacity: 0.6;
    }
    40% {
      color: green;
      opacity: 0.4;
    }
    50% {
      color: green;
      opacity: 0.2;
    }
    60% {
      color: green;
      opacity: 0;
    }
    70% {
      color: green;
      opacity: 0.2;
    }
    80% {
      color: green;
      opacity: 0.4;
    }
    90% {
      color: green;
      opacity: 0.6;
    }
    98% {
      color: green;
      opacity: 0.8;
    }
    100% {
      color: green;
      opacity: 1;
    }
  }
`;
