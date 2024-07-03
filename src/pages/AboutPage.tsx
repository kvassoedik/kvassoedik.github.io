import AboutList from "../components/AboutList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import setFooterLinks from "../functions/setFooterLinks";
import "../styles/main.css"

export default function AboutPage() {
    const footerLinks : Array<Map<string, string>> = setFooterLinks();

    return (
        <>
        <Header title="About me"/>
        <div id="box">
            <AboutList title="Hard skills" list={["Python: high level", "C++: middle level", "Java: middle level", "Frameworks: PyQt5, SQLite"]} />
            <AboutList title="Soft skills" list={["Friendliness", "Fast and initiative learning of new things", "Communication in a team"]} />
            <AboutList title="Language skills" list={["Russian: native", "English: C1", "Japanese: beginner"]} />
            <AboutList title="Other interests" list={["Spheres: game development", "Games: Genshin Impact, Stardew Valley, Destiny 2", "Books: detectives, classics"]} />
        </div>
        <Footer links={footerLinks}/>
        </>
    )
}