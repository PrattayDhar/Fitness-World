import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import './Cartaside.css'

const Cartaside = () => {
    return (
        <div className='mainabout'>
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
                    <div className='btn' ><button>20s</button></div>
                    <div className='btn'><button>30s</button></div>
                    <div className='btn'><button>40s</button></div>
                    <div className='btn'><button>50s</button></div>
                   
                </div>
            </div>
            <div className='form'>
                <h4>Exercise Details</h4>
                <h5>Exercise time</h5>
                <h5>Break time</h5>
            <button>Activity Completed</button>
            </div>
        </div>
    );
};

export default Cartaside;