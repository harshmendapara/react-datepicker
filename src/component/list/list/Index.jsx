import React, { useState } from 'react';
import ListItem from '../listItem/Index';

const List = () => {
    return (
        <>
            <table className="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <ListItem />
                </tbody>
            </table>
        </>
    )
}

export default List;