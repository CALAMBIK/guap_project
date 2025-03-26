import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavArray } from '../../models/nav-array';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public navArray: NavArray[] = [
    { title: 'Технические возможности', link: 'techFeatures' },
    { title: 'Проблемы реализации', link: 'implementationProblems' },
    { title: 'Галерея', link: 'galery' },
    { title: 'Обратная связь', link: 'feedback' },
  ];
}
