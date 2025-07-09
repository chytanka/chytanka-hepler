function createChytankaObserver({ selector, regex, urlPrefix, className = "chtnk-btn" }) {
    const addButtons = () => {
        const links = document.querySelectorAll(selector);
        const label = chrome.i18n.getMessage("buttonLabel");

        links.forEach(link => {
            const href = link.getAttribute("href");
            const match = href.match(regex);
            if (!match) return;

            const uuid = match[1];

            if (link.nextSibling?.classList?.contains("chtnk-btn")) return;

            const btn = document.createElement("a");
            btn.href = `https://chytanka.ink/${urlPrefix}/${uuid}`;
            btn.setHTMLUnsafe(`<span>📖</span> ${label}`);
            btn.title = label;
            btn.target = "_blank";
            btn.className = `chtnk-btn ${className}`;

            btn.onclick = e => e.stopPropagation();

            link.insertAdjacentElement("afterend", btn);
        });
    };

    const observer = new MutationObserver(() => addButtons());
    observer.observe(document.body, { childList: true, subtree: true });

    addButtons();
}
