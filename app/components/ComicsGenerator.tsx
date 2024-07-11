"use server";

import React from "react";
import "../styles/comics.css";
import { getComics } from "../functions/getComic";
import Image from "next/image";

export default async function ComicsGenerator() {
  const email : string = "a.serova@innopolis.university"
  const comics : string[] = await getComics(email);

  return (
    <div id="box-comics">
      <h3>Comics for my Innopolis email:</h3>
        <Image src={comics[0]} alt={comics[3]} id="comics-img"
            className="comics-img"
            title={comics[1]}
            width={200}
            height={400}></Image>
        <p id="text-id">{comics[1] + " " + comics[2] + " " + comics[4]}</p>
    </div>
  );
}
