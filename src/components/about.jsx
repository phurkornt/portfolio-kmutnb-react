
import React from 'react'
import education_1 from '../img/education_1.jpg'
import education_2 from '../img/education_2.jpg'

export default function About() {
    const bg = {
        backgroundColor: "#F5F5F7",
        padding: "4rem 0"
    }
    const img_size = {
        width: "35rem",
        height:"22rem"
    }
    const img_size2 = {
        width: "35rem",
        height:"30rem"
    }

    return (

        <div id='about' className='' style={bg}>
            <div className='container'  >
                <p className='text-font-head'>About (My Education)</p>
                <div className='row pt-5'>

                    <div className='col-1'></div>
                    <div className='col-10'>
                        <div class="card" style={{}}>
                            <div class="card-body text-center">
                                <h5 class="text-font-d ">Suratthani Technical College 2560-2563 </h5><br />
                                <hr />
                                <img src={education_1} style={img_size} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-1'></div>
                    
                    <div className='my-3'></div>

                    <div className='col-1'></div>
                    <div className='col-10'>
                        <div class="card" style={{ }}>
                            <div class="card-body text-center">
                                <h5 class="text-font-d ">KMUTNB 2563-Now  </h5><br />
                                <hr />
                                <img src={education_2} style={img_size2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='col-1'></div>
                </div>


                <p></p>
            </div>
        </div>

    )
}