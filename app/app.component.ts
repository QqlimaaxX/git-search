import {Component} from '@angular/core';

import {GithubComponent} from './components/github.component';

@Component({
	moduleId:module.id,   //using for template url, for relative path   
	selector: 'app',
	templateUrl:'app.component.html'   //   './app/app.component.html'
})
export class AppComponent  { 

}
