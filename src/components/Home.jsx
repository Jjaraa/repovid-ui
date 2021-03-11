import React from 'react';
import Login from './Login';

const Home = () => {
    return (
        <div>
            <h1>REPOVID</h1>

            <div className='row'>
                <div className='col'>
                <h6 className='mt-5'>Un sistema para exportacion y visualización de datos para el proyecto de la facultad de negocios.</h6>
                </div>

                <div className='col'>
                    <Login></Login>
                </div>
            </div>
        </div>
    )
}

export default Home