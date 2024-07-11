import "@/app/styles/main.css";
import "@/app/styles/comics.css";
import ComicsGenerator from "@/app/components/ComicsGenerator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comics",
  description: "On this page, I fetch an ID and a comic corresponding to my Innopolis email."
};

export default function Comics() {
  return <ComicsGenerator />;
}
