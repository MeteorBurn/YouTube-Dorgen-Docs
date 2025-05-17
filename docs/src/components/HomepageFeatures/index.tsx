import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Автоматизация YouTube',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        YouTube-DorGen - это набор инструментов автоматизации для YouTube, 
        который упрощает управление каналом и контентом.
      </>
    ),
  },
  {
    title: 'Шесть Специализированных Шаблонов',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        YouTube-Uploader, YouTube-Manager, YouTube-Poster, YouTube-Parser, 
        YouTube-ReCaptcha и YouTube-Generator - каждый решает свою задачу.
      </>
    ),
  },
  {
    title: 'Эффективность и Масштабируемость',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Автоматизируйте до 90% рутинных операций YouTube, используя прямые 
        HTTP-запросы для повышения эффективности и снижения нагрузки на систему.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
