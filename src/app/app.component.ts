import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "../components/nav/nav.component";
import { SidebarComponent } from "../components/sidebar/sidebar.component";
import { initializeApp } from 'firebase/app';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};

const app = initializeApp(firebaseConfig);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  

  // ngOnInit() {
  //   const sidelists = document.querySelectorAll(".sidebar ul");
  //   const sidelistsHead = document.querySelectorAll(".sidebar ul li.section");
  //   sidelistsHead.forEach(listHead => {
  //     listHead.addEventListener('click', (event) => {
  //       event.preventDefault();
  //       if(listHead.closest('ul')?.classList.contains("show")) return;
  //       sidelists.forEach(list => {
  //         list.className = "";
  //       });
  //       listHead.closest('ul')?.classList.add("show");
  //     });
  //   });
  // }


}
