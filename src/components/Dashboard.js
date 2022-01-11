import { React, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Dashboard() {

    const navigate = useNavigate();
    const backToLogin = () => {
        navigate('/')
    }

    const [dashboard, setdashboard] = useState([""]);

    const getDashboardData = async () => {

        // creating a function 'getProductData' to fetch the data from API
        const data = await axios.post(
            "http://localhost:4000/get_current_details/"
        );

        setdashboard(data.data);
    };
    console.log(dashboard);

    useEffect(() => {
        getDashboardData();
    }, []);

    let compItems;
    let compItemsArray = [];
    // for (const key in dashboard) {

        console.log(dashboard.name);
        compItems = (

            <tr className='text-center'>
                <td scope="col">{dashboard.name}</td>
                <td scope="col">{dashboard.email}</td>
                <td scope="col">{dashboard.phone}</td>
                <td scope="col">{dashboard.organization_name}</td>
            </tr>
        )

        compItemsArray.push(compItems);
    // }

    return (
        <div className='container'>
            <h1>Welcome to Dashboard</h1>
            <hr />
            <table className="table table-striped table-hover table-primary">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Organization</th>
                    </tr>
                </thead>
                <tbody>
                    {compItemsArray}
                </tbody>
            </table>
            <br />
            <a onClick={backToLogin}>Go to Login</a>
        </div>
    )
}
