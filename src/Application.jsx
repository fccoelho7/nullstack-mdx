import Nullstack from "nullstack";
import Example from "./Example.mdx";

import "../tailwind.css";

class Application extends Nullstack {
  prepare({ page }) {
    page.locale = "en-US";
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
    );
  }

  render() {
    return (
      <body class="font-roboto">
        <Head />
        <main class="prose lg:prose-xl mx-auto">
          <Example />
        </main>
      </body>
    );
  }
}

export default Application;
