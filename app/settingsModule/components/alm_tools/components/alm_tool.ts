export class AlmTool{

    constructor(
        public tool_category:string,
        public tool_url:string,
        public tool_instance_name:string,
        public tool_name:string,
        public tool_version:string,
        public tool_auth:{
            auth_type:string
            auth_username:string,
            auth_password:string,
            auth_token:string
        },
        public proxy_required:boolean,
        public http_proxy:string
    ){}
}