class Socket{

    constructor(){
        this.connection = io.connect('ws://localhost:8080',{ 'forceNew': true })
    }

    getAll(){
        return new Promise( (resolve,reject) =>{
            this.connection.on('users-list', (data) =>{
                resolve(data)
            })
        })
    }

    create(user){
        this.connection.emit('user-create',user)
    }

    delete(id){
        this.connection.emit('user-delete',id)
    }
}