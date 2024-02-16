export const getBoxShadow = (shadows) => {
  let boxShadow = "";
  shadows.forEach((shadow, index) => {
    if (shadow.active) {
      shadow.inputs.forEach((input) => {
        if (input.type === "range") boxShadow += `${input.value}px `;
        else if (input.type === "color") boxShadow += input.value;
      });
      if (shadow.inset) boxShadow += " inset";
      if (index < shadows.length - 1) boxShadow += ",";
    }
  });
  console.log(boxShadow);
  return boxShadow;
};
