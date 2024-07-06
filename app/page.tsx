import Image from "next/image";
import "./styles/index.css";
import "./styles/main.css";

export default function MainPage() {
  return (
    <>
      <main>
        <div id="box-main">
          <p>
            Hi! I&apos;m a first-year bachelor student at Innopolis University.
            I study Information Systems Engineering.{" "}
          </p>
          <p>
            I&apos;ve been fond of programming since childhood, but my real
            studies in it began in 10th grade. Since then, I fell in love with
            programming even more. I love learning and doing new things in all
            spheres!
          </p>
          <p>
            In my spare time, I sometimes draw and play various computer games!{" "}
          </p>
          <Image
            src="/icons/capy.png"
            id="pic"
            alt="Capybara"
            width="100"
            height="100"
          />
        </div>
      </main>
    </>
  );
}
