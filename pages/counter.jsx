import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Layout from '@components/Page/Layout';
import PageCounter from '@components/Page/Counter/Index';
import { get } from '@utils/fetch';

class NextPageTest extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static async getInitialProps({ req, query }) {
    const response = await get('https://api.github.com/repos/zeit/next.js');
    return { stars: response.stargazers_count };
  }

  render() {
    const { stars } = this.props;

    return (
      <Layout>
        <PageCounter stars={stars} />
      </Layout>
    );
  }
}

NextPageTest.propTypes = {
  stars: PropTypes.number.isRequired,
};

const mapStateToProps = () => ({});
const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(NextPageTest);
