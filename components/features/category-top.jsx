import Link from 'next/link'
import React from 'react'

const CategoryTop = () => {
  return (
    <div className='d-flex category'>
      {
        ['Parfum', 'Mode', 'Sport', 'Bijoux', 'Enfant', 'Chaussures','Make-up','Mode'].map((item, index) => (
          <Link href={`/shop?category=${item}`} key='index' className='category-item'>
            {item}
          </Link>
        ))
      }
    </div>
  )
}

export default CategoryTop