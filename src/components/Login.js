import { React, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate  } from "react-router-dom";
import axios from "axios";

export default function Login() {

    const [employeeid, setemployeeid] = useState('');
    const navigate = useNavigate ();

    const handleOnClick = (e) => {

        e.preventDefault();
        axios.post("http://localhost:4000/verifyemployee/", {
            employeeid: employeeid,
        }).then(response => {
            console.log('response >>> ', response);
            console.log(response.data);
            if(response.data.status === 'success')
                navigate('/dashboard');
            else{
                alert('Wrong User Id, please enter a valid username')
                setemployeeid('')
            }

        }).catch(error => {
            console.error('error >>> ', error);
        });
    }

    return (
        <div className='container'>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={employeeid}  onChange={e => setemployeeid(e.target.value)}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Submit</button>
            </form>
        </div>
    )
}
