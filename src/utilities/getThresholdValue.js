export const getThresholdValue = (ref) =>
  Math.ceil(
    7 /
      window
        .getComputedStyle(ref.current)
        .getPropertyValue("grid-template-columns")
        .split(" ").length
  ) *
  window
    .getComputedStyle(ref.current)
    .getPropertyValue("grid-template-columns")
    .split(" ").length;
