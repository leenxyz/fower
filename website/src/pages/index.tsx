import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import { View } from '@styli/react'


const features = [
  {
    title: 'Atomic Props',
    description: (
      <>
        Styli 中，我们通过 ”原子属性“ 直接在 Markup 中编写样式在Styli，通过 Atomic Props
        的组合可以实现各种复杂的UI，不需写原生的CSS。
      </>
    ),
  },
  {
    title: 'Framework-agnostic',
    description: <>可以任何主流框架中使用，如 React、Vue、Angular、React native、Taro。</>,
  },
  {
    title: 'Type Safe',
    description: <>完美支持TypeScript，完整的类型定义，精确的智能提示，友好的文档辅助。</>,
  },
  {
    title: 'Less Code, Write faster',
    description: <>Styli的原子Prop 和 "key as value"模式，让你用更少的代码实现复杂样式。</>,
  },
  {
    title: 'Less CSS, More JS',
    description: <>使用 Styli，你大部分是在写JS，请逐渐忘记复杂的 CSS。</>,
  },
  {
    title: 'Programmable',
    description: <>Styli 是一种 CSS in JS 解决方，你可以完整利用 JS 的语言特性。</>,
  },
]

function Feature({ title, description, idx }) {
  return (
    <View
      mb-40
      pr={(idx + 1) % 3 === 0 ? 0 : '40px'}
      className={clsx('col col--4', styles.feature)}
    >
      <h3>{title}</h3>
      <p>{description}</p>
    </View>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {}, tagline } = context
  return (
    <Layout title={tagline} description={tagline}>
      <View w={['auto', 900, 900]} center column textCenter mx-auto mb-40 py-60>
        <View py={[10, 20, 50]} f={[20, 40, 68, 68]} fontBold black lhTight textCenter>
          A <Text red40>Atomic CSS</Text> in JS library for rapid UI development
        </View>
        <View textCenter>CSS is painful，let's use JS.</View>
        <View center mt-20>
          <Link
            className={clsx('button button--primary button--lg', styles.getStarted)}
            to={useBaseUrl('docs/introduction')}
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
        </View>
      </View>

      <main>
        {features && features.length > 0 && (
          <View center px-2rem mb-40>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} idx={idx} {...props} />
                ))}
              </div>
            </div>
          </View>
        )}
      </main>
    </Layout>
  )
}

export default Home
