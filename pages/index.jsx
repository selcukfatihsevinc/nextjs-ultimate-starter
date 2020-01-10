import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { connect } from 'react-redux';
import Layout from '@components/Page/Layout';
import PageHome from '@components/Page/Home/Index';

class NextPageIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout>
        <PageHome />
      </Layout>
    );
  }
}

NextPageIndex.propTypes = {};

const mapStateToProps = () => ({});
const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(NextPageIndex);
