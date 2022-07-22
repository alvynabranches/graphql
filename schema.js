import { buildSchema } from "graphql";

const schema = buildSchema(`
    type Organization {
        id: ID
        orgName: String
        orgAddress: String
        phone: Int
        departments: [Department]
        email: String
    }

    type Department {
        id: ID
        deptName: String
        deptBlock: Block
        phone: Int
        email: String
    }

    enum Block {
        A
        B
        C
        D
        E
        F
        G
    }

    type Query {
        getOrganization(id: ID): Organization
        getOrganizations(): [Organization]
        getDept(id: ID): Department
    }

    input OrganizationInput {
        id: ID
        orgName: String!
        orgAddress: String
        phone: Int!
        departments: [DepartmentInput]
        email: String
    }

    input DepartmentInput {
        id: ID
        deptName: String!
        deptBlock: Block!
        phone: Int!
        email: String!
    }

    type Mutation {
        createOrganization(input: OrganizationInput): Organization
    }
`)
export default schema;