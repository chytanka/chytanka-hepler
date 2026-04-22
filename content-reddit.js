createChytankaObserver({
    selector: 'shreddit-post[gallery] a[slot="full-post-link"], [slot="post-media-container"] > a',
    regex: /\/[ur]\/\w+(?:\/comments\/)([a-zA-Z0-9]+)(?=[\/?]|$)/,
    urlPrefix: "reddit",
    className: "chtnk-btn"
});
