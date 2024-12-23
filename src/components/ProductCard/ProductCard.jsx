import React from 'react'

export default function ProductCard({name, description, img}) {
  return (
    <div className='w-[500px] h-[250px] bg-cardBg flex p-5 justify-between'>
        <div className="cardInfo w-[60%]">
            <h4 className='font-semibold text-2xl text-black'>{name}</h4>
            <p className='font-light text-sm text-black my-3'>{description}</p>
            <button className='w-[140px] h-[50px] border-2 border-darkOrange text-darkOrange font-medium hover:bg-darkOrange hover:text-white transition-all duration-500 my-5'>Buy Now</button>
        </div>
        <div className="imgContainer w-[40%] flex justify-center">
            <img src={img} alt="product img" className='h-[200px]' />
        </div>
    </div>
  )
}
