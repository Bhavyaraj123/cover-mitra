import React from 'react'
import FinanceHome from '../pages/Financepages/FinanceHome.jsx'
import Sip from '../pages/Financepages/Sip.jsx'
import Loan from '../pages/Financepages/Loan.jsx'
import WhyChooseUs from '../pages/Financepages/WhyChooseUs.jsx'

const Financepage = () => {
  return (
    <div className='mt-16'>
      <FinanceHome/>
      <Sip/>
      <Loan/>
      <WhyChooseUs/>
    </div>
  )
}

export default Financepage