import "./styles/nav.css";

export default function NavBar() {
  return (
    <aside>
      <nav id="main-nav">
        <a href="/">Main page</a>
        <a href="/routes/about">About me</a>
        <a href="/routes/projects">Portfolio</a>
      </nav>
      <nav id="sec-nav">
        <a href="/routes/comics">Comics</a>
      </nav>
    </aside>
  );
}
