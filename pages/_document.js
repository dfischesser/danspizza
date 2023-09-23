import Document, { Html, Head, Main, NextScript } from 'next/document'
import PropTypes from 'prop-types';
import createEmotionServer from '@emotion/server/create-instance';
import theme from '../components/theme';
import createEmotionCache from '../components/createEmotionCache';

export default function MyDocument({ emotionStyleTags }) {

  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Dans Pizza is a Premium Restaurant Order Simulator. Create Users, Fulfill Orders, and Generate Reports. Created by Daniel Fischesser."></meta>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
        {emotionStyleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async (ctx) => {
  
  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // This is important. It prevents Emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger 
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
}

MyDocument.propTypes = {
  emotionStyleTags: PropTypes.array.isRequired,
};