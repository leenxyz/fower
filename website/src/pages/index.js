import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import Translate from '@docusaurus/Translate'

const features = [
  {
    title: 'Atomic Props',
    description: (
      <Translate id="home.feature1.desc" description="The homepage welcome message">
        Write styles with Atomic Props, rapid to develop complicated UI by composing Atomic Props.
      </Translate>
    ),
  },
  {
    title: 'Scoped style',
    description: (
      <Translate id="home.feature2.desc" description="The homepage welcome message">
        Borned with scoped styles, So don't worry any conflicts due to the globalnamespace.
      </Translate>
    ),
  },
  {
    title: 'Type Safe',
    description: (
      <Translate id="home.feature3.desc" description="The homepage welcome message">
        Perfect support for TypeScript, which bring Type definition,IntelliSense,Self documentation.
      </Translate>
    ),
  },
  {
    title: 'Less Code, Write faster',
    description: (
      <Translate id="home.feature4.desc" description="The homepage welcome message">
        With Atomic Props and "Key as Value" pattern, You can develop UI with less code.
      </Translate>
    ),
  },
  {
    title: 'Less CSS, More JS',
    description: (
      <Translate id="home.feature5.desc" description="The homepage welcome message">
        Styli is a CSS-in-JS solution, Most of the time you are writing JavaScript.
      </Translate>
    ),
  },
  {
    title: 'Framework-agnostic',
    description: (
      <Translate id="home.feature6.desc" description="The homepage welcome message">
        Not tied to any framework, Can use with React,Vue,React native etc.
      </Translate>
    ),
  },
]

function Feature({ title, description, idx }) {
  return (
    <div
      style={{
        marginBottom: '40px',
        paddingRight: (idx + 1) % 3 === 0 ? 0 : '40px',
      }}
      className={clsx('col col--4', styles.feature)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {}, tagline } = context
  return (
    <Layout title={tagline} description={tagline}>
      <div className={styles.container}>
        <div className={styles.slogan}>
          An <span className={styles.red}>Atomic CSS</span>{' '}
          <span className={styles.green}>in JS</span> library for rapid UI development
        </div>
        <div className={styles.side}>
          <Translate id="home.subtitle" description="The homepage welcome message">
            Get Started
          </Translate>
        </div>

        <div className={styles.wrapLink}>
          <Link
            className={clsx('button button--primary button--lg', styles.getStarted)}
            to={useBaseUrl('docs/installation')}
          >
            <Translate id="home.getStated" description="The homepage welcome message">
              Get Started
            </Translate>
          </Link>
          <iframe
            className={styles.indexCtasGitHubButton}
            src="https://ghbtns.com/github-btn.html?user=forsigner&amp;repo=styli&amp;type=star&amp;count=true&amp;size=large"
            width={160}
            height={30}
            title="GitHub Stars"
          />
        </div>
      </div>

      <main>
        {features && features.length > 0 && (
          <div className={styles.item}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} idx={idx} {...props} />
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </Layout>
  )
}

export default Home
