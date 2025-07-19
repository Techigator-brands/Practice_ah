import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Ahelsunnat </title>
        <meta
          name="description"
          content="Ahle Sunnat Front - Next.js Application"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="assets/css/icons.min.css" />
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/plugins.min.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
        <link rel="stylesheet" href="assets/css/responsive.css" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/css/colors/color.css"
          title="color"
        />
        <link
          rel="alternate stylesheet"
          href="assets/css/colors/color2.css"
          title="color2"
        />
        <link
          rel="alternate stylesheet"
          href="assets/css/colors/color3.css"
          title="color3"
        />
        <link
          rel="alternate stylesheet"
          href="assets/css/colors/color4.css"
          title="color4"
        />
        {/* <link rel="stylesheet" href="/css/external.css" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/js/external.js" defer></script>
        <script src="assets/js/jquery.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/plugins.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCAuMXqxko3XzV4LngCe3QVhsy19ICKojM"></script>
        <script src="assets/js/google-map-int.js"></script>
        <script src="assets/js/custom-scripts.js"></script>
        <script src="namaz-timings/namaz.js"></script>
      </body>
    </Html>
  );
}
