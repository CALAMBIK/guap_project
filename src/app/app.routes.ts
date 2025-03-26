import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./layout/layout.component').then((c) => c.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home-page/home-page.component').then(
            (c) => c.HomePageComponent
          ),
      },
      {
        path: 'feedback',
        loadComponent: () =>
          import('./pages/feedback-page/feedback-page.component').then(
            (c) => c.FeedbackPageComponent
          ),
      },
      {
        path: 'techFeatures',
        loadComponent: () =>
          import('./pages/tech-feature-page/tech-feature-page.component').then(
            (c) => c.TechFeaturePageComponent
          ),
      },
      {
        path: 'implementationProblems',
        loadComponent: () =>
          import(
            './pages/implementation-problems-page/implementation-problems-page.component'
          ).then((c) => c.ImplementationProblemsPageComponent),
      },
      {
        path: 'galery',
        loadComponent: () =>
          import('./pages/galery-page/galery-page.component').then(
            (c) => c.GaleryPageComponent
          ),
      },
    ],
  },
];
