export const getPoint = (
  index: number,
  value: number,
  radius: number,
  angle: number,
  center: number
) => {
  const pointAngle = angle * index - Math.PI / 2;
  const pointRadius = (value / 100) * radius;
  return {
    x: center + pointRadius * Math.cos(pointAngle),
    y: center + pointRadius * Math.sin(pointAngle),
  };
};
