import React from 'react';
import POPOSSpace from '../POPOSSpace/POPOSSpace';
import './POPOSList.css';
import data from '../../sfpopos-data.js'
import { useState } from 'react'
import RandomSpace from '../RandomSpace/RandomSpace'


function POPOSList() {
  const [ query, setQuery ] = useState('');
  const spaces = data.filter((obj) => {
    // true if query is in title
    const inTitle = obj.title.toLowerCase().includes(query.toLowerCase())
    // true if query is in address
    const inAddress = obj.address.toLowerCase().includes(query.toLowerCase())
    // return true if either is true
    return inTitle || inAddress
  })
  .map((obj) => {
    const { id, title, address, images, hours, features} = obj
  // const spaces = data.map(({ title, address, images, hours }, i) => {
    return (
      <POPOSSpace
        id={id}
        key={`${title}-${id}`}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
        features ={features}
      />
    )
  })
    


  return (
    <div>
      <div className="POPOSListForm">
        <div>
          <form>
            <input
              value={query}
              placeholder="search"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className = "randomspace">
          <RandomSpace />
        </div>
        
      </div>
      <div className="POPOSList">
			{spaces}
      </div>
      <div className="Footer">
          <hr className="Line"/>
        <small>Mitchell Hudson copyright 2019</small>
      </div>
    </div>
  )
}
  
  export default POPOSList