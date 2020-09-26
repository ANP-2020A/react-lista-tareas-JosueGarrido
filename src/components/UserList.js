import React from "react";
import App from "./App";

const UserList =()=>{
    const initialUsers =()=> {
        console.log('Inicializando estado');
        return [
            {
                name: 'Josue',
                lastname: 'Garrido'
            },
            {
                name: 'Sebas',
                lastname: 'Cordonez'
            },
            {
                name: 'Paul',
                lastName: 'Romero',
            },
        ];
    }


    const [users, setUsers ]= React.useState(initialUsers);

    const handleAddUser=()=>{
        const name = document.querySelector( '#name' ).value;
        const lastName = document.querySelector( '#lastname' ).value;
        const newUser = {
            name,
            lastName
        };
        setUsers((prevState) => [
            ...prevState,
            newUser
        ]);

    }



    return(
        <div>
            <div>
                <label htmlFor='name'>Nombre</label>
                <input type='text' id='name'/>

                <label htmlFor='lastname'>Apellido</label>
                <input type='text' id='lastname'/>

                <button onClick={handleAddUser}>Agregar usuario</button>
            </div>
            <div>
                <h1>Lista de usuarios ({users.length} en total)</h1>
                <ul>
                    {
                        users.map((user, index) => (
                                <li key={index}>{user.name} {user.lastname}</li>
                            )
                        )
                    }
                </ul>
            </div>
        </div>
    );

};

export default UserList;