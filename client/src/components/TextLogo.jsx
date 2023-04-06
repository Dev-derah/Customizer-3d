import React, { useState, useRef } from "react";
import { SketchPicker } from "react-color";
import CustomButton from "./CustomButton";
import { useSnapshot } from "valtio";
import * as htmlToImage from "html-to-image";
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from "html-to-image";

import state from "../store";

const TextLogo = () => {
  const snap = useSnapshot(state);
  const [text, setText] = useState("");
  const textRef = useRef(null);

  const convertToImage = () => {
    if (textRef.current.innerText) {
      htmlToImage
        .toPng(textRef.current)
        .then((dataUrl) => {
          state.TextDecal = dataUrl;
          console.log(dataUrl, textRef.current, state);
        })

        .catch((error) => {
          console.error("Error converting text to image", error);
        });
    } else {
      alert("Text cannot be blank");
    }
  };
  const handleChange = (TextColor) => {
    state.TextColor = TextColor.hex;
    convertToImage();
  };

  return (
    <div className="textLogo-container">
      <input
        placeholder="input your brand name"
        className="textLogo-input rounded-md"
        autoFocus
        onChange={(e) => setText(e.target.value)}
        maxLength={12}
      />
      {console.log(text)}
      <div>
        <SketchPicker
          presetColors={[
            "#ffffff",
            "#ccc",
            "#EFBD4E",
            "#80C670",
            "#726DE8",
            "#353934",
            "#2ccce4",
            "#FF8A65",
            "#7098DA",
            "#FF96AD",
            "#DB5719",
            "#89375F",
            "#FFD93D",
            "#851e3e",
            "#ffeead",
            "#008744",
            "#0081B4",
            "#FB2576",
          ]}
          TextColor={snap.TextColor}
          className="text-color-picker mt-2 "
          onChange={(TextColor) => handleChange(TextColor)}
          disableAlpha
        />
        {/* <div className="w-full mt-1 flex items-start justify-between">
          <div className="flex gap-1">
            <label className="text-xs">Text</label>
            <input type="checkbox" />
          </div>

          <div className="flex gap-1">
            <label className="text-xs">Background</label>
            <input type="checkbox" />
          </div>
        </div> */}
        <CustomButton
          type="filled"
          title="Save"
          handleClick={() => convertToImage()}
          customStyles="text-xs w-full mt-3"
        />
      </div>
      <p
        style={{ color: state.TextColor }}
        className=" text h-max w-max p-2 text-center text-2xl "
        ref={textRef}
      >
        {text}
      </p>
    </div>
  );
};

export default TextLogo;
