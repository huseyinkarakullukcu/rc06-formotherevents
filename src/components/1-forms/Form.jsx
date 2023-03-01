import { useState } from "react"

const Form = ()=>{
    const [username, setUsername] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername=(e)=>{
        setUsername(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        alert(`
            username:${username}
            email:${mail}
            password:${password}
        `)

        setMail("")
        setPassword("")
        setUsername("")

    }
    

    return(
        <form onSubmit={handleSubmit} >
            <h2 className="display-6 text-danger">FORMS</h2>

            <div className="mb-3">
                <label htmlFor="username" className="form-label">
                    Username: <span>{username}</span>
                </label>
                <input type="text" className="form-control" id="username" onChange={handleUsername} value={username}  required/>
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">
                    Email: <span>{mail}</span>
                </label>
                <input type="text" className="form-control" id="email" onChange={(e)=>setMail(e.target.value)} value={mail}  required/>
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">
                Password: <span>{password}</span>
                </label>
                <input type="password" className="form-control" id="password" onChange={(e)=>setPassword(e.target.value)} value={password}  required/>
            </div>

            <button type="submit" className="btn btn-danger">Submit</button>
        </form>
    )
}
export default Form