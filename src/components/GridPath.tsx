import { Path, Skia } from '@shopify/react-native-skia';
import { useMemo } from 'react';
import { MAX_VALUE } from '../Constants';
import type { CommonPathProps } from '../types';
import { getPoint } from '../utils';

export interface GridPathProps {
  gridColor?: string;
  gridFactor?: [...number[], 1];
}

export const GridPaths = ({
  radius,
  angle,
  center,
  skills,
  gridColor = 'lightgray',
  gridFactor = [0.25, 0.5, 0.75, 1],
}: GridPathProps & CommonPathProps) => {
  const gridPaths = useMemo(() => {
    return gridFactor.map((factor) => {
      const path = Skia.Path.Make();
      const firstPoint = getPoint(0, MAX_VALUE * factor, radius, angle, center);
      path.moveTo(firstPoint.x, firstPoint.y);

      skills.forEach((_, i) => {
        const point = getPoint(i, MAX_VALUE * factor, radius, angle, center);
        path.lineTo(point.x, point.y);
      });

      path.close();
      return path;
    });
  }, [angle, center, radius, skills, gridFactor]);

  return gridPaths.map((gridPath, i) => (
    <Path
      key={i}
      path={gridPath}
      color={gridColor}
      strokeWidth={1}
      style="stroke"
      strokeJoin="round"
    />
  ));
};
