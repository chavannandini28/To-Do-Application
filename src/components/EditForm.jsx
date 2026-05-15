import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditForm = () => {
    const { ID } = useParams()
    const [Task, setTask] = useState({})
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const navigate = useNavigate()



    function getFromLocal() {
        return JSON.parse(localStorage.getItem("B81TaSK"))
    }

    function fetchTask() {
        const tsks = getFromLocal()
        const TASK = tsks.find((t) => t.id == ID)
        setTask(TASK)
        setTitle(TASK.title)
        setDescription(TASK.description)
    }
    useEffect(() => {
        fetchTask()
    }, [])

    function handleFormUpdate(e) {
        e.preventDefault()
        const tsks = getFromLocal()
        const index = tsks.findIndex((t) => t.id == ID)
        if (index == -1) {
            alert("Task not found")
        } else {
            tsks[index].title = title,
                tsks[index].description = description
            localStorage.setItem("B81TaSK", JSON.stringify(tsks))
        }
        navigate('/')
    }

    return (
        <div>
            <form
                onSubmit={handleFormUpdate}
            >
                <div className="mb-3">
                    <label htmlFor="exampleInputtitle" className="form-label">Title</label>
                    <input type="text" className="form-control" id="exampleInputtitle"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputDesci" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputDesci"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                    Show status in of task  
                    code for update 
                <button type="submit" className="btn btn-primary">Update</button>
            </form></div>

    )
}

export default EditForm