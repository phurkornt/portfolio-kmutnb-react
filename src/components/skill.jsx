import React from "react";
import img_skill from "../img/skill.png"
export default function Skill(){
    const bg ={
        backgroundColor:"#E0EBE8",
        padding: "5rem 0"
    }
    return(
        <div id='skill' className='al' style={bg} >
            <div className="container ">
                <p className="text-font-head text-dark">My Skill</p>

                <div className="row text-center">
                    <div className='col-12'>
                        <div class="card p-5" style={{}}>
                            <div class="card-body text-center">
                                    <img src={img_skill} alt="" />
                            </div>
                        </div>
                    </div>
                    
                   

                </div>

            </div>
        </div>
    )
}