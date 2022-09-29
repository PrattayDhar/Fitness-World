import React, { useEffect } from 'react';
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
   
    const notify =()=>{
        toast("Wow! You Successfully Completed Activity")
    }
    const Break= (props) => {
        localStorage.setItem("Break Time", props);
        document.getElementById("brktime").innerHTML = `<p>${props}Min</p>`;
    };
    useEffect(() =>{
        const Value = localStorage.getItem("Break Time");
        document.getElementById("brktime").innerHTML =`<p>${Value}Min</p>` ;
    }, []);
    return (
        <div className='mainabout'>
            <ToastContainer position="top-center"
                reverseOrder={false} />
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
                    <div className='btn'onClick={()=>Break(20)} ><button>20s</button></div>
                    <div className='btn'onClick={()=>Break(30)}><button>30s</button></div>
                    <div className='btn'onClick={()=>Break(40)}><button>40s</button></div>
                    <div className='btn'onClick={()=>Break(50)}><button>50s</button></div>
                   
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