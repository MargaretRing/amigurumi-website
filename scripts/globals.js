let spheres = [];
let selectedSphere = null;
let idCounter = 0;
let dragging = null;
let offsetX = 0;
let offsetY = 0;

const COLORS = [
    { name: "red",    hex: "#FFADAD" },
    { name: "redDark",    hex: "#5F1111" },
    { name: "orange", hex: "#FFBA66" },
    { name: "orangeDark", hex: "#522D00" },
    { name: "yellow", hex: "#FFEEA3" },
    { name: "yellowDark", hex: "#5C4D00" },
    { name: "green",  hex: "#76E576" },
    { name: "greenDark",  hex: "#0B420B" },
    { name: "blue",   hex: "#99D5FF" },
    { name: "blueDark",   hex: "#003961" },
    { name: "purple", hex: "#D1A6FC" },
    { name: "purpleDark", hex: "#3D0477" },
    { name: "black",  hex: "#969696" },
    { name: "blackDark",  hex: "#000000" },
    { name: "brown",  hex: "#D28965" },
    { name: "brownDark",  hex: "#0A0A0A" },
    { name: "white",  hex: "#FFFFFF" },
    { name: "whiteDark",  hex: "#575757" },
    { name: "gray",   hex: "#E8E8E8" },
    { name: "grayDark",   hex: "#4A4A4A" },
    { name: "pink",   hex: "#FFBDD3" },
    { name: "pinkDark",   hex: "#7A0029" },
    { name: "beige",  hex: "#F2DCC5" },
    { name: "beigeDark",  hex: "#5C3A14" },
];