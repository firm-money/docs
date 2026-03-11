import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate id="feature.redeemable.title">Redeemable</Translate>,
    icon: '/img/f1.svg',
    description: (
      <>
        <Translate id="feature.redeemable.desc">Each stablecoin issued by Firm Money is redeemable for $1 of collateral in the system.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="feature.streamable.title">Status Native</Translate>,
    icon: '/img/f2.svg',
    description: (
      <>
        <Translate id="feature.streamable.desc">FIRM is built natively for the Status Network.</Translate>
      </>
    ),
  },
  {
    title: <Translate id="feature.sustainable.title">Sustainable</Translate>,
    icon: '/img/f3.svg',
    description: (
      <>
        <Translate id="feature.sustainable.desc">FIRM yield is sustainable and comes from multiple sources. 100% of protocol revenue is directed towards users.</Translate>
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={icon} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
