import React from 'react';
import { Link } from 'react-router-dom';
import Span from './Span';

const TestOptions = (props) => (
  <div className='panel panel-default'>
    <div className='panel-heading text-center'>
      <h5>Please Choose Your Test Module</h5>
    </div>
    <div className='panel panel-body text-center row'>
      <div className='col-xs-2'>
        <Link to='/test/jee-main' className='btn btn-default btn-lg btn-block'>
          <Span className='glyphicon glyphicon-check' /><br/>
          <Span msg='JEE Main' />
        </Link>
      </div>
      <div className='col-xs-2'>
        <Link to='/test/jee-advanced' className='btn btn-default btn-lg btn-block'>
          <Span className='glyphicon glyphicon-ok-circle'/><br/>
          <Span msg='JEE Advanced' />
        </Link>
        </div>
        <div className='col-xs-2'>
        <Link to='/test/neet' className='btn btn-default btn-lg btn-block'>
          <Span className='glyphicon glyphicon-plus-sign'/><br/>
          <Span msg='NEET' />
        </Link>
        </div>
        <div className='col-xs-2'>
        <Link to='/test/bitsat' className='btn btn-default btn-lg btn-block'>
          <Span className='glyphicon glyphicon-tasks'/><br/>
          <Span msg='BITSAT' />
        </Link>
        </div>
        <div className='col-lg-2'>
        <Link to='/test/viteee' className='btn btn-default btn-lg btn-block'>
          <Span className='glyphicon glyphicon-link'/><br/>
          <Span msg='VITEEE' />
        </Link>
        </div>
        <div className='col-lg-2'>
        <Link to='/test/kvpy' className='btn btn-default btn-lg btn-block'>
          <Span className='glyphicon glyphicon-th-list'/><br/>
          <Span msg='KVPY' />
        </Link>
        </div>
    </div>
  </div>
);
export default TestOptions;