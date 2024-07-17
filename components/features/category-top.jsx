import React from 'react'

const CategoryTop = () => {
  return (
    <div className='d-flex category'>
      {
        ['Chaussures', 'Mode', 'Sport', 'Bijoux', 'Enfant', 'Parfum','Make-up','Mode'].map((item, index) => (
          <span key='index' className='category-item'>
            {item}
          </span>
        ))
      }
    </div>
  )
}

export default CategoryTop