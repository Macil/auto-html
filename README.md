# autoHtml

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Macil/auto-html/blob/master/LICENSE.txt) [![npm version](https://img.shields.io/npm/v/auto-html.svg?style=flat)](https://www.npmjs.com/package/auto-html) [![CircleCI Status](https://circleci.com/gh/Macil/auto-html.svg?style=shield)](https://circleci.com/gh/Macil/auto-html) [![Greenkeeper badge](https://badges.greenkeeper.io/Macil/auto-html.svg)](https://greenkeeper.io/)

This is a module containing a function to automatically encode Javascript ES6
template strings into HTML safely. This lets you assemble HTML strings yourself
but still with automatic safety from XSS attacks!

```javascript
import autoHtml from "auto-html";

const username = "Bob the XSS guy <script>alert(1)</script>";

const userFormHtml = autoHtml `<div>Username: ${username}</div>`;
console.log(userFormHtml);
// "<div>Username: Bob the XSS guy &lt;script&gt;alert(1)&lt;/script&gt;</div>"
```

If you really want to substitute in HTML, then use an object with an `__html`
property. Be careful that the html is properly encoded! This syntax is inspired
by
[React](https://facebook.github.io/react/tips/dangerously-set-inner-html.html).

```javascript
const username = "Bob the XSS guy <script>alert(1)</script>";
const comment = "Some **markdown** text";

const commentHtml = markdownToHtml(comment); // markdownToHtml not included.
const postHtml = autoHtml `<div class="post">
  <div>Username: ${username}</div>
  <div>${{__html: commentHtml}}</div>
</div>`;
console.log(postHtml);
// <div class="post">
//   <div>Username: Bob the XSS guy &lt;script&gt;alert(1)&lt;/script&gt;</div>
//   <div>Some <strong>markdown</strong> text</div>
// </div>
```

This library only uses [Lodash's escape
function](https://lodash.com/docs#escape) on values in the template string. It
does not protect against dangerous values being inserted into HTML element
attributes (like in `<a href="${link}">` where link could be
`javascript:alert(1)`), and it does not protect against attacks from values
being inserted into unquoted HTML attributes (like `<a title=${link}>`, where
link could be `foo href="javascript:alert(1)"`).

## Miscellaneous

This module is built for use with template strings, a feature of ES6, the next
version of Javascript. If you are targeting platforms that don't support
template strings natively yet, you may want to use an ES6 compiler like
[Babel](https://babeljs.io/).

This module can be used in browsers via a CommonJS bundler such as
[Browserify](http://browserify.org/) or [Webpack](https://webpack.js.org/).

The HTML encoding is done by
[Lodash's escape function](https://lodash.com/docs#escape). Text encoded into
HTML by this function is safe to be placed in HTML element attributes and as
an element's children.

Use of
[Content Security Policy](http://www.html5rocks.com/en/tutorials/security/content-security-policy/)
headers is highly recommended to prevent XSS attacks! You'll still want to
bother to encode your HTML correctly, but CSP headers stop that from being
a remote-code-execution security issue at least.

## Types

Both [TypeScript](https://www.typescriptlang.org/) and
[Flow](https://flowtype.org/) type definitions for this module are included!
The type definitions won't require any configuration to use.
