import React, { useState, useEffect } from 'react';
import { Api_Url } from '../../common/apiUrl/Index';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const ListItem = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        listData();
    }, []);

    const listData = async () => {
        return await axios
            .get(Api_Url)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    };

    const deleteHandler = async (id) => {
        await axios
            .delete(`${Api_Url}/${id}`)

        return await axios
            .get(Api_Url)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    };

    return (
        <>
            {
                data.map((item, index) => {
                    return (
                        <tr key={item.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>(+ 91){item.phone}</td>
                            <td>
                                <span><NavLink to={`edit/${item.id}`}><button className="btn btn-outline-dark mx-3">Edit</button></NavLink></span>
                                <span><NavLink to='/' onClick={() => deleteHandler(item.id)}><button className="btn btn-outline-dark">Delete</button></NavLink></span>
                            </td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default ListItem;