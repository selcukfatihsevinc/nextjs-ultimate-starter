/* eslint-disable */
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(context) {
    const props = await super.getInitialProps(context);
    return { ...props };
  }

  render() {
    return (
      <html lang="en">
        <Head />
        <body>
          <Main />
          {/*<script src="custom script url" />*/}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // inline scripts
              `,
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}
/* eslint-enable */
