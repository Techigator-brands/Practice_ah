import { Provider } from "react-redux";
import { store } from "../redux/store";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="app-wrapper">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  );
}
