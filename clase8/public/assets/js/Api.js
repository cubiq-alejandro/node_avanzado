class Api{

    static get API_URL(){
        return 'http://localhost:8080'
    }

    async getAll(){        
        return await fetch(`${Api.API_URL}/users`)
        .then( response => response.json() )
    }

    async delete(id){
        return await fetch(`${Api.API_URL}/users/${id}`,{
            method: 'DELETE'
        })
    }

    async create(user){
        return await fetch(`${Api.API_URL}/users`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

}