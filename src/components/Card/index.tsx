import { useNavigate } from "react-router-dom";
import "./styles.scss";

interface Props {
  id: string;
  icon?: JSX.Element;
  text: string;
}

export function Card({ id, icon, text }: Props) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/article/${id}`)}>
      {icon}
      <div>{text}</div>
    </div>
  );
}
