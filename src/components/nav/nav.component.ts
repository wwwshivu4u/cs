import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
  <nav>
  <ul class="icon-nav">
    <li><a href="#"><span class="icon material-symbols-rounded">home</span></a></li>
    <li><a href="#"><span class="icon material-symbols-rounded">live_tv</span></a></li>
    <li><a href="#"><span class="icon material-symbols-rounded">settings</span></a></li>
    <li><a href="#"><span class="icon material-symbols-rounded">power_settings_new</span></a></li>
  </ul>
  <div class="main-nav-container">
    <ul class="main-nav">
      <li><a href="#" class="source-sans-3-nav">INVENTORY</a></li>
      <li><a href="#" class="source-sans-3-nav">LOADOUT</a></li>
      <li><a href="#" class="source-sans-3-nav">PLAY</a></li>
      <li><a href="#" class="source-sans-3-nav">STORE</a></li>
      <li><a href="#" class="source-sans-3-nav">NEWS</a></li>
    </ul>
  </div>
</nav>`,
  styleUrl: './nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  
}
