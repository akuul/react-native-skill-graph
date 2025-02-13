import { Path, Skia } from '@shopify/react-native-skia';
import { useMemo } from 'react';
import type { CommonPathProps } from '../types';
import { getPoint } from '../utils';

export interface SkillsPathProps {
  pathColor?: string;
}

export const SkillsPath = ({
  radius,
  angle,
  center,
  skills,
  pathColor = '#00000050',
}: SkillsPathProps & CommonPathProps) => {
  const skillPath = useMemo(() => {
    const path = Skia.Path.Make();
    const firstPoint = getPoint(0, skills[0].value, radius, angle, center);
    path.moveTo(firstPoint.x, firstPoint.y);

    skills.forEach(({ value }, i) => {
      const point = getPoint(i, value, radius, angle, center);
      path.lineTo(point.x, point.y);
    });

    path.close();
    return path;
  }, [angle, center, radius, skills]);

  return <Path path={skillPath} color={pathColor} style="fill" />;
};
