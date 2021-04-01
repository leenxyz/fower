import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Playground from '@theme/Playground'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import Translate from '@docusaurus/Translate'
import { CodeHighLight } from '../components/HighLight'
import { Box } from '@styli/react'
import theme from 'prism-react-renderer/themes/duotoneDark'

import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const code1 = `
  <Box toCenter bgGray100 p4>
    <Box square-60 bgAmber400 rounded-8></Box>
    <Box square-80 bgBlue400 rounded-8></Box>
  </Box>
`

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

const previews = [
  {
    title: (
      <Box>
        Powerful <Box w2></Box> Layout toolkit
      </Box>
    ),
    subject: 'Layout toolkit',
    description:
      'Styli provides a powerful Flexbox-based layout toolkit. By adjusting the direction and alignment of the layout, you can build most of the layout and make the layout easier.',
    link: '/docs/styli-layout-introduction',
    tags: ['type-safe', 'effective'],
    code: `
<Box toCenter bgGray100 p4>
  <Box square-60 bgAmber400 rounded-8></Box>
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
      'Styli provides a powerful Flexbox-based layout toolkit. By adjusting the direction and alignment of the layout, you can build most of the layout and make the layout easier.',
    code: `
<Box toCenter bgGray100 p4>
  <Box square-60 bgAmber400 rounded-8></Box>
  <Box square-80 bgBlue400 rounded-8></Box>
</Box>
      `,
  },
]

function CodePreview({ title, subject, description, link, code, tags = [] }) {
  return (
    <Box toBetween className={styles.container} spaceX4>
      <Box textLeft flex-1>
        <Box as="h2" toLeft text6XL leadingNone>
          {title}
        </Box>
        <Box toLeft spaceX2>
          {tags.map((tag, i) => (
            <Box key={i} bgBlack white px2 py1 textSM>
              {tag}
            </Box>
          ))}
        </Box>
        <Box my3 textLG>
          {description}
        </Box>
        <Box as="a" href={link} pink600>
          Learn more {subject}
        </Box>
      </Box>
      <Box overflow="hidden" roundedXL flex={1} textSM>
        <LiveProvider code={code} scope={{ Box }} theme={theme}>
          <LivePreview style={{ width: '100%' }} />
          <LiveEditor
            style={{ fontFamily: 'system-ui,Untitled Sans, -apple-system, system-ui, sans-serif' }}
          />
          <LiveError />
        </LiveProvider>
      </Box>
    </Box>
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

      <Box>
        {previews.map((item, i) => (
          <CodePreview key={i} {...item}></CodePreview>
        ))}
      </Box>
    </Layout>
  )
}

export default Home
