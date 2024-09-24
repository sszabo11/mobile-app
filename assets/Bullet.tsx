import Svg, { Circle, Rect } from "react-native-svg";

export default function Bullet() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={12}
      fill="none"
    >
      <Rect width={12} height={12} fill="#000" rx={3} />
      <Circle cx={6} cy={6} r={2} fill="#fff" />
    </Svg>
  )
}
