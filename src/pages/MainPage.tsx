import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import setFooterLinks from "../functions/setFooterLinks.tsx";
import "../styles/index.css"
import "../styles/main.css"


export default function MainPage() {
    const footerLinks : Array<Map<string, string>> = setFooterLinks();
    
    return (
        <>
        <Header title="Anna's site" />
        <main>
        <div id="box-main">
        <p>Hi! I'm a first-year bachelor student at Innopolis University. I study Information Systems Engineering. </p>
        <p>I've been fond of programming since childhood, but my real studies in it began in 10th grade. Since then, I fell in 
            love with programming even more. I love learning and doing new things in all spheres!</p>
        <p>In my spare time, I sometimes draw and play various computer games! </p>
        <img src="../media/icons/capy.png" id="pic" alt="Capybara" />
        </div>
        </main>
        <Footer links={footerLinks}/>
        </>
    )
}