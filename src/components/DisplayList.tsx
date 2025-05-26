import React from 'react'

const DisplayList = () => {
    const items = ["Item 1", "Item 2", "Item 3"]; // Example items, replace with actual data

  return (
    <>
        <div>DisplayList</div>
        <ul>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </>
  )
}

export default DisplayList;