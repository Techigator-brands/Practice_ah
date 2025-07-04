import { Provider } from "react-redux";
import { store } from "../redux/store";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";
import { useSelector, useDispatch } from "react-redux";
function AppContent({ Component, pageProps }) {
  const { loading } = useSelector((state) => state.api);

  return (
    <>
      {loading ? (
        <div className="preloader">
          <div className="loader-inner ball-scale-multiple">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : null}

      <div className="app-wrapper">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AppContent Component={Component} pageProps={pageProps} />
    </Provider>
  );
}
