import { StyleSheet, Text, View } from 'react-native';
import { SkillGraph } from 'react-native-skill-graph';
import type { SkillsArray } from '../../src/types';

const DATA: SkillsArray = [
  { name: 'Dodge', value: 100 },
  { name: 'Dodge', value: 85 },
  { name: 'Dodge', value: 65 },
  { name: 'Dodge', value: 45 },
  { name: 'Dodge', value: 54 },
  { name: 'Dodge', value: 54 },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Skill Graph Example</Text>
      <SkillGraph skills={DATA} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { marginBottom: 40, fontSize: 32 },
});
