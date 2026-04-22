createChytankaObserver({
    selector: 'a[href].Post-item',
    regex: /(?:a|gallery|t\/manga|t\/webtoon|t\/comics?)\/(?:[\w-]+-)?(\w+)/,
    urlPrefix: "imgur",
    className: "chtnk-btn abs"
});
