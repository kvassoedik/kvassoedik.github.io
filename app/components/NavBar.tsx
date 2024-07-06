import "./styles/nav.css";

export default function NavBar() {
  return (
    <aside>
      <nav id="main-nav">
        <a href="/">Main page</a>
        <a href="/about">About me</a>
        <a href="/projects">Portfolio</a>
      </nav>
      <nav id="sec-nav">
        <a href="/comics">Comics</a>
      </nav>
    </aside>
  );
}
