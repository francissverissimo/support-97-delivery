import { useNavigate } from "react-router-dom";
import "../styles/card.scss";

type CardProps = {
  id: string;
  iconClass?: string;
  text: string;
};

export function Card(props: CardProps) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/article/${props.id}`)}>
      <i className={props.iconClass}></i>
      <div>{props.text}</div>
    </div>
  );
}
