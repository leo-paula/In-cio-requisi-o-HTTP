const userArr = [
    {
        email: 'leonardo.gamer@gmail.com',
        senha: 'abdiquei',
        __id: 0
    },
    {
        email: 'torugo.programer@gmail.com',
        senha: 'trono',
        __id: 1
    },{
        email: 'vitão.nerd@hotmail.com',
        senha: 'reinado',
        __id: 2
    },{
        email: 'alfa.agiotagem@gmail.com',
        senha: 'súditos',
        __id: 3
    },
]

export const fetchUsers = (req,res) => {
    try {
        res.status(200).send({message: userArr})
    } catch (error) {
        res.status(404).send({message: error.message})
    }
}

export const getUserById = (req,res) => {
    try {
        let existingUser
        const {id} = req.params
        userArr.forEach(element => {
            if (id == element.__id) {
                existingUser = element
            }
        });
        if (existingUser) {
            res.status(200).send({user: existingUser, message: 'Usuário encontrado!'})
        } else {
            res.status(404).send({message: 'Usuário não econtrado!'})
        }
    } catch (error) {
        res.status(406).send({message: error.message})
    }    
}

export const createUser = (req,res) => {
    try {
        const newUser = req.body
        newUser.__id = userArr.length
        userArr.push(newUser)
        res.status(201).send({newUser, message: 'Usuário criado!'})

    } catch (error) {
        res.status(404).send({message: error.message})
    }
}

export const deleteUser = (req, res) => {
    try {
        const {id} = req.params
        let existingUser
        userArr.forEach(element => {
            if (id == element.__id) {
                existingUser = element
            }
        });
        if (existingUser) {
            const id = userArr.indexOf(existingUser)
            userArr.splice(id, 1)
            res.status(200).send({deletedUser: existingUser ,message: 'Usuário deletado com sucesso!'})
        } else {
            res.status(404).send({message: 'Usuário não encontrado!'})
        }
    } catch (error) {
        res.status(406).send({message: error.message})
    }
} 

export const updateUser = (req, res) => {
    try {
        let existingUser
        const {id} = req.params
        const changes = req.body

        userArr.forEach(element => {
            if (id == element.__id) {
                existingUser = element
            }
        });
        if (existingUser) {
            const i = userArr.indexOf(existingUser)
            let updatedUser = {...existingUser, ...changes}
            userArr[i] = updatedUser
            res.status(200).send({updatedUser, message: 'Usuário atualizado!'})
        } else {
            res.status(406).send({message: 'Usuário não encontrado'})
        }
    } catch (error) {
        res.status(404).send({message: error.message})
    }
}
