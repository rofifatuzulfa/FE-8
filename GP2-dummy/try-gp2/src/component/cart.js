import React from 'react'
import { Table, Button } from "react-bootstrap";
import sepatu from "../assets/sepatu.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faPlusCircle, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    return (
        <div>
            <Table responsive>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ width: '35%' }}><img src={sepatu} style={{ width: '100%', objectFit: 'cover' }} /></td>
                        <td className='w-25'>
                            <h5 className='pb-2'>Sneakers Aventador</h5>
                            <p>Size : 40</p>
                            <p>Brand : Sneakers</p>
                        </td>
                        <td>
                            <div className='d-flex justify-content-center'>
                                <Button className='w-75 text-center' variant='secondary'>Buy</Button>
                            </div>
                        </td>
                        <td>
                            <div>
                                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                            </div>
                        </td>
                        <td>
                            <p>Rp 6.000.000</p>
                        </td>
                    </tr>
                    <tr>
                        <td style={{ width: '35%' }}><img src={sepatu} style={{ width: '100%', objectFit: 'cover' }} /></td>
                        <td className='w-25'>
                            <h5 className='pb-2'>Sneakers Aventador</h5>
                            <p>Size : 40</p>
                            <p>Brand : Sneakers</p>
                        </td>
                        <td>
                            <div className='d-flex justify-content-center'>
                                <Button className='w-75 text-center' variant='secondary'>Buy</Button>
                            </div>
                        </td>
                        <td>
                            <div>
                                <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                            </div>
                        </td>
                        <td>
                            <p>Rp 6.000.000</p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Cart