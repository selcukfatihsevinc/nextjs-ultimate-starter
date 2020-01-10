import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Result from 'antd/lib/result';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';

const MyError = () => (
  <main>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>404</title>
      <link rel="stylesheet" href="/assets/css/antd.min.css" />
    </Head>
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link href="/" key="home">
            <Button type="primary">
              <Icon type="left" /> Back Home
            </Button>
          </Link>
        }
      />
    </div>
  </main>
);

export default MyError;
