import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HomePage = ({ data }) => {
    const [tasks, setTasks] = useState([])

    function saveToLocal(t){
        localStorage.setItem('B81TaSK', JSON.stringify(t))
    }

    function getFromLocal(){
        return JSON.parse(localStorage.getItem("B81TaSK"))
    }
    async function fetchData(){
            const getDataFromLocal = getFromLocal()
        if(getDataFromLocal){
                setTasks(getDataFromLocal)
        }else{
            setTasks(data)
             saveToLocal(data)
        }
    }


    useEffect(() => {
        fetchData()
    }, [])




    return (
        <>
        <div className="container align-right">
            <Link className='btn btn-primary' to='/create'>Add New Task</Link>
        </div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>

                    </tr>
                </thead>
                <tbody>
                    {tasks.map((t, i) => (
                        <tr key={t.id}>
                            <th scope="row">{i+1}</th>
                            <td>{t.title}</td>
                            <td>{t.description}</td>
                            <td className={`${t.isCompleted ? 'text-success' : 'text-info'}`}>{t.isCompleted ? "Completed" : "In progress"}</td>
                            <td>
                                <Link className='btn btn-success' to={`/edit/${t.id}`}>Edit</Link>
                                <button className='btn btn-danger'>Delete</button>
                                write excute code for delete 

                                add icons for edit delete 

                                and appliaction should look good

                                show calender on one component
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </>
    )
}

export default HomePage