import { Head } from "next/document"
import { Layout } from "../components/layouts"
import "../styles/style.scss"

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
