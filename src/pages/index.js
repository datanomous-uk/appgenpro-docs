import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Get Started - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  // const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`AppGenPro`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        {/* Add a section here with a title and a paragraph below it to explain how appgenpro works */}
        <section>
          <div style={{ backgroundColor: '#3a0c5e', padding: '50px', borderRadius: '5px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>How does it work?</h2>
            <p style={{ fontSize: '18px', color: 'white' }}>Automatically create standard complex business solutions and apps by writing your high-level requirement and let AI-powered appgenpro to create fully functioning complex applications without touching a line of code!</p>
            
            <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '50px', marginTop: '50px', color: 'white', display: 'flex', justifyContent: 'center' }}>Key Capabilities of AppGenPro</p>
      
            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white' }}>
              <div style={{ flex: '1', textAlign: 'center' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>Intelligent Automation</h3>
                <img src="img/automation.svg" alt="AI" width="50%" />
                <p>Automates mundane and complex tasks of software development, freeing up your team to focus on innovation.</p>
              </div>
              <div style={{ flex: '1', textAlign: 'center', color: 'white' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>Simulated Development Teams</h3>
                <img src="img/teams.svg" alt="AI" width="50%" />
                <p>Collaborative autonomous agents that learn and adapt to optimize their role in the development process.</p>
              </div>
              <div style={{ flex: '1', textAlign: 'center', color: 'white' }}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>Generative AI</h3>
                <img src="img/gpt.svg" alt="AI" width="50%" />
                <p>Produces essential deliverables like documentation and code, ensuring consistent and error-free output.</p>
              </div>
            </div>

            <p style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '50px', marginTop: '50px', color: 'white', display: 'flex', justifyContent: 'center' }}>See AppGenPro in Action!</p>
            
            <Slider>  
              <div>
                <iframe
                  src="https://drive.google.com/file/d/1q3X-cm5vsL4mEubJPa-LF-7MyeJ9V1tf/preview"
                  width="70%"
                  height="500"
                  title="Silent Demo"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style={{ marginTop: '30px', marginLeft: '15%' }}
                ></iframe>
              </div>  
              <div>
                <iframe
                  width="70%"
                  height="500"
                  src="https://www.youtube.com/embed/UGt_6uBaM1M"
                  title="Official Product Demo"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  style={{ marginTop: '30px', marginLeft: '15%' }}
                ></iframe>
              </div>
            </Slider>

            
          </div>
          
          <div style={{ backgroundColor: '#3a0c5e', padding: '50px', borderRadius: '5px', marginTop: '0px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>Why choose AppGenPro?</h2>
            <p style={{ fontSize: '18px', color: 'white' }}>AppGenPro is the first advanced “AI-powered app generator” built for businesses that automates the development lifecycle to create enterprise grade solutions.</p>
            <img src="img/why.png" alt="Comparison of AppGenPro with other tools" style={{ marginTop: '20px', width: '100%' }} />
          </div>

          {/* <div style={{ backgroundColor: '#3a0c5e', padding: '20px', borderRadius: '0px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>Featured Apps made with AppGenPro</h2>
            <Slider slidesToShow={2} infinite>
              <div>
                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                  <img src="img/resources.svg" alt="Description of App 1" style={{ width: '60%', marginTop: '20px', marginLeft: '20%'}} />
                  <p>App 1 description</p>
                </a>
              </div>
              <div>
                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                  <img src="img/resources.svg" alt="Description of App 2" style={{ width: '60%', marginTop: '20px', marginLeft: '20%'}} />
                  <p>App 2 description</p>
                </a>
              </div>
              <div>
                <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                  <img src="img/resources.svg" alt="Description of App 3" style={{ width: '60%', marginTop: '20px', marginLeft: '20%'}} />
                  <p>App 3 description</p>
                </a>
              </div>
            </Slider>
          </div> */}
          <div className={styles.buttons} style={{ backgroundColor: '#3a0c5e', padding: '50px', borderRadius: '5px', marginTop: '0px' }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Click Here to Get Started with AppGenPro!
          </Link>
          </div>
        </section>
        
        
      </main>
    </Layout>
  );
}
