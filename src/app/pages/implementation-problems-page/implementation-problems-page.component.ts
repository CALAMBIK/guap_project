import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ProblemsService } from '../../services/problems.service';
import { TechFeature } from '../../models/tech-feature';
import { NgFor } from '@angular/common';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-implementation-problems-page',
  imports: [NgFor],
  templateUrl: './implementation-problems-page.component.html',
  styleUrl: './implementation-problems-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImplementationProblemsPageComponent {
  private readonly problemsService = inject(ProblemsService);
  public problems: TechFeature[] = this.problemsService.smartCityProblems();

  ngOnInit() {
    this.renderChart();
  }

  renderChart() {
    new Chart('problemChart', {
      type: 'bar',
      data: {
        labels: [
          'Безопасность',
          'Затраты',
          'Инфраструктура',
          'Конфиденциальность',
          'Совместимость',
        ],
        datasets: [
          {
            label: 'Популярность проблем',
            data: [40, 80, 60, 40, 50],
            backgroundColor: ['blue', 'yellow', 'red', 'green', 'orange'],
          },
        ],
      },
    });
  }
}
