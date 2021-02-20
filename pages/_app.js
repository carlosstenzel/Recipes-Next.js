import Head from "next/head";

import { Provider } from "react-redux";
import { useStore } from "../store";

import "../styles/color.css";
import "../styles/base.css";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Head>
        <title>Recipes</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
