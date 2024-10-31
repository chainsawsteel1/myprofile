import showdown from 'showdown';

showdown.extension('targetBlank', function () {
    return [{
        type: 'output',
        regex: /(<a [^>]+?)(>)/g,
        replace: '$1 target="_blank"$2'
    }];
});

export const loadmd = async (path: string): Promise<string> => {
    let converter = new showdown.Converter({
        extensions: ['targetBlank']
    });
    converter.setFlavor('github');

    let text = await (await fetch(path)).text();
    let html = converter.makeHtml(text);

    return html;
};