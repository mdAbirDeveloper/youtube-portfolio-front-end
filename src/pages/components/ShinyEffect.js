import React from 'react'

const ShinyEffect = ({left, right, top, size =  500}) => {

    const positionsStyle = {
        top: `${top}px`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: -1,
    };

    if(left !== undefined) {
        positionsStyle.left = `${left}px`
    }

    if(right !== undefined) {
        positionsStyle.right = `${right}px`
    }

  return (
    <div className='shiny-effect' style={positionsStyle}></div>
  )
}

export default ShinyEffect;