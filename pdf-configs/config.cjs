// VitePress の `:::details タイトル{open}` ブロックを PDF 用に展開して描画する
const detailsContainer = {
  name: "detailsContainer",
  level: "block",
  start(src) {
    return src.match(/^:::details /m)?.index;
  },
  tokenizer(src) {
    const match = /^:::details (.+?)(?:\{(?:open|close)\})?\n([\s\S]*?)\n:::[ \t]*(?:\n|$)/.exec(src);
    if (!match) return;
    const token = {
      type: "detailsContainer",
      raw: match[0],
      title: match[1].trim(),
      tokens: [],
    };
    this.lexer.blockTokens(match[2], token.tokens);
    return token;
  },
  renderer(token) {
    return `<section class="details"><h3>${token.title}</h3>${this.parser.parse(token.tokens)}</section>\n`;
  },
};

module.exports = {
  stylesheet: "./pdf-configs/style.css",
  marked_extensions: [{ extensions: [detailsContainer] }],
  body_class: "markdown-body",
  marked_options: {
    headerIds: false,
    smartypants: true,
  },
  pdf_options: {
    "format": "A4",
    "margin": "30mm 20mm",
    "printBackground": true,
    "headerTemplate": "<style>\n  section {\n    margin: 0 auto;\n    font-size: 9px;\n  }\n</style>",
    "footerTemplate": "<section>\n  <div>\n    <span class=\"pageNumber\"></span>\n    / <span class=\"totalPages\"></span>\n  </div>\n</section>"
  },
  stylesheet_encoding: "utf-8",
};