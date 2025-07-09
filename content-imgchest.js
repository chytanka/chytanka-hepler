createChytankaObserver({
    selector: '.post-card > a[is="Link"]',
    regex: /\/p\/([\w\d-]+)/,
    urlPrefix: "imgchest",
    className: "chtnk-btn"
});
