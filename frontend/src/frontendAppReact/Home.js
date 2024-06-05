import { React } from 'react';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import './Home.css';

const Home = () => {

    const [inputs, setInputs] = useState({
        title: "",
        body: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
        // console.log(e.target.name + " " + e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(inputs);

        const sendRequest = async () => {
            await fetch('http://localhost:8080/post', {
                        method:"POST",
                        headers:{'Content-Type' : 'application/json'},
                        body:JSON.stringify({
                            title: inputs.title,
                            body: inputs.body
                        })
                    })
                    .then((res)=>res.json())
                    .then(()=>navigate('/notes'))
                    .catch((err)=>console.log(err));
        }

        sendRequest();    
    }

    return (
        <div className='home'>
            <h4>Add a new note</h4>
            <form className='form-control' onSubmit={submitHandler}>
                <TextField onChange={handleChange} value={inputs.title} name="title" margin="normal" id="outlined-title" label="Note's title" variant="outlined" />
                <TextField onChange={handleChange} value={inputs.body} name="body" margin="normal" id="outlined-body" label="Note's body" variant="outlined" />
                <br></br>
                <Button type="submit" variant="contained">Create note</Button>
            </form>
        </div>
    )
}

export default Home 