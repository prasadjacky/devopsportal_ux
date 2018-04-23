export class Environment{
    constructor(
        environment_name: '',
        environment_type: '',
        environment_sequence: '',
        environment_approver: '',
        app_server: {
            server_type: '',
            vm_server: {
                server_ip: '',
                auth_type: '',
                auth_username: '',
                auth_password: '',
                app_server_path: ''
            },
            container_server: {
                host_ip: '',
                host_auth_type: '',
                host_auth_username: '',
                host_auth_password: '',
                image_name: '',
                container_name: '',
                ports: ''
            }
        },
        database: {
            server_ip: '',
            auth_type: 'password',
            auth_username: '',
            auth_password: '',
            auth_key: '',
            db_name: '',
            db_url: '',
            db_username: '',
            db_password: ''
        }
    ){}
}