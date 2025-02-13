import { StyleSheet, Text } from 'react-native';
import { MAX_VALUE } from '../Constants';
import type { CommonPathProps } from '../types';
import { getPoint } from '../utils';

export const Labels = ({ radius, angle, center, skills }: CommonPathProps) => {
  return skills.map(({ name }, i) => {
    const { x, y } = getPoint(i, MAX_VALUE + 25, radius, angle, center);
    return (
      <Text key={i} style={[styles.label, { left: x - 20, top: y }]}>
        {name}
      </Text>
    );
  });
};

const styles = StyleSheet.create({
  label: {
    position: 'absolute',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
});
