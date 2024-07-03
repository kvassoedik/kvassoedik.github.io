import ComicsGenerator from "../components/ComicsGenerator";
import Footer from "../components/Footer";
import Header from "../components/Header";
import setFooterLinks from "../functions/setFooterLinks";
import "../styles/main.css"
import "../styles/comics.css"

export default function Comics() {
    const footerLinks : Array<Map<string, string>> = setFooterLinks();

    return(
        <>
        <Header title="Comics"/>
        <ComicsGenerator />
        <Footer links={footerLinks} />
        </>
    );
}