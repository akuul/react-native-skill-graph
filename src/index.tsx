import { Canvas } from '@shopify/react-native-skia';
import { View } from 'react-native';
import { GridPaths, type GridPathProps } from './components/GridPath';
import { Labels } from './components/Labels';
import { SkillsPath, type SkillsPathProps } from './components/SkillsPath';
import type { SkillsArray } from './types';

interface SkillGraphProps extends SkillsPathProps, GridPathProps {
  skills: SkillsArray;
  size?: number;
  withoutGrid?: boolean;
}

export const SkillGraph = ({
  skills,
  size = 300,
  withoutGrid = false,
  pathColor,
  gridColor,
  gridFactor,
}: SkillGraphProps) => {
  const CENTER = size / 2;
  const NUM_SIDES = skills.length;
  const RADIUS = CENTER * 0.8;
  const ANGLE = (2 * Math.PI) / NUM_SIDES;

  return (
    <View>
      <Canvas style={{ width: size, height: size }}>
        {!withoutGrid && (
          <GridPaths
            radius={RADIUS}
            angle={ANGLE}
            center={CENTER}
            skills={skills}
            gridColor={gridColor}
            gridFactor={gridFactor}
          />
        )}
        <SkillsPath
          radius={RADIUS}
          angle={ANGLE}
          center={CENTER}
          skills={skills}
          pathColor={pathColor}
        />
      </Canvas>
      <Labels radius={RADIUS} angle={ANGLE} center={CENTER} skills={skills} />
    </View>
  );
};
