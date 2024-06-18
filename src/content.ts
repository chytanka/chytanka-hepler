const CHTNK_HOST = 'https://chytanka.github.io'

interface LinkParseResult {
    site: string;
    id: string;
}

abstract class LinkParser {
    protected regex: RegExp = / /;
    protected site: string = ''

    public parse(link: string): LinkParseResult | null {
        const match = link.match(this.regex);

        return match ? { site: this.site, id: match[1] } : null;
    }
}

class TelegraphLinkParser extends LinkParser {
    override regex = /telegra\.ph\/([\p{L}\p{N}\p{M}\-_%]+)/u;
    override site = 'telegr'
};

class RedditLinkParser extends LinkParser {
    override regex = /reddit\.com\/[ur]\/\w+(?:\/comments\/)([a-zA-Z0-9]+)(?=[\/?]|$)/;
    override site = 'reddit';
};

class ImgurLinkParser extends LinkParser {
    override regex = /imgur\.com\/(?:a|gallery|t\/manga|t\/webtoon|t\/comics?)\/(?:[\w-]+-)?(\w+)/;
    override site = 'imgur'
};

class MangadexLinkParser extends LinkParser {
    override regex = /mangadex\.org\/chapter\/([a-f\d-]+)/;
    override site = 'md';
};


const parsers: LinkParser[] = [
    new TelegraphLinkParser,
    new RedditLinkParser,
    new MangadexLinkParser,
    new ImgurLinkParser
]

// Функція для перевірки, чи містить URL один із цільових сайтів
function isTargetSite(link: string) {
    for (let i = 0; i < parsers.length; i++) {
        const parser = parsers[i];
        const match = parser.parse(link);

        if (match) {
            return match;
        }

    }

    return false;
}

// Функція для створення кнопки
function createButton(link: string) {
    const button = document.createElement("a");
    button.innerHTML = "чt<br>nk";
    button.title = "Read in Chytanka";
    button.href = link;
    button.target = "_blank";
    button.classList.add("chtnk-button");
    return button;
}

// Функція для додавання кнопок до посилань на цільових сайтах
function addButtonToLinks(links: NodeListOf<HTMLAnchorElement>) {
    links.forEach(href => {
        const link = href.href;
        const foo = isTargetSite(link)
        if (foo) {
            const button = createButton(`${CHTNK_HOST}/${foo.site}/${foo.id}`);
            href.parentNode?.insertBefore(button, href);
        }
    });
}

// Функція для ініціалізації спостерігача за змінами в DOM
function observeDOMChanges() {
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.type === "childList") {
                mutation.addedNodes.forEach((node: any) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const links = node.querySelectorAll("a[href]");
                        addButtonToLinks(links);
                    }
                });
            }
        });
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Додати кнопки до існуючих посилань і налаштувати спостерігач
window.addEventListener("load", () => {
    const links: NodeListOf<HTMLAnchorElement> = document.querySelectorAll("a[href]");
    addButtonToLinks(links);
    observeDOMChanges();
});