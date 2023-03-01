const fs = require('fs');
let ejs = require('ejs');

pages = [
    'index',
    'articles',
    'about',
    'contact'
]

pages.forEach(page => {
    generate(page);
});

function generate(page) {
    ejs.renderFile(`./views/${page}.ejs`, {}, {}, function (_, str) {
        fs.writeFile(`${page}.html`, str, () => { });
    });
}