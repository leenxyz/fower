import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { styleSheet } from '@fower/sheet'
import { store } from '@fower/store'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const initialScript = `
      window.fower = {
        atomCache: ${JSON.stringify(Array.from(store.atomCache))}
      }
    `
    return (
      <Html>
        <Head>
          <style data-fower="fower">{styleSheet.getStyle()}</style>
        </Head>
        <body>
          <Main />
          <NextScript />

          <script type="text/javascript" dangerouslySetInnerHTML={{ __html: initialScript }} />
        </body>
      </Html>
    )
  }
}

export default MyDocument
