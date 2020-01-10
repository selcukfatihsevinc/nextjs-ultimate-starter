import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';
import Result from 'antd/lib/result';
import Button from 'antd/lib/button';
import Icon from 'antd/lib/icon';
import config from '@utils/config';

class PageHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Result
          status="success"
          title="Next.js Ultimate Starter | Home"
          subTitle={`env: ${config.name}`}
          style={{ maxWidth: 550, margin: '0 auto' }}
          extra={[
            <Link href="/counter" key="counter">
              <Button type="primary">
                Counter Page <Icon type="right" />
              </Button>
            </Link>,
          ]}
        />
      </div>
    );
  }
}

PageHome.propTypes = {};

const mapStateToProps = () => ({});
const mapActionToProps = {};

export default connect(mapStateToProps, mapActionToProps)(PageHome);
