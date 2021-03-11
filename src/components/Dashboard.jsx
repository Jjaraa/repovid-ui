import React, { useState } from 'react';

const Dashboard = () => {

    const [filter, setFilter] = useState('')
    const [filters, setFilters] = useState([])

    const addFilter = (e) => {
        e.preventDefault()
        setFilters([...filters, filter])
        setFilter('')
    }

    return (
        <div className='row mt-5'>
            <div className='col'>
            <button className='btn btn-primary mb-4'>Agregar registro</button>
                <h3>Previsualizacion de datos</h3>
                
                <table className='table mt-5'>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Partida Arancelaria</th>
                            <th scope="col">Producto</th>
                            <th scope="col">FOB</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>02012000</td>
                            <td>CARNE DE VACUNO</td>
                            <td>1659,86</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>02012000</td>
                            <td>CARNE DE BOVINO</td>
                            <td>1154,89</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>02012000</td>
                            <td>CARNE DE BOVINO REFRIGERADA</td>
                            <td>1818,89</td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" className="btn btn-primary float-right">Exportar a excel</button>
            </div>

            <div className='col ml-5'>
                <h3>Filtros</h3>
                <div className='mt-5'>

                    <input
                        className='form-control'
                        placeholder='Partida arancelaria'
                        type="text" />

                    <h5 className='mt-3'>Año: </h5>
                    <select aria-label='Año'>
                        <option value="1">2020</option>
                        <option value="2">2019</option>
                        <option value="3">2028</option>
                    </select>

                    <div className='row mt-3'>
                        <div className='col'>
                            <form onSubmit={addFilter} className='form-group'>
                                <input onChange={(e) => { setFilter(e.target.value) }} className='form-control mb-3' type="text" placeholder='Nuevo filtro' value={filter} />
                                <input className='btn btn-info btn-block' type="submit" value='Agregar filtro' />
                            </form>

                            <button className='btn btn-primary float-right mt-5'> Buscar</button>
                        </div>

                        <div className='col'>
                            <h5>Filtros agregados</h5>
                            <ul className='list-group'>
                                {
                                    filters.map(item =>

                                        <li className='list-group-item'>{item}</li>

                                    )
                                }
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dashboard