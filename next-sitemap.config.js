// サイトの情報を追加（サイトのURL）
//  @type {import('next-sitemap').IConfig}

const config = {
  siteUrl: 'https://katakuri-tech-log.vercel.app',
  outDir: './out',
  exclude: ['/sitemap.xml'],
  robotsTxtOptions: {},
}

module.exports = config
