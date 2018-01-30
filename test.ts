
import * as m from "mongoose"

const Schema = new m.Schema({
    name: String
})

const ppp = m.model('person', Schema)
function g(pp: any) {
    return new Promise((resolve, reject) => {
        pp.insertMany(123, (err: any, data: any) => {
            if (err) {
                console.log('in');

                reject(err)
            } else {
                resolve(data)
            }
        })

    })
}
const connectionString = "mongodb://localhost:27017/test"
async function f() {
    try {
        await m.connect(connectionString)
        await g(ppp)
            
    } catch (error) {
        console.log("error", error.message);
        
    }
}

try {
    f()
    
} catch (error) {
    console.log(111);
    
}


