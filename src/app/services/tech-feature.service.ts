import { Injectable } from '@angular/core';
import { TechFeature } from '../models/tech-feature';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TechFeatureService {
  public techFeatures$ = new BehaviorSubject<TechFeature[]>([
    {
      title: 'Интернет вещей (IoT)',
      icon: '🌐',
      description: 'Сеть сенсоров и устройств, подключенных к интернету.',
      details:
        'Используется для контроля дорожного движения, качества воздуха и умных счетчиков.',
    },
    {
      title: 'Умное освещение',
      icon: '💡',
      description: 'Автоматизированное освещение с датчиками.',
      details:
        'Снижает потребление электроэнергии и адаптируется к условиям окружающей среды.',
    },
    {
      title: 'Автоматизированные системы транспорта',
      icon: '🚦',
      description: 'Умные светофоры и системы мониторинга трафика.',
      details: 'Помогает снизить пробки и улучшить безопасность на дорогах.',
    },
    {
      title: 'Датчики экологии и энергосбережение',
      icon: '🌱',
      description: 'Мониторинг качества воздуха, воды и уровня шума.',
      details:
        'Используется для улучшения городской среды и экономии ресурсов.',
    },
  ]);
}
