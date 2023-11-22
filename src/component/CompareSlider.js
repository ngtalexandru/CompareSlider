import React from 'react'
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

const CompareSlider = () => {
  return (
    <div className='slidercontainer'> 
        <ReactCompareSlider className='compareslider'
        itemOne={ <ReactCompareSliderImage src="before.png" alt="Image One" />}
        itemTwo={ <ReactCompareSliderImage src="after.png" alt="Image Two" />}
        />
    </div>
  )
}

export default CompareSlider