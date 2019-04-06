class App{

    constructor(){
        this.clientApi = new Api()
        this.clientSocket = new Socket()

        /*this.clientSocket.create({
            name: 'Pepe',
            lastname: 'Lopez'
        })*/

    }

    static get UI(){
        return {
            userList : document.querySelector('#users-list'),
            userForm : document.querySelector('#users-form')
        }
    }

    static get USER(){
        return {
            name : document.querySelector("#name"),
            lastname : document.querySelector("#lastname"),
            email : document.querySelector("#email"),
            birthdate : document.querySelector("#birthdate")
        }
    }

    async deleteUser(event){
        let userId = event.target.dataset.id
        if(userId !== undefined ){
            await this.clientApi.delete(userId)
            await this.render()
        }
    }

    async createUser(event){
        event.preventDefault()
        let user = new User({
            name : App.USER.name.value,
            lastname : App.USER.lastname.value,
            email : App.USER.email.value,
            birthdate : App.USER.birthdate.value
        })
        await this.clientApi.create(user)
        await this.render()
    }

    async getAllUsers(){
        return await this.clientSocket.getAll()
        .then( users => users.map( user => new User(user) ))
    }

    async render(){
        await this.getAllUsers()
        .then( users => {
            return users.map( user => {
                return `<tr>            
                    <td>${user.id} </td>
                    <td>${user.name} </td>
                    <td>${user.lastname} </td>
                    <td>${user.email} </td>
                    <td>${user.birthdate} </td>
                    <td><button class="btn btn-danger" data-id="${user.id}">Borrar</button> </td>
                </tr>
                `
            } ) 
        } )
        .then( template => {
            App.UI.userList.innerHTML = template.join('')
        } ) 
    }

    // https://github.com/widgetsinteractivos/node_avanzado
    init(){
        App.UI.userForm.addEventListener('submit',this.createUser.bind(this))
        App.UI.userList.addEventListener('click',this.deleteUser.bind(this))
        this.render()
    }
}

const mainApp = new App()
mainApp.init()