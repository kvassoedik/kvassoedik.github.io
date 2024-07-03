import "../styles/header.css"

type Props = {
    title : string,
}

export default function Header(props: Props) {
    return(
        <header><h1>{props.title}</h1></header>
    )
}