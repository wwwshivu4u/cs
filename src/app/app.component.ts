import { NgtCanvas } from 'angular-three';
import { Experience } from '../components/experience/experience.component';
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
    imports: [RouterOutlet, NavComponent, SidebarComponent, NgtCanvas],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    sceneGraph = Experience;
}
