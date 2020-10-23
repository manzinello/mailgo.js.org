/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const Container = CompLibrary.Container;

class Users extends React.Component {
  render() {
    const { config: siteConfig } = this.props;
    if ((siteConfig.users || []).length === 0) {
      return null;
    }

    const editUrl = `https://github.com/manzinello/mailgo.js.org/edit/master/website/data/users.json`;
    const showcase = siteConfig.users.map((user) => (
      <a target="_blank" href={user.infoLink} key={user.infoLink}>
        <img
          src={"/img/users/" + user.image}
          alt={user.caption}
          title={user.caption}
        />
        <p>{user.caption}</p>
      </a>
    ));

    return (
      <>
        <p
          class="codepen"
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
            Matteo (<a href="https://codepen.io/manzinello">@manzinello</a>) on{" "}
            <a href="https://codepen.io">CodePen</a>.
          </span>
        </p>
        <script
          async
          src="https://static.codepen.io/assets/embed/ei.js"
        ></script>
      </>
    );
  }
}

module.exports = Users;
