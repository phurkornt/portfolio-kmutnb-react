
import React from 'react'
import profile from '../img/p1.png'
export default function Contact() {
    const bg ={
        backgroundColor:"white",
        padding: "7rem 0"
    }
    return (
        
        <div id='contact' className='' style={bg}>
            Contact
           <div className='container'  >
                <p>About</p>
                <p>I was study at </p>
                <div className='row'>
                    <div className='col-6'>
                        <p>วิทยาลัยเทคนิคสุราษฎร์ธานี 2560-2563</p>
                    </div>
                    <div className='col-6'>
                    <div class="card" style={{width:"18rem"}}>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <img src={""} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6'>
                        <div class="card" style={{width:"18rem"}}>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <p>King Mongkut's University of Technology North 2563-Now</p>
                    </div>
                </div>

           </div>
        </div>
        
    )
}