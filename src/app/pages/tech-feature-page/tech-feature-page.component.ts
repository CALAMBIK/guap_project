import { Component, inject } from '@angular/core';

import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import Chart from 'chart.js/auto';
import { TechFeature } from '../../models/tech-feature';
import { TechFeatureService } from '../../services/tech-feature.service';

@Component({
  selector: 'app-tech-feature-page',
  imports: [NgFor, AsyncPipe],
  templateUrl: './tech-feature-page.component.html',
  styleUrl: './tech-feature-page.component.scss',
})
export class TechFeaturePageComponent {
  private readonly techFeatureService = inject(TechFeatureService);
  public techFeatures$ = this.techFeatureService.techFeatures$;

  ngOnInit() {
    this.renderChart();
  }

  renderChart() {
    new Chart('techChart', {
      type: 'bar',
      data: {
        labels: ['IoT', 'Освещение', 'Транспорт', 'Экология'],
        datasets: [
          {
            label: 'Популярность технологий',
            data: [60, 40, 30, 80],
            backgroundColor: ['blue', 'yellow', 'red', 'green'],
          },
        ],
      },
    });
  }
}
