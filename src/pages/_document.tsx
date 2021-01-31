import NextDoc, {Html, Head, Main, NextScript} from 'next/document'

export default class extends NextDoc {
  /**
   * Get initial props
   */
  static async getInitialProps(ctx) {
    const initialProps = await NextDoc.getInitialProps(ctx)
    return {...initialProps}
  }

  /**
   * Render doc
   */
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
