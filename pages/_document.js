import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

//Documento responsável pelo uso de fontes do google
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {...initialProps};
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
          <link href="https://fonts.googleapis.com/css2?family=Ms+Madi&family=Roboto:wght@400;700;900&family=Ubuntu:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    )
  }
}



export default MyDocument