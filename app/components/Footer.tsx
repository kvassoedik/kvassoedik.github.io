import Image from "next/image";
import "./styles/footer.css";

type Props = {
  links: Array<Map<string, string>>;
};

export default function Footer(props: Props) {
  const iterLinks = (x: Map<string, string>) => (
    <a href={x.get("href")} id={x.get("id")}>
      <Image
        src={x.get("src") as string}
        className={x.get("class")}
        alt={x.get("alt") as string}
        width="100"
        height="100"
      />
    </a>
  );
  return (
    <footer>
      <div>{props.links.map(iterLinks)}</div>
    </footer>
  );
}
