import AboutList from "@/app/components/AboutList";
import "@/app/styles/main.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
  description: "On this page, I write about my current stack and interests."
};

export default function AboutPage() {
  return (
    <div id="box">
      <AboutList
        title="Hard skills"
        list={[
          "Python: high level",
          "C++: middle level",
          "Java: middle level",
          "Frameworks: PyQt5, SQLite",
        ]}
      />
      <AboutList
        title="Soft skills"
        list={[
          "Friendliness",
          "Fast and initiative learning of new things",
          "Communication in a team",
        ]}
      />
      <AboutList
        title="Language skills"
        list={["Russian: native", "English: C1", "Japanese: beginner"]}
      />
      <AboutList
        title="Other interests"
        list={[
          "Spheres: game development",
          "Games: Genshin Impact, Stardew Valley, Destiny 2",
          "Books: detectives, classics",
        ]}
      />
    </div>
  );
}
