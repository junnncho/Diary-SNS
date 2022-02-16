import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import '../styles/global.css';
import wrapper from '../store/configureStore';

const DiarySNS = ({ Component }) => {
  return (
    <>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500&family=Nanum+Pen+Script&display=swap" rel="stylesheet" />
        <title>DiarySNS</title>
      </Head>
      <Component />
    </>
  );
};

DiarySNS.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export function reportWebVitals(metric) {
  console.log(metric);
}

export default wrapper.withRedux(DiarySNS);
