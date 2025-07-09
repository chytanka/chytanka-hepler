createChytankaObserver({
    selector: 'a[href^="/chapter/"].flex',
    regex: /^\/chapter\/([a-f0-9-]{36})$/,
    urlPrefix: "mangadex"
});