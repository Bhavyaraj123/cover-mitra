import React from 'react'
import Home_page from '../HomepageItems/Home_page';
import MarqueePage from '../HomepageItems/MarqueePage';
import SipCards from '../HomepageItems/SipCards';
import Choose from '../HomepageItems/Choose';
import Step_policy from '../HomepageItems/Step_policy';
import FinancialServices from '../HomepageItems/FinancialServices';
import insurance from '../../components/pages/insurancepages/Insurance.jsx'
import Insurance from '../../components/pages/insurancepages/Insurance.jsx';
const Home = () => {
 

  return (
    <div className='flex flex-col  '>
    <Home_page/>
    <Insurance/>
    <FinancialServices/>
    <Step_policy/>
    
    <MarqueePage/>
    <SipCards/>
    <Choose/>
</div>
  );
};

export default Home;
