import React from 'react'

const Button = (props) => {
  return (
    <div>
        <button style={{color:props.color}} className='cursor-pointer w-47.75 h-14 font-medium border rounded-b-sm rounded-md mt-4'>Shop Now</button>
    </div>
  )
}
 
export default Button