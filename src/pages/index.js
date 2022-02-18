import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Q & A</>,
    link: 'q-and-a',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        他にはない、SNSのタイムラインのようにサクサク見られるWiki<br \>筆者たちが日々記事を更新しています
      </>
    ),
  },
  {
    title: <>個人</>,
    link: 'personal',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        主に基地内のことについて説明しています<br \>基地内施設やレベル上げなど個人に関するページはここから
      </>
    ),
  },
  {
    title: <>連盟</>,
    link: 'union',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        連盟に関することについて説明しています<br \>連盟施設や遺跡など連盟に関するページはここから
      </>
    ),
  },
  {
    title: <>システム</>,
    link: 'system',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        ゲームのシステムについて説明しています<br \>イベントや英雄などシステムに関するページはここから
      </>
    ),
  },
  {
    title: <>サーバー</>,
    link: 'server',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        サーバーに関することについて説明しています<br \>サーバーや連盟などサーバーに関するページはここから
      </>
    ),
  },
  {
    title: <>ヘルプ</>,
    link: 'help',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        とりあえず迷ったらここ!<br \>わからないことがあったらこちらを参照してみてください
      </>
    ),
  },
  {
    title: <>編集後記</>,
    link: 'blog',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        他にはない、SNSのタイムラインのような編集後記<br \>筆者たちが日々まったり呟いて言います<br \>もしかしたら他のページよりも有益な情報が得られるかも...
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <a href={link}>
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
    </a>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`トップ`}
      description="WikiNotesであなたの好きをもっと探索しよう">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">Wikiなのにちょっと抜けている<br \>Noteなのにちょっと本気<br \>WikiNotesを探索しよう!</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('help/explore')}>
              探索する ??
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;