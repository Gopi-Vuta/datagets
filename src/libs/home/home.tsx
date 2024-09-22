import React from 'react'
import ProtectedSection from '../auth/protected-section'
import { useAuth } from '../auth/use-auth-hook'
import HeroImage from '../../assets/images/hero.svg'
import { Typography } from '@mui/material'

const Home = () => {
  const { username } = useAuth();
  const renderUserGreetingSection = () => {
    return <ProtectedSection>
      {<div className='mb-8 font-mono text-2xl font-bold text-main-light'>
        <h6>Hi {username}, Welcome!</h6>
      </div>}
    </ProtectedSection>
  }

  return (
    <div className='flex justify-center items-center'>
      <div className='flex w-full'>
        <div className='w-1/2'>
          <div className='ml-24 mt-48'>
            {renderUserGreetingSection()}
            <div className='font-extrabold text-5xl text-main-medium'>
              <h3>Laser focus, high impact</h3>
            </div>
            <div className=' my-14 text-lg'>
              <ul className="list-disc">
                <li><b>Boutique data consultancy:</b> we are focused at the intersection of Data and Marketing + Digital Commerce</li>
                <li><b>Industry leading solutions:</b> our founders have 20 yrs+ experience in building and refining data solutions at Fortune 50 companies</li>
                <li><b>Measurable Impact</b> - granular attribution framework that links your data products to Revenue or other KPI lift</li>
                <li><b>Flexible engagement model</b> - you pay 'only' when our solutions improves your KPIs or project-based fixed cost or time/labor based costing</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          <div className='m-14'>
            <img src={HeroImage} alt="Image explaining datagets"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
