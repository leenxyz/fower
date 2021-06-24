import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { styleSheet } from '@fower/sheet'
import { getAtomIds } from '@fower/cache'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <style data-fower={getAtomIds()}>{styleSheet.getStyle()}</style>
        </Head>
        <body>
          <Main />
          <NextScript />

          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `window.SSR_ATOM_IDS = ${JSON.stringify(getAtomIds())}`,
            }}
          />
        </body>
      </Html>
    )
  }
}

export default MyDocument
