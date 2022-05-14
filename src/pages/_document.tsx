import { ReactFragment } from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { fontPath } from '@/assets/fonts';
import fontFamilies from '@/styles/fontFamilies';

class FileUpDocument extends Document<DocumentInitialProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet: ServerStyleSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => {
        return originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <App {...props} />
            ),
        });
      };

      const initialProps = await Document.getInitialProps(ctx);

      const styleElement = ((
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ) as unknown) as ReactFragment;

      return {
        ...initialProps,
        styles: styleElement,
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html
        lang='ko'
      >
        <Head>
          <meta
            charSet='utf-8'
          />

          <meta
            httpEquiv='cache-control'
            content='no-cache'
          />

          <meta
            httpEquiv='expires'
            content='0'
          />

          <meta
            httpEquiv='pragma'
            content='no-cache'
          />

          <meta
            name='theme-color'
            content='#000000'
          />

          <meta
            name='referrer'
            content='no-referrer-when-downgrade'
          />

          <link
            rel='preload'
            href={fontPath.pretendard.regular}
            as='font'
            type='font/woff2'
            crossOrigin=''
          />

          <link
            rel='preload'
            href={fontPath.pretendard.black}
            as='font'
            type='font/woff2'
            crossOrigin=''
          />

          <link
            rel='preload'
            href={fontPath.pretendard.bold}
            as='font'
            type='font/woff2'
            crossOrigin=''
          />

          <link
            rel='preload'
            href={fontPath.pretendard.semiBold}
            as='font'
            type='font/woff2'
            crossOrigin=''
          />

          <link
            rel='preload'
            href={fontPath.pretendard.medium}
            as='font'
            type='font/woff2'
            crossOrigin=''
          />

          <style
            dangerouslySetInnerHTML={{
              __html: fontFamilies,
            }}
          ></style>
        </Head>

        <body>
          <Main />
          <NextScript />

          <div id='modal-portal'></div>
        </body>
      </Html>
    );
  }
}

export default FileUpDocument;