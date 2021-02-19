/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

import Layout from "@theme/Layout";

class Demo extends React.Component {
  render() {
    return (
      <div>
        {false && (
          <>
            <p
              className="codepen"
              data-height="600"
              data-theme-id="dark"
              data-default-tab="html,result"
              data-user="manzinello"
              data-slug-hash="RmeQEr"
              style={{
                height: 394,
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "5px solid",
                margin: "1em 0",
                padding: "1em",
              }}
              data-pen-title="mailgo"
            >
              <span>
                See the Pen{" "}
                <a href="https://codepen.io/manzinello/pen/RmeQEr">mailgo</a> by
                Matteo (<a href="https://codepen.io/manzinello">@manzinello</a>)
                on <a href="https://codepen.io">CodePen</a>.
              </span>
            </p>
            <script
              async
              src="https://static.codepen.io/assets/embed/ei.js"
            ></script>
          </>
        )}
        <p
          className="codepen"
          data-height="265"
          data-theme-id="dark"
          data-default-tab="html,result"
          data-user="manzinello"
          data-slug-hash="RmeQEr"
          style={{
            height: 394,
            boxSizing: "border-box",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "5px solid",
            margin: "1em 0",
            padding: "1em",
          }}
          // style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;"
          data-pen-title="mailgo"
        >
          <span>
            See the Pen{" "}
            <a href="https://codepen.io/manzinello/pen/RmeQEr">mailgo</a> by
            Matteo (<a href="https://codepen.io/manzinello">@manzinello</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </span>
        </p>
        <script
          async
          src="https://cpwebassets.codepen.io/assets/embed/ei.js"
        ></script>
      </div>
    );
  }
}

export default (props) => (
  <Layout>
    <Demo {...props} />
  </Layout>
);
