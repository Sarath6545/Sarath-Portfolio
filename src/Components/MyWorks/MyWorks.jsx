import React from 'react'
import './MyWorks.css'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWorks = () => {
  return (
    <div id='work' className='myworks'>
        <div className="myworks-title">
            <h1>My Latest Works</h1>
        </div>
        <div className="myworks-container">
            {mywork_data.map((Work,index) =>{
                return <img key={index} src={Work.w_img} alt="" />
            })}
        </div>
        <div className="myworks-showmore">
            <p>Show More</p>
            <img src={arrow_icon} alt="" />
        </div>
      
    </div>
  )
}

export default MyWorks
