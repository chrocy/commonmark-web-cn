
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';

// Configure markdown-it with highlight.js
const md = new MarkdownIt({
    html: true,
    linkify: false,
    typographer: true,
    highlight: function (str: string, lang: string): string {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return hljs.highlight(str, { language: lang, ignoreIllegals: true }).value;
            } catch (__) { }
        }

        try {
            return hljs.highlightAuto(str).value;
        } catch (__) { }

        return ''; // use internal default escaping
    }
});

export const renderMarkdown = (text: string): string => {
    return md.render(text);
};

export const normalizeAnswer = (html: string): string => {
    if (!html) return '';
    return html
        .trim()
        .replace(/\r/g, '')
        .replace(/\n<\/code>/g, '</code>')
        .replace(/<\/code>\n/g, '</code>')
        .replace(/\s+/g, ' ');
};

export const normalizeMarkdown = (text: string): string => {
    if (!text) return '';
    return text
        .replace(/\r\n/g, '\n')
        .split('\n')
        .map(line => line.trimEnd())
        .join('\n')
        .trim();
};
