import { gql } from "apollo-server-core";

export default gql`
    type SeeFollowingResult {
        status: Boolean!
        error: String
        following: [User]
    }
    type Query {
        seeFollowing(username:String!, lastId:Int): SeeFollowingResult!
    }
`;