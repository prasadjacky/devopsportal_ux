export class Proxy{

    constructor(
        public _id:string,
        public http_proxy_name:string,
        public http_proxy_host:string,
        public http_proxy_port:number,
        public http_proxy_auth: {
            auth_required:boolean,
            auth_username:string,
            auth_password:string
        }
    ){}
}