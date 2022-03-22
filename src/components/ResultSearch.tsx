import { useNavigate } from "react-router-dom";

type ResultSearchProps = {
  id: string;
  title: string;
  description: string;
};

export function ResultsSearch(props: ResultSearchProps) {

  const navigate = useNavigate();
  return (
    <div id="results-search" onClick={() => navigate(`/article/${props.id}`)}>
      <div className="article" id={props.id}>
        <div className="title">{props.title}</div>
        <div className="description">{props.description}</div>
      </div>
    </div>
  );
}
