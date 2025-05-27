import React from 'react'
import Age from './Age';

const Test = () => {
    let isCondition = true;

  return (
    <>
        <div>Test</div>
        {!isCondition && <Age />}
        
    </>
  )
}

export default Test