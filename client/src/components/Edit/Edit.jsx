import React from 'react'

const Edit = () => {
  return (
    <div className = "row">
      <div className="offset-lg-3 col-lg-6">
        <form className="container">

            <div className="card text-left">
                <div className="card-title text-center">
                    <h2>Create Student</h2>
                </div>
                <div className="card-body">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="form-group">
                                <label>Student ID</label>
                                <input type="text" name="id" value={""} className="form-control"/>
                            </div>

                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input type="text" name="name" value={""} className="form-control"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Image</label>
                                    <input type="file" name="image" value={""} className="form-control"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Age</label>
                                    <input type="text" name="age" value={""} className="form-control"/>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Status</label>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                                        <label className="form-check-label" for="flexSwitchCheckDefault">Active</label>
</div>
                                </div>
                            </div>
                            <div className="col-lg-12 ">
                                        <div className="form-group my-3">
                                           <button className="btn btn-success mx-2" type="submit">Update</button>
                                           <button className="btn btn-primary mx-2">Back</button>
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

export default Edit
