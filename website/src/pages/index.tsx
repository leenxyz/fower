import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import Translate from '@docusaurus/Translate'
import { Box, css } from '@fower/react'
import { HomeDemo } from '../components/HomeDemo'

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
        Fower is a CSS-in-JS solution, Most of the time you are writing JavaScript.
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

const previews = [
  {
    title: (
      <Box>
        Powerful <Box w2></Box> Layout toolkit
      </Box>
    ),
    subject: 'Layout toolkit',
    description:
      'Fower provides a powerful Flexbox-based layout toolkit. By adjusting the direction and alignment of the layout, you can build most of the layout and make the layout easier.',
    link: '/docs/layout-toolkit',
    tags: ['type-safe', 'effective'],
    code: `
<Box toCenter bgGray100 p4>
  <Box square-60 bgOrange400 rounded-8></Box>
  <Box square-80 bgBlue400 rounded-8></Box>
</Box>
      `,
  },
  {
    title: (
      <Box>
        Built-in <Box w2></Box> Design system
      </Box>
    ),
    subject: 'Design system',
    description:
      'Fower provides a powerful Flexbox-based layout toolkit. By adjusting the direction and alignment of the layout, you can build most of the layout and make the layout easier.',
    code: `
<Box toCenter bgGray100 p4>
  <Box square-60 bgOrange400 rounded-8></Box>
  <Box square-80 bgBlue400 rounded-8></Box>
</Box>
      `,
  },
]

function Home() {
  const { siteConfig = {}, tagline } = useDocusaurusContext()
  return (
    <Layout title={tagline} description={tagline}>
      <div className={styles.container}>
        <Box className="toBetween flexDirection-row flex">
          <Box>
            <Box className="leadingNone fontExtrabold textLeft" style={{ fontSize: 68 }}>
              A utility-first CSS in JS library for rapid UI development
            </Box>
            <Box text2XL textLeft py2>
              <Translate id="home.subtitle" description="The homepage welcome message">
                Fower
              </Translate>
            </Box>

            <Box className={styles.wrapLink} spaceX2>
              <Link
                style={{ background: 'black', cursor: 'pointer' }}
                className={clsx(
                  'button button--lg',
                  styles.getStarted,
                  css('roundedFull', 'py3', 'borderNone'),
                )}
                to={useBaseUrl('docs/use-with-react')}
              >
                Get Started
              </Link>
              <iframe
                className={styles.indexCtasGitHubButton}
                src="https://ghbtns.com/github-btn.html?user=forsigner&amp;repo=fower&amp;type=star&amp;count=true&amp;size=large"
                width={160}
                height={30}
                title="GitHub Stars"
              />
            </Box>
          </Box>
          <Box className="demo-container">
            <HomeDemo></HomeDemo>
          </Box>
        </Box>
      </div>

      <main className="home">
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
