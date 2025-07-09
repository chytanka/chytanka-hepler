createChytankaObserver({
    selector: 'a[href^="/titles/"]',
    regex: /\/titles\/\d+\/(\d+)/,
    urlPrefix: "zenko",
    className: "chtnk-btn"
});
