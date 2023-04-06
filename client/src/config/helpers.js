export const downloadCanvasToImage = () => {
  const canvas = document.querySelector("canvas");
  const dataURL = canvas.toDataURL();
  const link = document.createElement("a");

  link.href = dataURL;
  link.download = "Shirt_Design.png";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const reader = (file) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = () => resolve(fileReader.result);
    fileReader.readAsDataURL(file);
  });

export const getContrastingColor = (color) => {
  // Remove the '#' character if it exists
  const hex = color.replace("#", "");

  // Convert the hex string to RGB values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Calculate the brightness of the color
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  // Return black or white depending on the brightness
  return brightness > 128 ? "black" : "white";
};



  // export const convertToImage = ({Texlogo}) => {
  //   const node = document.getElementById("text");
  //   htmlToImage
  //     .toPng(node)
  //     .then(function (dataUrl) {
  //       const img = new Image();
  //       Texlogo = dataUrl;
  //       document.body.appendChild(img);
  //     })
  //     .catch(function (error) {
  //       console.error("oops, something went wrong!", error);
  //     });
  // };

  // return (
  //   <div>
  //     <textarea onChange={(e) => setText(e.target.value)} />
  //     <button onClick={convertToImage}>Convert to Image</button>
  //     <div id="text">{text}</div>
  //   </div>
  // );}


// const convertToImage = () => {
//   htmlToImage
//     .toPng(textRef.current)
//     .then((dataUrl) => {
//       // do something with the dataUrl, such as displaying it in an img element
//     })
//     .catch((error) => {
//       console.error("Error converting text to image", error);
//     });
// };