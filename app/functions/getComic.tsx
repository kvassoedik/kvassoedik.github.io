import { formatDistanceToNowStrict } from "date-fns";
import { getID } from "./getID";

interface API {
  url: URL;
  urlParams?: URLSearchParams;
  response?: Promise<Response>;
}

export async function getComics(email: string) {
  const id = getID(email);
  const myUrl: API = {
    url: new URL("https://fwd.innopolis.university/api/comic"),
    urlParams: new URLSearchParams({ id: (await id).toString() }),
  };
  const newUrl: API = {
    url: new URL(`${myUrl.url.origin}${myUrl.url.pathname}?${myUrl.urlParams}`),
  };

  const js: Promise<string> = (await fetch(newUrl.url.href)).json();
  const date = new Date(
    Number(JSON.parse(JSON.stringify(await js)).year),
    Number(JSON.parse(JSON.stringify(await js)).month),
    Number(JSON.parse(JSON.stringify(await js)).day),
  ).toLocaleDateString();

  return [
    JSON.parse(JSON.stringify(await js)).img,
    JSON.parse(JSON.stringify(await js)).safe_title,
    date,
    JSON.parse(JSON.stringify(await js)).alt,
    formatDistanceToNowStrict(date) + " ago",
  ];
}
