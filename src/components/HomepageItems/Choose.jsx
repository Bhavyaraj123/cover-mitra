import React from 'react'
import reliable from '../../assets/reliable.jpg'
import claim from '../../assets/claim.jpg'
import  unbiased from '../../assets/unbiased.png'
import bestprice from '../../assets/bestprice.png'
import bg from '../../assets/bgofpolicy.png'


const Choose = () => {
const details=[
    {
        id:1,
        desc:"One of the best Prices",
        subdesc:"Guaranteed",
        img:bestprice

    },
    {
        id:2,
        desc:"Unbiased Advice",
        subdesc:"Keeping customers first",
        img:unbiased
    },
    {
        id:3,
        desc:"100% Reliable",
        subdesc:"Regulated by IRDAI",
        img:reliable

    },
    {
        id:4,
        desc:"Claims Support",
        subdesc:"Made stress-free",
        img:claim


    }
]

  return (
    <div className='py-10 md:px-20 px-5 flex flex-col gap-4 bg-white  bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bg})` }}>
        <div
  className="flex flex-col gap-4"
  data-aos="fade-up"
  data-aos-duration="1000"
>
  <h2 className="text-3xl md:text-4xl font-semibold text-start text-gray-800 mb-2 capitalize">
    Top Reasons to Choose Us
  </h2>
  <p className="text-lg font-medium tracking-normal md:w-2/3 text-wrap text-gray-500">
    When you buy insurance from us, you get more than just financial safety. You also get: our promise of simplifying complex insurance terms and conditions, quick stress-free claims, instant quotes from top insurers and being present for you in the toughest of times.
  </p>
</div>


        <div className="flex flex-wrap justify-center gap-6 py-12 w-full bg-white">
  {details.map((item, index) => (
    <div
      key={index}
      data-aos="zoom-in-up"
      data-aos-delay={index * 100}
      className="bg-purple-50 border-l-4 cursor-pointer border-[#8F87F1] rounded-2xl shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-105 max-w-xs w-full"
    >
      <img
        src={item.img}
        alt=""
        className="h-24 mb-5 object-contain transition-transform duration-300 hover:rotate-3"
      />
      <h3 className="text-xl font-bold text-gray-800 mb-1">{item.desc}</h3>
      <p className="text-sm text-gray-600">{item.subdesc}</p>
    </div>
  ))}
</div>


    </div>
  )
}

export default Choose