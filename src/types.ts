type NonEmptyArray<T> = [T, ...T[]];
interface Skill {
  name: string;
  value: number;
}

export type SkillsArray = NonEmptyArray<Skill>;

export interface CommonPathProps {
  radius: number;
  angle: number;
  center: number;
  skills: SkillsArray;
}
