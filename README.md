# Mini Catalogo Mobile

Aplicativo mobile de mini catalogo de produtos desenvolvido com React Native, Expo e TypeScript.

## Sobre o Projeto

O app permite visualizar uma lista de produtos de hardware, acessar os detalhes de cada produto e ver informacoes de perfil do usuario.

## Tecnologias

- React Native
- Expo (Expo Router)
- TypeScript

## Estrutura de Navegacao

- **Stack Navigation** — navegacao principal entre telas (lista -> detalhes)
- **Tab Navigation** — alternancia entre as abas Produtos e Perfil

As rotas sao organizadas em arquivos separados utilizando o sistema de file-based routing do Expo Router.

## Telas

- **Lista de Produtos** — exibe 3 produtos com imagem, nome e preco. Ao tocar em um produto, navega para a tela de detalhes.
- **Detalhes do Produto** — exibe imagem, nome, preco e descricao do produto selecionado.
- **Perfil** — exibe informacoes do usuario (foto, nome, email e biografia) em uma aba separada.

## Estrutura de Pastas

```
app/
  _layout.tsx            # Stack Navigator (raiz)
  (tabs)/
    _layout.tsx          # Tab Navigator
    index.tsx            # Tela de Lista de Produtos
    profile.tsx          # Tela de Perfil
  product/
    [id].tsx             # Tela de Detalhes do Produto
data/
  products.ts            # Dados e tipagem dos produtos
```

## Como Executar

1. Instale as dependencias:

   ```bash
   npm install
   ```

2. Inicie o app:

   ```bash
   npx expo start
   ```

3. Escaneie o QR code com o Expo Go no celular ou use um emulador.
