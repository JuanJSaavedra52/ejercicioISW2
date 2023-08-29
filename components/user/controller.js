// Simila ser una base de datos
const usersArray = [];

const addUser = (name) => {
    if(!name) {
        return Promise.reject('Nombre invalido');
    }else{
        const user = {
            name,
        };
        usersArray.push(user);
        return Promise.resolve(user);
    }
}

const getUser = () => {
    return Promise.resolve(usersArray);
}

export {addUser, getUser}