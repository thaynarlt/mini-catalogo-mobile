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
    image: 'https://images.unsplash.com/photo-1635995432918-7835853d093d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '2',
    name: 'Processador Intel Core i9-13900K',
    price: 4299.90,
    description: 'Processador Intel Core i9-13900K de alta performance para trabalhos pesados e jogos.',
    image: 'https://images.unsplash.com/photo-1635995432918-7835853d093d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: '3',
    name: 'Memória RAM Corsair Vengeance LPX DDR5 32GB',
    price: 1499.90,
    description: 'Memória RAM Corsair Vengeance LPX DDR5 32GB de alta performance para trabalhos pesados e jogos.',
    image: 'https://images.unsplash.com/photo-1635995432918-7835853d093d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];