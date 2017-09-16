import React from 'react';
import Span from './Span';

const TestStart = (props) => {
return (<div className='panel panel-default'>
  <div className='panel-heading text-center'>
    {props.testName || 'Demo test start'}
  </div>
  <div className='panel panel-body'>
    <div className='col-lg-9 well height-500'>
      <div className='row'>
        <div className='btn btn-primary btn-sm'>
            <Span msg={ props.subject1 || 'Physics'} />
        </div>
          <div className='btn btn-info btn-sm'>
            <Span msg={ props.subject2 || 'Chemistry'} />
          </div>
          <div className='btn btn-success btn-sm'>
            <Span msg={ props.subject3 || 'Maths'} />
          </div>
      </div>
      <div className='row margin-top'>
        <div style={ { 'background-color' :'#4eaefe', color: 'white' } } className='space-top-bottom-5 span panel-heading'>
          <span className='float-left margin-left-5'>Q.{props.questionNumber || '1' }</span>
          <span className='float-right margin-right-5'>MARKS: +{props.positiveMarks || 4 }, -{props.negativeMarks || 1 }</span>
        </div>
        <div className='panel panel-body'>
          <b>A train moving with a uniform speed of 54 kmph. What is its speed in m/s?</b>
          <br/>
          <div class="radio">
          <label><input type="radio" name="optradio"/>10 m/s</label>
          </div>
          <div class="radio">
            <label><input type="radio" name="optradio"/>15 m/s</label>
          </div>
          <div class="radio">
            <label><input type="radio" name="optradio" />1.5 m/s</label>
          </div>
          <div class="radio">
            <label><input type="radio" name="optradio" />0.5 m/s</label>
          </div>
          <hr/>
        </div>
       
      </div>
    </div>
    <div className='col-lg-3 well height-500'>
      <div className='span3'>
        <div className='display-inline-block text-center'>
          <img src='/student.png' className='img-responsive border display-inline-block' height='50' width='50'/>
          <span className='display-inline-block float-right left-space-10'><b>Time Left : </b><span color={props.color || 'red' }>02:00</span></span>
        </div>
        <div className='display-inline-block'>
          
        </div>
      </div>
      <div className='space-top-bottom-5'>
        <div className='btn-primary width-full text-center'>
          {props.selecedSubject || 'Physics' }
        </div>
        <div className='panel panel-body text-center'>
          {buttons(1,23).map(button => button)}
        </div>
        <div className='panel panel-body font-size-75-per'>
          <tabel>
            <tbody>
              <tr>
                <td><label className='btn btn-success btn-sm btn-shape-ticked'>4</label></td>
                <td><label>Answered</label></td>
                <td><label className='btn btn-danger btn-sm btn-shape-unticked float-left'>0</label></td>
                <td><label>Not Answered</label></td>
              </tr>
              <tr>
                <td><button className='space-1 col-xs-1 text-center'>.</button></td>
                <td><label>Not Visited</label></td>
                <td><label className='btn btn-warning btn-sm btn-shape-round float-left'>0</label></td>
                <td><label>Marked for Review</label></td>
              </tr>
              <tr>
                <td>
                  <label className='btn btn-warning btn-sm btn-shape-round float-left'>
                    <span className='glyphicon glyphicon-ok'></span>
                  </label>
                </td>
                <td><label>Answered & Marked for Review</label></td>
              </tr>
            </tbody>
          </tabel>
        </div>
      </div>
    </div>
    <div className='col-sm-9'>
      <div className='btn btn-info float-left margin-right-5'>
        clear response
      </div>
      <div className='btn btn-info float-left margin-left-5'>
        mark for review & next
      </div>
      <div className='btn btn-info float-right'>
        save & next
      </div>
    </div>
    <div className='btn btn-info float-right'>
      Submit
    </div>
  </div>
</div>);
};

const buttons = ( from, to) => {
  const buttons = [];
  for(var i=from; i<=to; i++) {
    buttons.push(<button className='space-1 col-xs-1 text-center'> {i} </button>);
  }
  return buttons;
}
export default TestStart;
