import { proxy } from "valtio";
const state = proxy({
  intro: true,
  color: "#EFBD48",
  TextDecal:
    "data:image/png;base64,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",
  TextColor: "#000000",
  TextSize: "",
  IsTextTexture: true,
  IsLogoTexture: true,
  IsFullTexture: true,
  downloadShirt: true,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;