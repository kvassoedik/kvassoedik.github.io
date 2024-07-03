import { Link, Outlet} from "react-router-dom";
import "../styles/nav.css"

export default function Navigation() {
    return (
        <>
        <aside>
            <nav id="main-nav">
                        <Link to="/">Main page</Link>

                        <Link to="/about">About me</Link>
                        <Link to="/projects">Portfolio</Link>

            </nav>
            <nav id="sec-nav">
                <Link to="/comics">Comics</Link>
            </nav>

        </aside>
            <Outlet />
        </>
    );
}