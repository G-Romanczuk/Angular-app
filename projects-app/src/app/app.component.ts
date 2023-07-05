import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projects-app';

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
   
      var project = "Default";
      localStorage.setItem('Project', project)
    
      var user = "Gabi";
      localStorage.setItem('User', user)   
  }
   
}
     
  

 

