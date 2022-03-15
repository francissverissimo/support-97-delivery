import "../styles/card.scss";

type CardProps = {
  iconClass?: string;
  text: string;
}

export function Card(props: CardProps) {
  return (
    <div className="card">
      <i className={props.iconClass}></i>
      <div>{props.text}</div>
    </div>
  );
}