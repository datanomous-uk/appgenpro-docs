import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Maximized Re-use and Productivity',
    Svg: require('@site/static/img/productivity.svg').default,
    description: (
      <>
        Building accelerators and re-usable algorithms / patterns
        and using code generator might help improve
        productivity and speed of delivery. 
      </>
    ),
  },
  {
    title: 'Deliver more with less resources',
    Svg: require('@site/static/img/resources.svg').default,
    description: (
      <>
        The resource bottlenecks might be resolved by upskilling
        available developers and acquiring the required resources
        from third parties.
      </>
    ),
  },
  {
    title: 'Automated enforcement of standards',
    Svg: require('@site/static/img/resources.svg').default,
    description: (
      <>
        Automated tools might help ensuring the design and code
        is created based on standards.    
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <h1>Forget about the biggest pain points of software development with the GPT-First Development approach!</h1>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
          <p style= {{textAlign: 'center', fontWeight: 'bold', fontSize: '20px'}}>AppGenPro is the first advanced “AI-powered app generator” built for businesses that automates the development lifecycle to create enterprise grade solutions.</p>
        </div>
      </div>
    </section>
  );
}
