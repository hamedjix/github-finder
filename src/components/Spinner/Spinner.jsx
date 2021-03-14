import React, { Fragment } from 'react';
import Spin from './spin.gif';
import './Spinner.scss';

const Spinner = () => {
  return (
    <Fragment>
      <img className='Spinner' src={Spin} alt='Loading...' />
    </Fragment>
  );
};

export default Spinner;
