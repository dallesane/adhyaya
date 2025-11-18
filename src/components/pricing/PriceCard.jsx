import React from "react"
import { price } from "../../dummydata"

const PriceCard = () => {
  return (
    <>
      {price.map((val) => (
        <div className='items shadow'>
          <div className='price-header'>
            <h4>{val.name}</h4>
          </div>
          <div className='price-amount'>
            <h1>
              {val.price === "Free" ? (
                <span className='free-price'>{val.price}</span>
              ) : (
                <>
                  <span className='currency'>₨</span>
                  {val.price}
                </>
              )}
            </h1>
          </div>
          <div className='price-description'>
            <p>{val.desc}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default PriceCard
