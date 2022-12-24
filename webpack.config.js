const [server, client] = require("nullstack/webpack.config");

const mdxRule = {
  test: /\.mdx?$/,
  use: [
    {
      loader: "@mdx-js/loader",
      options: {
        jsxRuntime: "classic",
        pragma: "Nullstack.element",
        pragmaFrag: "Nullstack.fragment",
        pragmaImportSource: "nullstack",
      },
    },
  ],
};

function customServer(...args) {
  const config = server(...args);

  config.module.rules.push(mdxRule);

  return config;
}

function customClient(...args) {
  const config = client(...args);
  const rule = config.module.rules.find((rule) => rule.test.test(".css"));

  rule.use.push({
    loader: require.resolve("postcss-loader"),
    options: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
        },
      },
    },
  });

  config.module.rules.push(mdxRule);

  return config;
}

module.exports = [customServer, customClient];
