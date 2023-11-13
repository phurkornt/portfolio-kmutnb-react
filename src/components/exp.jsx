
import React from 'react'
import profile from '../img/p1.png'
import {exp_data} from '../components/data/data_exp'
export default function Exp() {
    const bg ={
        backgroundColor:"white",
        padding: "7rem 0"
    }
    const exp = exp_data.map((x)=>{
        return(
            <div className='col-6 mb-5'>
                <div class="card p-5" style={{}}>
                        <p className="text-font text-thai text-dark">{x.textHead}</p>
                        <hr />
                        <p className=" text-thai text-dark">{x.text}</p>
                        <img src={x.img} alt="" />
                </div>
            </div>
        )
    });

    return (
        
        <div id='exp' className='' style={bg}>
           <div className='container'  >
                <p className="text-font-head ">Experience</p>
                <div className='row'>
                    {exp}
                </div>
        
                
           </div>
        </div>
        
    )
}