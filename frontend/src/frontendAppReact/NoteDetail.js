import { React, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button } from '@mui/material';
import "./NoteDetail.css";
import { useNavigate } from "react-router-dom"

const NoteDetail = () => {
    const id = useParams().id;

    const [note, setNote] = useState([]);

    const [inputs, setInputs] = useState({
        title: "",
        body: ""
    });

    const navigate = useNavigate();

    useEffect(() => {
        const fetchHandler = async () => {
            await fetch(`http://localhost:8080/post/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setNote(data.post);
                setInputs({
                    title: data.post.title,
                    body: data.post.body
                });
            })
            .catch((err) => console.log(err));
        }
        fetchHandler();
    }, [])

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.name] : e.target.value
        }))
    };

    const submitHandler = (e) => {
        e.preventDefault();
        // console.log(inputs);

        const sendRequest = async () => {
            await fetch(`http://localhost:8080/post/${id}`, {
                        method:"PATCH",
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
        <div className='update-form'>
        <h4>Update note</h4>
        <form className='form-control' onSubmit={submitHandler}>
            <TextField onChange={handleChange} value={inputs.title} name="title" margin="normal" id="outlined-title" label="Note's title" variant="outlined" />
            <TextField onChange={handleChange} value={inputs.body} name="body" margin="normal" id="outlined-body" label="Note's body" variant="outlined" />
            <br></br>
            <Button type="submit" variant="contained">Edit note</Button>
        </form>
        </div>
       
    )
}

export default NoteDetail;