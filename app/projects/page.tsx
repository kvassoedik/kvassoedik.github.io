import PortfolioProject from "@/app/components/PortfolioProject";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is the page with some of my done, ongoing and abandoned projects."
};

export default function PortfolioPage() {
  return (
    <div id="box">
      <PortfolioProject
        title="Training of Russian orthography"
        description="A desktop app that has rules and many test tasks on spelling.
                Made using PyQt5, SQLite, and CSV tables."
      />
      <PortfolioProject
        title="Treasure hunting game"
        description="Simple 2D game with pixel graphics and goal to collect keys and open the treasure
                room with them. Made using Java."
      />
      <PortfolioProject
        title="Capyland"
        description="Telegram game-bot with capybaras as pets that can be fed,  
                walked, etc. Made in collaboration with GEEG."
      />
      <PortfolioProject
        title="SOS-button (in progress)"
        description="A simple hardware button for elderly people to connect with 
                relatives in case of emergency. Made as a part of a team for university Software Project course."
      />
    </div>
  );
}
