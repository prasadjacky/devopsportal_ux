import { Component, OnInit, ViewChild } from '@angular/core';
import { Roles } from './roles';
import { AppService } from '../../../../../services/app.service';

@Component({
    moduleId: module.id,
    selector: 'roles',
    templateUrl: 'roles.component.html',
    styleUrls: ['./roles.component.css']
})

export class RolesComponent implements OnInit{

    @ViewChild('rolesForm') rolesForm;
    constructor(private appService: AppService){}

    public showValidations:boolean = false
    public role:Roles = {
        role_name:'',
        role_id:''
    };

    public roleObj:Roles;
    public editObj:Roles = {
        role_name:'',
        role_id:''
    };
    public index:number; 

    public roleArray: Roles[]=[];

    onSave(event) {

        this.showValidations = true;
        if (!this.rolesForm.valid) {
            return;
        }
        this.showValidations = false;
        (<any>$('#myRolesModal')).modal('hide');

         this.roleObj = {
            role_name:this.role.role_name,
            role_id:this.role.role_id
        }   
       
        this.role.role_name = '';
        this.role.role_id = '';

        this.roleArray.push(this.roleObj);
        
        console.log(this.roleObj)
        console.log(this.roleArray)
        event.preventDefault();
    }

    onDelete(index){ 
        this.roleArray.splice(index,1)
        console.log(this.roleArray);
    }

    onEdit(role: any,index: number){
        this.index = index;
        this.editObj = role;
        console.log(this.editObj,this.index);
    }

    onEditSave(editRoleForm: any){
       
        this.roleArray.splice(this.index,1,editRoleForm);
        console.log(this.roleArray)
        
    }

    onCancel(){
        this.role.role_name = '';
        this.role.role_id = '';
        this.showValidations = false;
    }

    ngOnInit(){
        this.roleArray = this.appService.roles;
    }
    
}