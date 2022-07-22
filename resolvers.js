import { v4 as uuidv4 } from "uuid";
let fs = require('fs');

class Organization {
    constructor(id, {
        orgName,
        orgAddress,
        phone,
        departments,
        email
    }){
        this.id = id;
        this.orgName = orgName;
        this.orgAddress = orgAddress;
        this.phone = phone;
        this.departments = departments;
        this.email = email;
    }
}

// try {
//     const jsonString = fs.readFileSync("./data.json");
//     console.log(jsonString);
//     var orgholder = JSON.parse(jsonString);
// } catch (err) {
//     var orgholder = {};
//     console.log(err);
// }
var orgholder = {};

const resolvers = {
    getOrganization: ({ id }) => {
        return new Organization(id, orgholder[id])
    },
    getOrganizations: () => {
        return new [Organization]
    },
    createOrganization: ({ input }) => {
        let id = uuidv4()
        orgholder[id] = input
        let jsonString = JSON.stringify(orgholder)
        console.log("jsonString", jsonString)
        // fs.writeFile(JSON.stringify(orgholder, () => {}))
        console.log(input)
        console.log(orgholder)
        return new Organization(id, input)
    }
}

export default resolvers;