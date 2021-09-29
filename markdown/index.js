// import {micromark} from 'micromark'
// import {
//   gfmStrikethrough,
//   gfmStrikethroughHtml
// } from './lib/index.js';

// const output = micromark('Some ~strikethrough~.h', {
//   extensions: [gfmStrikethrough()],
//   htmlExtensions: [gfmStrikethroughHtml]
// })

// import {fromMarkdown} from 'mdast-util-from-markdown'
// import {toString} from "mdast-util-to-string";

// const tree = fromMarkdown("{% youtube idadjfladkjsl v=test %}")

// console.log(toString(tree.children[0]));

import {remark} from "remark";

let file = remark().parse("## Hello world");

console.log(file);