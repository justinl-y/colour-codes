const convertRgbaToHsla = ([r, g, b, a]) => {
  let l = 0;
  let h = 0;
  let s = 0;

  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  // l
  l = (max + min) / 2;

  // s
  if (max === min) {
    s = 0;
  } else if (l < 0.5) {
    s = (max - min) / (max + min);
  } else {
    s = (max - min) / (2 - max - min);
  }

  // h
  if (r === max) {
    h = (g - b) / (max - min);
  } else if (g === max) {
    h = 2 + ((b - r) / (max - min));
  } else if (b === max) {
    h = 4 + ((r - g) / (max - min));
  }

  h *= 60;

  if (h < 0) {
    h += 360;
  }

  // format
  h = h.toFixed(0);
  s = (s * 100).toFixed(0);
  l = (l * 100).toFixed(0);

  return `hsla(${h}, ${s}%, ${l}%, ${a})`;
};

const convertRgbaToHex = (rgbaArray) => {
  const hex = rgbaArray.slice(0, 3)
    .map(x => Number.parseInt(x, 10)) // convert to integer
    .map((x) => {
      const hexCode = x.toString(16);  // returns number in base 16 - hex

      return hexCode.length === 1 ? `0${hexCode}` : hexCode;
    }) // adds 0 to length 1 values
    .join('');

  return `#${hex}`;
};

const createRGBA = () => {
  const rgba = [];
  const iterations = 3;
  const rgbaMax = 256;
  let i = 0;

  while (i <= iterations) {
    if (i < iterations) {
      rgba.push(Math.floor(Math.random() * rgbaMax));
    } else {
      rgba.push(parseFloat(Math.random().toFixed(1)));
    }

    i += 1;
  }

  return { raw: rgba, formatted: `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${rgba[3]})` };
};

const createRandomColourFormats = () => {
  const rgba = createRGBA();

  const colours = [
    rgba.formatted, // rgba
    convertRgbaToHex(rgba.raw), // hex
    convertRgbaToHsla(rgba.raw), // hsla
  ];

  return colours;
};

export default { get: createRandomColourFormats };
