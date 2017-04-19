import {Component} from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'jumbotron',
	templateUrl: 'jumbotron.component.html',
})

export class JumbotronComponent {
	
	private jbtHeading: string;
	private jbtText: string;
	private jbtBtnText: string;
	private jbtBtnUrl: string;

	constructor(){
		this.jbtHeading  = 'Ocean of Quotes';
		this.jbtText 	= 'Welcome to our Quotes portal. You can select any category of your choice and enhance your knowledge. You can select according to Authors, Categories, Mood and etc'
		this.jbtBtnText = 'About';
		this.jbtBtnUrl = "/about";
	}
 }