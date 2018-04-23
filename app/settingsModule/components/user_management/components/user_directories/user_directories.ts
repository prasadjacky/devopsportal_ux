export class UserDirectory{

    constructor(
        public userDirectory_name:string,
        public userDirectory_type:string,
        public userDirectory_url:string,
        public userDirectory_search_base:string,
        public userDirectory_auth:{
            auth_bindDN: String,
            auth_bindPassword: String
        }
    ){}
}