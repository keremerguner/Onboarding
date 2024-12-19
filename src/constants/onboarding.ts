// src/constants/onboarding.ts
export interface OnboardingItem {
  id: string;
  title: string;
  description: string;
  image: any; // Geçici olarak any kullanıyoruz, normalde daha spesifik bir tip kullanılmalı
}

export const ONBOARDING_DATA: OnboardingItem[] = [
  {
    id: '1',
    title: 'Hoş Geldiniz',
    description: 'Modern ve kullanıcı dostu arayüzümüz ile tanışın',
    image: require('../assets/images/First.png'),
  },
  {
    id: '2',
    title: 'Kolay Kullanım',
    description: 'Tüm özelliklerimize kolayca erişin ve yönetin',
    image: require('../assets/images/Second.png'),
  },
  {
    id: '3',
    title: 'Başlayalım',
    description: 'Hemen kullanmaya başlayın ve deneyimlemeye başlayın',
    image: require('../assets/images/Third.png'),
  },
  {
    id: '4',
    title: 'Başlayalım',
    description: 'Hemen kullanmaya başlayın ve deneyimlemeye başlayın',
    image: require('../assets/images/Fourth.png'),
  },
];
