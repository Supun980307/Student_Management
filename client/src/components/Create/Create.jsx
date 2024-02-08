import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Create = () => {

    const[id, setId] = useState()
    const[name, setName] = useState()
    const[image, setImage] = useState()
    const[age, setAge] = useState()
    const[status, setStatus] = useState()
   const fileHandle=(e)=>{
    setImage(e.target.files[0]);
   }

    const savePost = async () => {

        try {
            const formData = new FormData();
            formData.append('id', id);
            formData.append('name', name);
            formData.append('image', image); // Here, 'image' should be the actual file object, not its value
            formData.append('age', age);
            formData.append('status', status);
        
    
            console.log("request sent...");
            console.log(formData)
            const response = await axios.post('http://localhost:8080/detail/save', formData, { headers: { 'Content-Type': 'multipart/form-data' } });
            console.alert('Details saved Succesfully', response.data);
        } catch (error) {
        
            console.log('Error saving Details ', error)
        }
    }
  return (
    <div className = "row mt-5">
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={savePost}>

            <div className="card text-left">
                <div className="card-title text-center">
                    <h2>Create Student</h2>
                </div>
                <div className="card-body">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Student ID</label>
                                <input type="text" name="id" value={id} onChange={e=>setId(e.target.value)} className="form-control"/>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" value={name} onChange={e=>setName(e.target.value)} className="form-control"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                <label>Image</label>
                                    <input type="file" name="image" onChange={(e)=>fileHandle(e)} className="form-control"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="text" name="age" value={age} onChange={e=>setAge(e.target.value)} className="form-control"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Status</label>
                                    <input type="text" name="status" value={status} onChange={e=>setStatus(e.target.value)} className="form-control"/>
                                </div>
                            </div>
                            {/* <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Status</label>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                        <label className="form-check-label" for="flexSwitchCheckDefault">Active</label>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-lg-12 ">
                                        <div className="form-group my-3">
                                           <button className="btn btn-primary mx-2" type="submit" onClick={savePost}>Save</button>
                                           <Link to="/Home" className="btn btn-primary mx-2">Back</Link>
                                        </div>
                                    </div>
                           
                            

                         
                        </div>


                    </div>
                </div>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Create
