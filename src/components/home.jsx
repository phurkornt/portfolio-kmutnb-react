
import React from 'react'
import profile from '../img/p1.png'
import cloudy from '../img/cloudy.png'
import mountain from '../img/mountain3.png'
export default function Home() {
    const bg ={
        backgroundColor:"#E0EBE8",
        padding: "12rem 0"
    }
    return (
        <div id='home' className='al' style={bg}>
          
           <div className='container' >
                <div className='row'>
                    <div className='col-sm-12 col-mg-6 col-lg-6 mt-2'>
                        <p className='text-font-headless'>Hey there.</p>
                        <p className='text-font'>I'm Pu a student of Kmutnb</p>
                        <p className='text-font'>
                            My interest about Technology AI and History
                        </p>
                        
                    </div>
                    <div className='col-sm-12 col-mg-6 col-lg-6 '>
                        <div className='d-flex  justify-content-center'>
                            <img  src={profile} style={{width:"20rem"}}  />
                        </div>
                    </div>

                </div>
                <button className='btn btn-dark mt-5'>
                        <a href="#contact" className='p-4 ' style={{fontSize:"1.5rem",textDecoration:"none" , color:"white"}}>
                        Click to see my contact
                        </a>
                </button>
           </div>
        </div>
    )
}