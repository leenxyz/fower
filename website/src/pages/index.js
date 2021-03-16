
import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: 'Atomic Props',
    description: (
      <>
        Write styles with Atomic Props, rapid to develop complicated UI by composing Atomic Props.
      </>
    ),
  },
  {
    title: 'Scoped style',
    description: (
      <>Borned with scoped styles, So don't worry any conflicts due to the globalnamespace.</>
    ),
  },
  {
    title: 'Type Safe',
    description: (
      <>
        Perfect support for TypeScript, which bring Type definition,IntelliSense,Self documentation.
      </>
    ),
  },
  {
    title: 'Less Code, Write faster',
    description: (
      <>With Atomic Props and "Key as Value" pattern, You can develop UI with less code.</>
    ),
  },
  {
    title: 'Less CSS, More JS',
    description: <>Styli is a CSS-in-JS solution, Most of the time you are writing JavaScript。</>,
  },
  {
    title: 'Framework-agnostic',
    description: <>Not tied to any framework, Can use with React,Vue,React native etc.</>,
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
        <div className={styles.side}>CSS is painful，let's use JS.</div>
        <div className={styles.wrapLink}>
          <Link
            className={clsx('button button--primary button--lg', styles.getStarted)}
            to={useBaseUrl('docs/installation')}
          >
            Get Started
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
