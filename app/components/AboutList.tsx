type Props = {
  title: string;
  list: Array<string>;
};

export default function AboutList(props: Props) {
  const iterList = (x: string) => <li>{x}</li>;
  return (
    <div className="info">
      <h2>{props.title}</h2>
      <ul>{props.list.map(iterList)}</ul>
    </div>
  );
}
