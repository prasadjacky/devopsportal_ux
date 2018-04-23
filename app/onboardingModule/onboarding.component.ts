import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ProjectInformationComponent } from './components/project_information/project_information.component';
import { AppService } from '../services/app.service';
import { MainService } from '../main.service';
import { Http, RequestOptions, Headers } from '@angular/http';

@Component({
	moduleId: module.id,
	templateUrl: './onboarding.component.html',
	styleUrls: ['./onboarding.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class OnboardingComponent implements OnInit {
	showError: string;
	showSaveTemplateButton: boolean;
	@ViewChild('projectInformation') projectInformation;
	@ViewChild('userManagement') userManagement;
	@ViewChild('alm') alm;
	@ViewChild('environments') environments;
	@ViewChild('onboardingSummary') onboardingSummary;
	template_name: any;
	constructor(private http: Http, private appService: AppService, private mainService: MainService, private router: Router) {
		var _this = this;
		var ALM_done = false;
		var Completed = false;
		var SucessElement;
		$(document).ready(function () {
			// _this.appService.clearFields();
			$('#BackButton').addClass('removed');
			$('#BackButton').click(function () {
				var thisElement = $('.arrow.visible');
				SucessElement = thisElement;
				var thisTab = thisElement.parent()[0].id;
				if (thisTab === 'UserManagement') {
					$('#BackButton').addClass('removed');
				}
				if (thisTab === 'ALM') {
					if (!_this.alm.previousElement()) return;
				}
				if (thisTab === 'Environments') {
					$('#NextButton').find('.css3btn.css3btn-body')[0].innerHTML = 'Next';
					document.getElementById('saveTemplateButton').style.display = 'none';
				}
				thisElement.removeClass('visible');
				thisElement.parent().children().first().removeClass('current');
				thisElement.parent().prev().prev().children().first().removeClass('done');
				thisElement.parent().prev().removeClass('done');
				thisElement.parent().prev().prev().children().first().addClass('current');
				thisElement.parent().prev().prev().children().last().addClass('visible');
				var thisPane = $('#TabsWrapper>.tab-pane.active');
				thisPane.removeClass('active');
				thisPane.prev().addClass('active')
			});
			$('#NextButton').click(function NextButtonFunc() {
				var thisElement = $('.arrow.visible');
				SucessElement = thisElement;
				var thisTab = thisElement.parent()[0].id;
				if (Completed) {
					console.log('going back to portal');
					_this.router.navigate(['Dashboard']);
					ALM_done = false;
					Completed = false;
					_this.appService.alm.deployment.configured = true;
					_this.appService.alm.planning.configured = true;
					_this.appService.alm.code_analysis.configured = true;
					return;
				}
				if (thisTab === 'ProjectInformation') {
					_this.projectInformation.showValidations = true;
					if (!_this.projectInformation.onValidate()) return;
					console.log(_this.projectInformation.ProjectInformation);
					$('#BackButton').removeClass('removed');
				}
				if (thisTab === 'UserManagement') {
					console.log(_this.userManagement.Users);
					if (!_this.userManagement.onValidate()) return;
					$('#BackButton').removeClass('removed');
				}
				if (ALM_done) {
					thisTab = 'Environments';
					$('#BackButton').addClass('removed');
					thisElement.removeClass('visible');
					thisElement.parent().children().first().addClass('done');
					thisElement.parent().next().addClass('done');
					thisElement.parent().next().next().next().addClass('done');
					thisElement.parent().next().next().next().next().children().first().addClass('current');
					thisElement.parent().next().next().next().next().children().last().addClass('visible');
					var thisPane = $('#TabsWrapper>.tab-pane.active');
					thisPane.removeClass('active');
					thisPane.next().next().addClass('active');
					$('#saveTemplate').hide;
				}
				if (thisTab === 'ALM') {
					if (!_this.alm.nextElement()) return;
					$('#NextButton .css3btn.css3btn-body')[0].innerHTML = 'Onboard';
					document.getElementById('saveTemplateButton').style.display = 'block';
					if (!_this.appService.alm.deployment.configured) {
						ALM_done = true;
						thisTab = 'Environments';
						$('#BackButton').addClass('removed');
						thisElement.removeClass('visible');
						thisElement.parent().children().first().addClass('done');
						thisElement.parent().next().addClass('done');
						thisElement.parent().next().next().next().addClass('done');
						thisElement.parent().next().next().next().next().children().first().addClass('current');
						thisElement.parent().next().next().next().next().children().last().addClass('visible');
						var thisPane = $('#TabsWrapper>.tab-pane.active');
						thisPane.removeClass('active');
						thisPane.next().next().addClass('active');
						// NextButtonFunc();
						Completed = true;
						_this.onboardingSummary.checkFlags();
						$('#NextButton i.fa-arrow-right').removeClass('fa-arrow-right').addClass('fa-check');
						$('#NextButton .css3btn.css3btn-body')[0].innerHTML = 'OK';
						allAPI(1);
					}
					$('#BackButton').removeClass('removed');
				}
				if (thisTab === 'OnboardingSummary') {
					console.log('going back to portal');
					_this.router.navigate(['Dashboard']);
				}
				if (thisTab === 'Environments') {
					document.getElementById('saveTemplateButton').style.display = 'none';
					console.log(_this.environments.Environments);
					_this.environments.showValidations = false;
					if (!_this.environments.onValidate()) return;
					$('#NextButton i.fa-arrow-right').removeClass('fa-arrow-right').addClass('fa-check');
					$('#NextButton .css3btn.css3btn-body')[0].innerHTML = 'OK';
					$('#NextButton').prop('disabled', true);
					$('#BackButton').addClass('removed');
					Completed = true;
					_this.onboardingSummary.checkFlags();
					allAPI(1);
				}
				if (thisTab !== 'OnboardingSummary' && !ALM_done) {
					thisElement.removeClass('visible');
					thisElement.parent().children().first().addClass('done');
					thisElement.parent().next().addClass('done');
					thisElement.parent().next().next().children().first().addClass('current');
					thisElement.parent().next().next().children().last().addClass('visible');
					var thisPane = $('#TabsWrapper>.tab-pane.active');
					thisPane.removeClass('active');
					thisPane.next().addClass('active');
					$('#BackButton').removeClass('removed');
				}
			});
			function allAPI(thisStep) {
				$('#BackButton').addClass('removed');
				var thisCard = $(`#ALM-Step-${thisStep}`);
				var refTime = new Date().getTime();
				setTimeout(() => {
					_this.appService.api(thisStep).subscribe(
						res => {
							console.log(res.status)
							if (thisCard.length > 0) {
								thisCard[0].firstElementChild.className = 'fa fa-lg fa-check';
								thisCard.next()[0].firstElementChild.className = 'fa fa-lg fa-circle-o-notch fa-spin';
								_this.onboardingSummary.Times[thisStep] = new Date().getTime() - refTime;
								// _this.onboardingSummary.Messages[thisStep] = res.statusText;
								_this.onboardingSummary.incProgress();
							}
							if (thisStep === 4 && !_this.appService.alm.planning.configured) {
								thisCard.next()[0].firstElementChild.className = 'fa fa-lg fa-square-o';
								thisCard.next()[0].firstElementChild.className = 'fa fa-lg fa-circle-o-notch fa-spin';
								_this.onboardingSummary.index++;
								thisStep++;
							}
							else if (thisStep === 6 && !_this.appService.alm.code_analysis.configured) {
								thisCard.next()[0].firstElementChild.className = 'fa fa-lg fa-square-o';
								thisCard.next()[0].firstElementChild.className = 'fa fa-lg fa-circle-o-notch fa-spin';
								_this.onboardingSummary.index++;
								thisStep++;
							}
							else if (thisStep === 8 && !_this.appService.alm.deployment.configured) {
								thisCard.next()[0].firstElementChild.className = 'fa fa-lg fa-square-o';
								thisCard.next()[0].firstElementChild.className = 'fa fa-lg fa-circle-o-notch fa-spin';
								_this.onboardingSummary.success();
								if (!ALM_done) {
									SucessElement.parent().next().next().children().first().addClass('done');
								} else {
									SucessElement.parent().next().next().next().next().children().first().addClass('done');
								}
							}
							if (thisStep <= 8) {
								if (thisStep === 5) {
									_this.onboardingSummary.Messages.pp = `${JSON.parse(res['_body']).projectURL}`;
								}
								else if (thisStep === 6) {
									_this.onboardingSummary.Messages.scp = `${JSON.parse(res['_body']).projectURL}`;
									_this.onboardingSummary.Messages.scr = `${JSON.parse(res['_body']).ciRepoURL}`;
								}
								else if (thisStep === 7) {
									// var resbody = JSON.parse(res['_body'])
									// console.log(resbody)
									// if (resbody.projectURL) {
									// 	_this.onboardingSummary.Messages.cap = `${resbody.projectURL}`;
									// } else {
									var file = res['_body'];
									var hiddenElement = document.createElement('a');
									hiddenElement.href = 'data:attachment/text,' + encodeURI(file);
									hiddenElement.target = '_blank';
									hiddenElement.download = 'sonar-project.properties';
									hiddenElement.click();
									// }
								}
								else if (thisStep === 8) {
									// if (res['_body'].projectURL) {
									// 	_this.onboardingSummary.Messages.cip = `${res['_body'].projectURL}`;
									// } else {
									var file = res['_body'];
									var hiddenElement = document.createElement('a');
									hiddenElement.href = 'data:attachment/text,' + encodeURI(file);
									hiddenElement.target = '_blank';
									hiddenElement.download = 'Jenkinsfile';
									hiddenElement.click();
									// }
								}
								allAPI(thisStep + 1);
							}
							else {
								// if (thisStep === 9) {
								// 	var file = res['_body'];
								// 	var hiddenElement = document.createElement('a');
								// 	hiddenElement.href = 'data:attachment/text,' + encodeURI(file);
								// 	hiddenElement.target = '_blank';
								// 	hiddenElement.download = 'Dockerfile';
								// 	hiddenElement.click();
								// }
								_this.onboardingSummary.success();
								if (!ALM_done) {
									SucessElement.parent().next().next().children().first().addClass('done');
								} else {
									SucessElement.parent().next().next().next().next().children().first().addClass('done');
								}
							}
						},
						err => {
							console.log(err);
							thisCard[0].firstElementChild.className = 'fa fa-lg fa-times';
							_this.onboardingSummary.failure();
						}
					);
				}, Math.ceil(Math.random() * 5) * 300);
				// thisCard[0].className = 'fa fa-2x fa-check';
				// if (thisCard[0].nextElementSibling.innerHTML !== 'Onboarding Project') {
				// 	// thisCard.parent().next().children().first()[0].className = 'fa fa-2x fa-spinner fa-spin';
				// 	_this.onboardingSummary.refTime = new Date().getTime();
				// 	setTimeout(function () {
				// 	_this.appService.api(thisCard[0].nextElementSibling.childNodes[1]['innerText'])
				// 		// .catch()
				// 		.subscribe(res => {
				// 			// if (thisCard[0].nextElementSibling.innerHTML === 'Code Analysis Tools Configured') {
				// 			// 	var ca_file = res['_body'];
				// 			// 	console.log(ca_file);
				// 			// 	var hiddenElement = document.createElement('a');
				// 			// 	hiddenElement.href = 'data:attachment/text,' + encodeURI(ca_file);
				// 			// 	hiddenElement.target = '_blank';
				// 			// 	hiddenElement.download = 'sonar-project.properties';
				// 			// 	hiddenElement.click();
				// 			// }
				// 			// if (thisCard[0].nextElementSibling.innerHTML === 'Continuous Integration Setup') {
				// 			// 	var ci_file = res['_body'];
				// 			// 	console.log(ci_file);
				// 			// 	var hiddenElement = document.createElement('a');
				// 			// 	hiddenElement.href = 'data:attachment/text,' + encodeURI(ci_file);
				// 			// 	hiddenElement.target = '_blank';
				// 			// 	hiddenElement.download = 'Jenkinsfile';
				// 			// 	hiddenElement.click();
				// 			// }
				// 			if (res.status === 200) {
				// 				_this.onboardingSummary.incProgress();
				// 				thisCard[0].className = 'fa fa-lg fa-check';
				// 				thisCard.parent().next().children().first()[0].className = 'fa fa-lg fa-circle-o-notch fa-spin';
				// 				allAPI();
				// 			}
				// 		},
				// 		err => {
				// 			console.log(err);
				// 			thisCard[0].className = 'fa fa-lg fa-times';
				// 			thisCard.parent().next().children().first()[0].className = 'fa fa-lg fa-circle-o-notch fa-spin';
				// 			_this.onboardingSummary.failure();
				// 		})
				// 	}, Math.ceil(Math.random() * 5) * 500);
				// } else {
				// 	thisCard[0].className = 'fa fa-lg fa-check';
				// 	thisCard[0].nextElementSibling.innerHTML = 'Project Onboarded Sucessfully'
				// 	_this.onboardingSummary.success();
				// 	$('#NextButton').prop('disabled', false);
				// }
			}
		});
	}
	saveTemplate(inputVal: String) {		
		var tempButton = document.getElementById("saveButton");
		if (inputVal == '' || inputVal == undefined) {
			this.showError = "*Please provide proper name";
			tempButton.setAttribute("data-dismiss", "");
		}
		else {
			tempButton.setAttribute("data-dismiss", "modal");
			var resp = {
				"template_name": this.template_name,
				"project_tools": this.appService.alm
				/* "project_tools":{
					"Environment": this.appService.Environment,
					"Environments": this.appService.Environments,
					"alm":this.appService.alm,
					"projectInformation":this.appService.projectInformation,
					"users":this.appService.users
				} */
			};
			var headers = new Headers();
			headers.append('Content-Type', 'application/json');
			let options = new RequestOptions({ headers: headers });
			this.http.post('https://devops.ltimosaic.com/DemoPortalService/api/template', resp, options)
				.subscribe(result => {
					var x = document.getElementById("snackbarSuccess")
					// Add the "show" class to DIV
					x.className = "show";
					// After 3 seconds, remove the show class from DIV
					setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
				}, error => {
					if(error.status=='409'){						
						var x = document.getElementById("snackbarDuplicateError")
						// Add the "show" class to DIV
						x.className = "show";
						// After 3 seconds, remove the show class from DIV
						setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
					}else{
						var x = document.getElementById("snackbarError")
						// Add the "show" class to DIV
						x.className = "show";
						// After 3 seconds, remove the show class from DIV
						setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
					}					
				});
		}

	}
	checkInput(event: String) {
		if (event == '') {
			this.showError = "*Please provide proper username";
		}
		else {
			this.showError = "";
		}
	}
	ngOnInit() {
		this.template_name = "";
		this.appService.checkCredentials();
	}
}