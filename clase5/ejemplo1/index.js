class Baby{

    async eat(){
        return await new Promise((resolve) => {
            console.log("wah, wah , wah")
            setTimeout(() =>{
                resolve("eat")
            },2000)
        })
    }

    async poop(){
        return await new Promise((resolve) => {
            console.log("wah, wah , wah")
            setTimeout(() =>{
                resolve("poop")
            },2000)
        })
    }

    async sleep(){
        return await new Promise((resolve) => {
            console.log("wah, wah , wah")
            setTimeout(() =>{
                resolve("zzz")
            },2000)
        })
    }

    async be(){
        await this.eat().then( status => console.log(status) )
        await this.poop().then( status => console.log(status) )
        await this.sleep().then( status => console.log(status) )
    }

}

const matias = new Baby()
matias.be()