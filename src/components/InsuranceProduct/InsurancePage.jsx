import React,{useEffect} from 'react'
import InsuranceHome1 from '../pages/insurancepages/InsuranceHome1'
import InsuranceCard from '../pages/insurancepages/InsuranceCard.jsx'
import InsuranceShowcase from '../pages/insurancepages/InsuranceShowcase'
import InsuranceContact from '../pages/insurancepages/InsuranceContact'

const InsurancePage = () => {
  useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  return (
    <div className='mt-24'>
        <InsuranceHome1/>
        <InsuranceCard/>
        <InsuranceShowcase/>
        <InsuranceContact/>
    </div>
  )
}

export default InsurancePage