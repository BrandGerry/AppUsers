//STYLOS
import './App.css';
//HOOKS
import {useState,useEffect} from "react";
//AXIOS
import axios from "axios"
//COMPONENTS
import UserList from './Components/UserList';
import UsersForm from './Components/UsersForm';

function App() {
  //USESTATE
  const [usuarios,setUsuarios] = useState([])
  const [userSelected,setUserSelected] = useState(null)
  //Traer usuarios
  useEffect(() => {
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res => setUsuarios(res.data)) 
  }, []);

  //Añadir,eleminar y actualizar
  const addUser = (usuario) => {
    axios.post("https://users-crud1.herokuapp.com/users/", usuario)
      .then(() => getUsers());
  };
  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(() => getUsers());
  }
  const updateUser = (editUser) => {
    axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, editUser)
    .then(() => getUsers());
  }

  //Funcion base para actualizar en cada paso anterior sin recargar pag
  const getUsers = () =>{
    axios.get("https://users-crud1.herokuapp.com/users/")
    .then(res => setUsuarios(res.data))
  }
  //Seleccionar y deseleccionar usuarios mediante parametros
  const selectUser = usuario => setUserSelected(usuario)

  const deselectUser = () => setUserSelected(null);

  return (
    <div className="App">
      <UsersForm
      addUser={addUser}
      userSelected={userSelected}
      updateUser={updateUser}
      deselectUser={deselectUser}/>
      <UserList
      usuarios={usuarios}
      deleteUser={deleteUser}
      selectUser={selectUser}/>
      
    </div>
  );
}

export default App;
