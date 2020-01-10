import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Result from 'antd/lib/result';
import Button from 'antd/lib/button';
import Statistic from 'antd/lib/statistic';
import Icon from 'antd/lib/icon';
import { increment, decrement } from '@actions/counter';
import config from '@utils/config';

class PageCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { stars, increment: incrementAction, decrement: decrementAction, counter } = this.props;

    return (
      <div>
        <Result
          status="success"
          title="Next.js Ultimate Starter | Counter Page"
          subTitle={`env: ${config.name}, stars: ${stars}`}
          style={{ maxWidth: 550, margin: '0 auto' }}
          extra={[
            <React.Fragment key="counter">
              <Statistic title="counter" value={counter.count} style={{ marginBottom: 12 }} />
              <Button onClick={() => incrementAction()}>+</Button>
              <Button onClick={() => decrementAction()}>-</Button>
              <div style={{ marginTop: 12 }}>
                <Link href="/">
                  <Button type="primary">
                    <Icon type="left" /> Home Page
                  </Button>
                </Link>
              </div>
            </React.Fragment>,
          ]}
        />
      </div>
    );
  }
}

PageCounter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.objectOf(PropTypes.any).isRequired,
  stars: PropTypes.number.isRequired,
};

const mapStateToProps = ({ counter }) => ({
  counter,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(PageCounter);
