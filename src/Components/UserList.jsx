import React from 'react'
import "../Styles/UserList.styles.css"

const UserList = ({usuarios,selectUser,deleteUser}) => {
    return (
        <ul className='ul'>
            {
                usuarios.map(usuario =>(
                    <li className='li' key={usuario.id}>
                         <section className='first-section'>
                            <div className="container-name">
                                <h3>{usuario.first_name}</h3>
                                <h3>{usuario.last_name}</h3>
                            </div>
                            <p className='email'>{usuario.email}</p>
                            <p><i className="fas fa-birthday-cake"></i>{usuario.birthday}</p>
                        </section>
                        <section className='second-section'>
                            <button className='btn-delete' onClick={() => deleteUser(usuario.id)}>
                            <i className="fas fa-user-times"></i>
                            </button>

                            <button className='btn-edit' onClick={() => selectUser(usuario, usuario.id)} >
                                <i className="fas fa-user-edit"></i>
                            </button>
                        </section>
                    </li>
                ))
            }
        </ul>    
        
    )
}

export default UserList
