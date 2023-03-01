import { useState } from "react"

const FormWithObject = ()=>{

    const [formData, setFormData]=useState({
        username:"",
        email:"",
        password:"",
        address:""
    })

    //destr
    const {username, email, password, address} = formData

    const handleFormData = (e)=>{
        setFormData({...formData,
            [e.target.id]:e.target.value}
            )
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(`
            username:${username}
            email:${email}
            password:${password}
            address:${address}
        `)

        setFormData({
            username:"",email:"",password:"",address:""
        })
    }
    

    return(
        <form onSubmit={handleSubmit} >
            <h2 className="display-6 text-danger">FORMS</h2>

            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Username: <span>{username}</span>
                </label>
                <input type="text" className="form-control" id="username" onChange={handleFormData} value={username || ""} //? username yoksa input'un value'suna null ata
          //! controlled - uncontrolled error (eger bir input value'su undefined olursa boyle bir hata gelir.)
         
                  required/>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email: <span>{email}</span>
                </label>
                <input type="text" className="form-control" id="email" onChange={handleFormData} value={email || ""}  required/>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                Password: <span>{password}</span>
                </label>
                <input type="password" className="form-control" id="password" onChange={handleFormData} value={password || ""}  required/>
            </div>

            <div className="mb-3">
                <label htmlFor="address" className="form-label">
                    Address: <span>{address}</span>
                </label>
                <input type="text" className="form-control" id="address" onChange={handleFormData} value={address || ""}  required/>
            </div>

            <button type="submit" className="btn btn-danger">Submit</button>
        </form>
    )
}
export default FormWithObject