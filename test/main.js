import assert from "assert";
import autoHtml from "../src/";

describe("autoHtml", function() {
  it("works in basic case", function() {
    const str = autoHtml `<div>${"\"'foo<>&amp;123"}</div>
 <span>${"\"'foo<>&amp;123"}</span>`;
    assert.strictEqual(
      str,
      "<div>&quot;&#39;foo&lt;&gt;&amp;amp;123</div>\n " +
      "<span>&quot;&#39;foo&lt;&gt;&amp;amp;123</span>"
    );
  });

  it("works with raw html", function() {
    const str = autoHtml `<div>${"\"'foo<>&amp;123"}</div>
 <span>${{__html:"\"'foo<>&amp;123"}}</span>`;
    assert.strictEqual(
      str,
      "<div>&quot;&#39;foo&lt;&gt;&amp;amp;123</div>\n " +
      "<span>\"'foo<>&amp;123</span>"
    );
  });

  it("works okay with non-string types", function() {
    const str = autoHtml `
${5}
${false}
${true}
${null}
${undefined}
${{}}
${{toString() {return '<b>';}}}
${{__html: {toString() {return '<i>';}}}}
`;
    assert.strictEqual(
      str,
      "\n5\nfalse\ntrue\n\n\n[object Object]\n&lt;b&gt;\n<i>\n"
    );
  });
});
