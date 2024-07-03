type Props = {
    title : string,
    description : string,
}

export default function PortfolioProject(props : Props) {
    return (
        <div className="info">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    )
}