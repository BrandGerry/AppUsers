import "../Styles/UsersForm.styles.css"
import React,{useState,useEffect} from 'react';


const UsersForm = ({addUser,userSelected,updateUser,deselectUser}) => {

    const[name,setName] = useState("");
    const[apellido,setApellido] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[birthday,setBirthday] = useState("")

    const submit= (e) =>{
        e.preventDefault();
        const usuario = {
            first_name: name,
            last_name: apellido,
            email: email,
            password: password,
            birthday: birthday
        }
        if(userSelected !== null){
            updateUser(usuario)
            reset()
        } else{
           addUser(usuario)
           reset()
        }
        reset();
    }

    useEffect(()=>{
        if(userSelected !== null){
            setName(userSelected.first_name)
            setApellido(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        } else{
            reset();
        }
    },[userSelected])

    const reset = () =>{
        setName("");
        setApellido("");
        setEmail("");
        setPassword("");
        setBirthday("");
    }

    

    return (
        <form onSubmit={submit} className="users-form">
            <h2>Register</h2>
            <section className='inputs-container'>
                <article className='inputs-name'>
                    <div className="input-container">
                        <div className="cointainer-label">
                            <label htmlFor="first_name"><i className="fas fa-user"></i></label>
                        </div>
                        <input  
                            placeholder="Nombre" 
                            type="text" 
                            id='first_name' 
                            value={name} 
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label htmlFor="last_name"></label>
                        <input placeholder="Apellido" 
                            type="text" id='last_name' 
                            value={apellido} 
                            onChange={e => setApellido(e.target.value)}
                        />
                    </div>
                </article>

                <div className='input-container'>
                    <div className="cointainer-label">
                        <label htmlFor="email"><i className="far fa-envelope"></i></label>
                    </div>
                    <input placeholder=" email" 
                        type="text" 
                        id='email' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
               
                <div className='input-container'>
                    <div className="cointainer-label">
                        <label htmlFor="password"><i className="fas fa-key"></i></label>
                    </div>
                    <input type="password" 
                        id='password' 
                        value={password} 
                        placeholder='Password'
                        onChange={e => setPassword(e.target.value)} 
                    />
                </div>

                <div className='input-container'>
                    <div className="cointainer-label">
                        <label htmlFor="birthday"><i className="fas fa-birthday-cake"></i></label>
                    </div>
                    <input type="date" 
                        placeholder='Birthday'
                        id='birthday' 
                        value={birthday} 
                        onChange={e => setBirthday(e.target.value)} 
                    />
                </div>
            </section>

            <section className='btns'>
                <button>Submit</button>
                <button type="button" onClick={deselectUser}>Deseleccionar</button>
            </section>
            
            
            
        </form>
    )
};

export default UsersForm;
