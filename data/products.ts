export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
  };

export const products: Product[] = [
  {
    id: '1',
    name: 'Placa de vídeo NVIDIA GeForce RTX 4090',
    price: 3499.90,
    description: 'Placa de vídeo NVIDIA GeForce RTX 4090 de alta performance para jogos e trabalhos pesados.',
    image: 'https://images9.kabum.com.br/produtos/fotos/387449/placa-de-video-asus-nvidia-rog-strix-rtx-4090-edition-24-gb-gddr6x-argb-dlss-ray-tracing-90yv0iw0-m0nan00_1665170163_gg.jpg'
  },
  {
    id: '2',
    name: 'Processador Intel Core i9-13900K',
    price: 4299.90,
    description: 'Processador Intel Core i9-13900K de alta performance para trabalhos pesados e jogos.',
    image: 'https://images.kabum.com.br/produtos/fotos/386972/processador-intel-core-i9-13900kf-13-geracao-5-8ghz-max-turbo-cache-36mb-24-nucleos-32-threads-lga-1700-bx8071513900kf_1664543094_gg.jpg'
  },
  {
    id: '3',
    name: 'Memória RAM Corsair Vengeance LPX DDR5 32GB',
    price: 1499.90,
    description: 'Memória RAM Corsair Vengeance LPX DDR5 32GB de alta performance para trabalhos pesados e jogos.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGPWmYlN7Q4-eccdVjuBa8Pb4Eg-oUMS1j2g&s'
  },
];