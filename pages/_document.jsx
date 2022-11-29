import Document, { Html, Head, NextScript } from "next/document"

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        return Document.getInitialProps(ctx)
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
                    <title>Bordo - your favorite clothing store</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:wght@400;500;700&display=swap" rel="stylesheet" />
                    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
                    <link rel="manifest" href="site.webmanifest" />
                </Head>
                <body>
                    <Main />
                    <NextScript />                
                </body>
            </Html>
        )
    }
}