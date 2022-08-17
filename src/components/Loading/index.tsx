import { Circle, CircleDashed, CircleNotch } from "phosphor-react";
import "./styles.scss";

export function Loading() {
  return (
    <div id="loading">
      <CircleNotch className="circle-notch" />

      <div className="div-middle">
        <Circle className="circle" />
      </div>

      <CircleDashed className="circle-dashed" />
    </div>
  );
}
