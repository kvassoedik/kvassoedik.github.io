export default function setFooterLinks() {
    const links : Array<Map<string, string>> = [new Map(), new Map(), new Map()];
    links[0].set("href", "https://github.com/kvassoedik");
    links[0].set("id", "gh-link");
    links[0].set("src", "media/icons/github.png");
    links[0].set("class", "icon");
    links[0].set("alt", "Github icon");

    links[1].set("href", "mailto:kvassoedik@gmail.com");
    links[1].set("id", "email");
    links[1].set("src", "media/icons/mail.png");
    links[1].set("class", "icon");
    links[1].set("alt", "Mail icon");

    links[2].set("href", "https://t.me/kbvsp");
    links[2].set("id", "tg-link");
    links[2].set("src", "media/icons/tg.png");
    links[2].set("class", "icon");
    links[2].set("alt", "Telegram icon");

    return links;
}