
import React from 'react'
import profile from '../img/p1.png'
import * as Icon from 'react-bootstrap-icons';

export default function Contact() {
    const bg ={
        backgroundColor:"#E0EBE8",
        padding: "5rem 0"
    }
    return (
        
        <div id='contact' className='' style={bg}>
           <div className='container'  >
                <p className="text-font-head text-dark">Contact</p>
                <hr />
                <div className='my-2'>
                    <Icon.Phone size={42}/>
                    <span style={{display:'inline'}} className='mb-3 mx-2'>Tel : 0625976969</span>
                </div>
                <div className='my-2'>
                    <Icon.Mailbox2 size={42}/>
                    <span style={{display:'inline'}} className='mb-3 mx-2'>Email : phurikornpt@gmail.com</span>
                </div>
                <div className='my-2'>
                    <Icon.Github size={42}/>
                    <span style={{display:'inline'}} className='mb-3 mx-2'>Github :  @github.com/phurkornt</span>
                </div>
             
                    
                    
            
           </div>
        </div>
        
    )
}