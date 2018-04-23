import { DetailsService } from '../../details.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';


@Component({
	moduleId: module.id,
	selector: 'code-quality',
	templateUrl: 'code_quality.component.html',
	styleUrls: ['./code_quality.component.css']
})



export class CodeQualityComponent implements OnInit {
	public key: any;
	public tech_debt: string;
	constructor(private detailsService: DetailsService, private appService: AppService) {
		if  (sessionStorage.getItem("is_reloaded"))
			this.key = this.appService.getNavChangeEmitter1()
		this.appService.getCodeQualityDatas(this.key).subscribe(codeQuality => {
			this.codeQuality = codeQuality;
			this.tech_debt = this.codeQuality.technical_debt.replace("hours", "hrs");
		});
		sessionStorage.setItem("is_reloaded",  true);
	}

	//code_quality data declaration
	public codeQuality: any;

	// codeQualityObj = {
	//     coverage: 44.7,
	//     vulnerabilities: 1,
	//     technical_debt: "7 hrs",
	//     bugs: 1,
	//     code_smells: 110,
	//     duplication: 0,
	// 	documentation: 44.7,

	// }
	ngOnInit() {
		this.appService.getCodeQualityData().subscribe(codeQuality => {
			this.codeQuality = codeQuality;
			//   this.codeQualityObj.bugs = this.codeQuality["Bugs"];
			//   this.codeQualityObj.vulnerabilities = this.codeQuality["Vulnerabilities"];
			//   this.codeQualityObj.code_smells = this.codeQuality["Code Smells"];
			//   this.codeQualityObj.duplication = this.codeQuality["Duplication"];
			//   this.codeQualityObj.technical_debt = this.codeQuality["Technical Debt"];
			//   this.codeQualityObj.documentation = this.codeQuality["Documentation"];
			//   this.codeQualityObj.coverage = this.codeQuality["Coverage"];

		});
		// this.detailsService.fetchData('/api/presentation/project_code_quality',`${this.appService.selectedProject.project_key}`).subscribe(res=> {
		// 	this.codeQuality= JSON.parse(res['_body']);
		// 	console.log(this.codeQualityObj)
		// 	this.codeQualityObj={
		// 		code_coverage:this.codeQuality.code_coverage,
		// 		vulnerabilities:this.codeQuality.vulnerabilities,
		// 		technical_debt:this.codeQuality.technical_debt,
		// 		bugs:this.codeQuality.bugs,
		// 		code_smells:this.codeQuality.code_smells,
		// 		duplication:this.codeQuality.duplication
		// 	}
		// 	},
		// 	err => {
		// 		console.log(err);
		// })

	}


}