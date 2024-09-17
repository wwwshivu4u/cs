import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, AfterViewInit, ElementRef } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `  <div class="sidebar">
  <ul class="show">
    <li class="section" (click)="toggleList($event)"><div><span class="icon material-symbols-rounded">person</span>112</div>Friends</li>
    <li class="user-active"><a href="#"><span class="icon material-symbols-rounded">account_circle</span>Someone</a></li>
    <li><a href="#"><span class="icon material-symbols-rounded">account_circle</span>Someone else</a></li>
  </ul>
  <ul>
    <li class="section" (click)="toggleList($event)"><div><span class="icon material-symbols-rounded">bigtop_updates</span>112</div>Around</li>
    <li><a href="#"><span class="icon material-symbols-rounded">account_circle</span>Someone else else</a></li>
    <li><a href="#"><span class="icon material-symbols-rounded">account_circle</span>Someone else else else</a></li>
  </ul>
  <ul>
    <li class="section" (click)="toggleList($event)"><div><span class="icon material-symbols-rounded">history</span>112</div>Recent</li>
    <li><a href="#"><span class="icon material-symbols-rounded">account_circle</span>Someone else else else else</a></li>
    <li><a href="#"><span class="icon material-symbols-rounded">account_circle</span>Someone else else else else else</a></li>
  </ul>
</div>`,
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent implements AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
    const sidelists = this.elementRef.nativeElement.querySelectorAll(".sidebar ul");
    sidelists.forEach((list: any) => {
      const listHead = list.querySelector('li.section');
      listHead.addEventListener('click', (event: any) => {
        event.preventDefault();
        if (list.classList.contains("show")) return;
        sidelists.forEach((l: any) => l.className = "");
        list.classList.add("show");
      });
    });
  }
  toggleList(event: any) {
    event.preventDefault();
    const list = event.target.closest('ul');
    if (list.classList.contains("show")) return;
    const sidelists = this.elementRef.nativeElement.querySelectorAll(".sidebar ul");
    sidelists.forEach((l: any) => l.className = "");
    list.classList.add("show");
  }
}