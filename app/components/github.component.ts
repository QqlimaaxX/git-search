import {Component} from '@angular/core';

@Component({
	moduleId:module.id,  //using for template url, for relative path
	selector: 'github',
	templateUrl: 'github.component.html' //   './app/app.component.html'
})
export class GithubComponent  { 
	constructor(){
		console.log("Github Component initialized ..");
	}
}
