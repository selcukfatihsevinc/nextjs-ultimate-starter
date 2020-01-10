import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { connect } from 'react-redux';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Next.js Ultimate Starter</title>
          <link rel="stylesheet" href="/assets/css/antd.min.css" />
        </Head>
        <main>{children}</main>
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = () => ({});
const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(Layout);
