import React from 'react'

import React from 'react'

import { useEffect, useState } from "react";

const StudentList = () => {
    const [stddata, setStdData] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/details").then((res)=>{
            return res.json();
        }).then((resp)=>{
            console.log(resp.existingDetails
                );
            setStdData(resp.existingDetails
                )
        }).catch((err)=>{
            console.log(err.message)
        })
    }, [])
  return (
    <div className="container ">
        <div className="card pt-10">
            <div className="card-title text-center">
                <h2>Student List</h2>
            </div>
            <div className="card-body">
                <table className="table table-bordered">
                    <thead className="bg-info text-white text-center font-weight-bold">
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>Image</td>
                            <td>Age</td>                           
                            <td>Status</td>                           
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {stddata &&
                        stddata.map((item)=>(
                            <tr className='text-center' key={item._id}>
                                <td>{item._id}</td>
                                <td cl>{item.name}</td>
                                <td>{item.image}</td>
                                <td>{item.age}</td>
                                <td>{item.status}</td>
                            
                                <td>
                                <a className = 'view btn btn-success btn-sm w-40'>View</a>
                                <a className='update btn btn-primary mx-2 btn-sm w-20'>UPDATE</a>
                                <a className = 'delete btn btn-danger btn-sm w-20'>DELETE</a>
                                
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default StudentList
