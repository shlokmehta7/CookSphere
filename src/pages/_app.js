import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css"; // Global styles

// Custom App component
function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Global Head component for meta tags */}
      <Head>
        <title>CookSphere</title>
        <meta name="description" content="A recipe-sharing platform for food enthusiasts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Global Header */}
      <Header />

      {/* Render the current page */}
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}

export default MyApp;