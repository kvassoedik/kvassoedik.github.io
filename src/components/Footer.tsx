import "../styles/footer.css"

type Props = {
    links : Array<Map<string, string>>,
}

export default function Footer(props : Props) {
    const iterLinks = (x: Map<string, string>) => <a href={x.get("href")} id={x.get("id")}><img src={x.get("src")} className={x.get("class")} alt={x.get("alt")}/></a>;
    return (
        <footer>
        <div>
            {props.links.map(iterLinks)}
        </div>
        </footer>
    );
}