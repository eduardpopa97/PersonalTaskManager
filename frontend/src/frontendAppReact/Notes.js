import React from "react";
import Note from "./Note";
import "./Notes.css";
import { useState, useEffect } from "react";

const DUMMY_NOTES = [
    {
        image: "https://images.freeimages.com/fic/images/icons/102/openphone/256/notes.png",
        title: "A simple task",
        body: "The task's description"
    },
    {
        image: "https://images.freeimages.com/fic/images/icons/102/openphone/256/notes.png",
        title: "A simple task",
        body: "The task's description"
    },
    {
        image: "https://images.freeimages.com/fic/images/icons/102/openphone/256/notes.png",
        title: "A simple task",
        body: "The task's description"
    }
];

const Notes = () => {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchHandler = async () => {
            await fetch('http://localhost:8080/post')
            .then((res) => res.json())
            .then((data) => setNotes(data.posts))
            .catch((err) => console.log(err));
        }
        fetchHandler();
    }, [])

    console.log(notes);

    return (
        <div className="main">
            <ul>
                {notes.map((note, key) => (
                    <li key={key}>
                        <Note 
                        id={note._id} 
                        image="https://images.freeimages.com/fic/images/icons/102/openphone/256/notes.png"
                        title={note.title} 
                        body={note.body}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Notes;