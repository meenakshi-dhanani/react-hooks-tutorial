module.exports = {
  title: 'Tutorial: Intro to React Hooks',
  tagline: '',
  url: 'https://meenakshi-dhanani.github.io',
  baseUrl: '/react-hooks-tutorial/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'meenakshi-dhanani', // Usually your GitHub org/user name.
  projectName: 'react-hooks-tutorial', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Facebook Community Challenge 2020',
      items: [
        {
          to: 'docs/tutorial',
          activeBasePath: 'docs',
          label: 'Tutorial',
          position: 'left',
        }
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'react-hangman',
              // Client-side routing, used for navigating within the website.
              // The baseUrl will be automatically prepended to this value.
              href: 'https://github.com/meenakshi-dhanani/react-hangman',
            }
          ],
        },
      ]
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
