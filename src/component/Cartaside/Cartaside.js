import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import './Cartaside.css'

const Cartaside = (props) => {
    const {Cart}=props;
    let total=0;
    for(const Exercise of Cart){
        total=Exercise.Time+total;
    };
    const Breaktime=(props)=>{
         document.getElementById("brktime").innerHTML=`<p>${props}s</p>`;
    }
    const notify =()=>{
        toast("wow Nice")
    }
    return (
        <div className='mainabout'>
            <ToastContainer/>
            <div className='name'><h1><FontAwesomeIcon icon={faPeopleGroup} /> Prattay</h1></div>
            
            <div className='about'>
                <div>
                    <h5>Hight</h5>
                    <h5>6inc</h5>
                </div>
                <div>
                    <h5>Weight</h5>
                    <h5>40KG</h5>
                </div>
                <div>
                    <h5>Age</h5>
                    <h5>22 Year</h5>
                </div>
            </div>
            <div className='timemain'>
                <h4>Add A Break</h4>
                <div className='time'>
                    <div className='btn'onClick={()=>Breaktime(20)} ><button>20s</button></div>
                    <div className='btn'onClick={()=>Breaktime(30)}><button>30s</button></div>
                    <div className='btn'onClick={()=>Breaktime(40)}><button>40s</button></div>
                    <div className='btn'onClick={()=>Breaktime(50)}><button>50s</button></div>
                   
                </div>
            </div>
            <div className='form'>
                <h4>Exercise Details </h4>
                <div className='etime'>
                    <h5>Exercise time: </h5>
                    <p>{total} Min</p>
                </div>
                
                <div className='brkt'>
                    <h5>Break time:</h5>
                    <p id='brktime'>
                      
                    </p>
                </div>
               
            <button onClick={notify}>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cartaside;