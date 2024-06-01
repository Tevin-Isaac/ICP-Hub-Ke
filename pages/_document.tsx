import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
          <meta name="description" content="Welcome to ICP Hub Kenya, your gateway to the Internet Computer blockchain in Kenya. We are dedicated to fostering the growth and adoption of blockchain technology in our region." />
          <meta name="robots" content="hubs,follow" />
          <meta name='tags' content='icp,blockchain,canisters' />
        <link
          rel="shortcut icon"
          href="/images/favicon.svg"
          type="image/x-icon"
        />
      </Head>
        <body>
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}

export default Document
