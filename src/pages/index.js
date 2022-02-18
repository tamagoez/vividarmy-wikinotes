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
        ���ɂ͂Ȃ��ASNS�̃^�C�����C���̂悤�ɃT�N�T�N������Wiki<br \>�M�҂��������X�L�����X�V���Ă��܂�
      </>
    ),
  },
  {
    title: <>�l</>,
    link: 'personal',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        ��Ɋ�n���̂��Ƃɂ��Đ������Ă��܂�<br \>��n���{�݂⃌�x���グ�Ȃǌl�Ɋւ���y�[�W�͂�������
      </>
    ),
  },
  {
    title: <>�A��</>,
    link: 'union',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        �A���Ɋւ��邱�Ƃɂ��Đ������Ă��܂�<br \>�A���{�݂��ՂȂǘA���Ɋւ���y�[�W�͂�������
      </>
    ),
  },
  {
    title: <>�V�X�e��</>,
    link: 'system',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        �Q�[���̃V�X�e���ɂ��Đ������Ă��܂�<br \>�C�x���g��p�Y�ȂǃV�X�e���Ɋւ���y�[�W�͂�������
      </>
    ),
  },
  {
    title: <>�T�[�o�[</>,
    link: 'server',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        �T�[�o�[�Ɋւ��邱�Ƃɂ��Đ������Ă��܂�<br \>�T�[�o�[��A���ȂǃT�[�o�[�Ɋւ���y�[�W�͂�������
      </>
    ),
  },
  {
    title: <>�w���v</>,
    link: 'help',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        �Ƃ肠�����������炱��!<br \>�킩��Ȃ����Ƃ��������炱������Q�Ƃ��Ă݂Ă�������
      </>
    ),
  },
  {
    title: <>�ҏW��L</>,
    link: 'blog',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        ���ɂ͂Ȃ��ASNS�̃^�C�����C���̂悤�ȕҏW��L<br \>�M�҂��������X�܂�����ꂢ�Č����܂�<br \>�����������瑼�̃y�[�W�����L�v�ȏ�񂪓����邩��...
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
      title={`�g�b�v`}
      description="WikiNotes�ł��Ȃ��̍D���������ƒT�����悤">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">Wiki�Ȃ̂ɂ�����Ɣ����Ă���<br \>Note�Ȃ̂ɂ�����Ɩ{�C<br \>WikiNotes��T�����悤!</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('help/explore')}>
              �T������ ??
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