import { useNavigate } from "react-router-dom";
import "./styles.scss";

interface Props {
  id: string;
  title: string;
  description: string;
}

export function SearchResult({ id, title, description }: Props) {
  const navigate = useNavigate();

  return (
    <div id="search-result" onClick={() => navigate(`/article/${id}`)}>
      <div className="article" id={id}>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}
