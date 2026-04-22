createChytankaObserver({
    selector: 'a[href^="/comic/"]',
    regex: /\/comic\/(?:[\w-]+)\/(\w+)/,
    urlPrefix: "comick",
    className: "chtnk-btn"
});
