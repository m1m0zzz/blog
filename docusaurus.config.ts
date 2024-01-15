import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'm1m0zzzのブログ',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://m1m0zzz.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/blog/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'm1m0zzz', // Usually your GitHub org/user name.
  projectName: 'blog', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'mimozのブログ',
      logo: {
        alt: 'My Site Logo',
        src: 'img/mimoz192.png',
      },
      items: [
        {
          to: "/tags",
          label: 'タグ一覧',
          position: 'left',
        },
        {
          href: 'https://m1m0zzz.github.io/',
          label: 'Home Page',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Blog',
          items: [
            {
              label: 'Top',
              to: '/blog',
            },
          ],
        },
        {
          title: 'SNS',
          items: [
            {
              label: 'SoundCloud',
              href: 'https://soundcloud.com/mimozzz',
            },
            {
              label: 'X(Twitter)',
              href: 'https://twitter.com/m1m0zzz',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCgfte7zixiGJ6ZC6ttu3kfg',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/m1m0zzz/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Home Page',
              href: 'https://m1m0zzz.github.io/',
            },
            {
              label: '.Spectrum',
              href: 'https://m1m0zzz.github.io/.spectrum',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} mimoz`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
