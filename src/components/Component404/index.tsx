import { House } from "phosphor-react";
import image404 from "../../assets/images/404.svg";
import "./styles.scss";

interface Props {
  text: string;
}

export function Component404({ text }: Props) {
  return (
    <div id="not-found">
      <h1>{text}</h1>

      <a href="/">
        <button>
          <House size={32} /> {"Ir para o início"}
        </button>
      </a>

      <img src={image404} alt="illustration 404 not found" />
    </div>
  );
}
