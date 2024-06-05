import React from "react";
import "./Note.css";
import { Link, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';

const Note = (props) => {

    const navigate = useNavigate();

    const deleteHandler = async () => {
        await fetch(`http://localhost:8080/post/${props.id}`, {
            method:"DELETE"
        })
        .then((res)=>res.json())
        .then(()=>navigate("/notes"))
        .catch((err)=>console.log(err));
    }

    return (
        <div className="product-main">
            <div className="card">
                <img src={props.image} alt={props.title} />
                <hr />
                <h4>{props.title}</h4>
                <p>{props.body}</p>
                <Button className="link-url" onClick={deleteHandler}>Delete</Button>
                <Button>
                    <Link className="link-url" to={`/note/${props.id}`}>Edit</Link>
                </Button>
            </div>
        </div>
    )
}

export default Note