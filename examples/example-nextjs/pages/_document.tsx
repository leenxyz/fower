import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyle, getAtomIds, getCssString } from '@fower/react'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style data-fower={getAtomIds()} dangerouslySetInnerHTML={{ __html: getCssString() }} />
          {/* <ServerStyle /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
