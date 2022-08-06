import React from "react";

export default function Bubble() {
  const listI = [
    "--i:11",
    "--i:13",
    "--i:24",
    "--i:10",
    "--i:14",
    "--i:23",
    "--i:16",
    "--i:18",
    "--i:20",
    "--i:16",
    "--i:12",
    "--i:15",
    "--i:17",
    "--i:26",
    "--i:28",
    "--i:24",
    "--i:19",
    "--i:21",
    "--i:26",
    "--i:29",
    "--i:30",
    "--i:31",
    "--i:32",
    "--i:33",
    "--i:27",
    "--i:19",
    "--i:12",
  ];
  return (
    <div className="bubble">
      {listI.map((item, index) => (
        <span
          className={item}
          key={index}
          style={{
            item,
            animationDuration: `calc( 120s / ${item.substring(4, 6)})`,
          }}
        ></span>
      ))}
    </div>
  );
}
