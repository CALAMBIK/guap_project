import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-galery-page',
  imports: [],
  templateUrl: './galery-page.component.html',
  styleUrl: './galery-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaleryPageComponent {
  public imgs = [
    'assets/img1.png',
    'assets/img2.png',
    'assets/img3.png',
    'assets/img4.png',
    'assets/img5.png',
    'assets/img6.png',
    'assets/img7.png',
  ];

  public currentIndex = 0;

  public nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.imgs.length;
  }

  public prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.imgs.length) % this.imgs.length;
  }
}
