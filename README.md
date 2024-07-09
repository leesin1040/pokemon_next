# 포켓몬 도감

이 웹사이트는 포켓몬의 리스트를 보여주고, 각 포켓몬의 상세 정보를 확인할 수 있는 기능을 제공합니다.

## 기능

- **포켓몬 리스트 보기**: 포켓몬의 리스트를 그리드 형태로 보여줍니다.
- **포켓몬 상세 정보**: 각 포켓몬을 클릭하면 해당 포켓몬의 상세 정보를 확인할 수 있습니다.
- **로딩 애니메이션**: 데이터를 불러오는 동안 로딩 애니메이션이 표시됩니다.

## 기술 스택

- **프론트엔드**: React, Next.js
- **스타일링**: Tailwind CSS
- **이미지 처리**: next/image
- **데이터**: API를 통해 포켓몬 데이터를 가져옵니다.

[![My Skills](https://skillicons.dev/icons?i=ts,react,nextjs,git,&theme=light)](https://skillicons.dev)

## 설치 및 실행
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
브라우저에서 `http://localhost:3000`을 열어 웹사이트를 확인합니다.

## 폴더 구조

```plaintext
src/
├── components/
│   ├── PokemonList.tsx
│   └── PokemonImage.tsx
├── pages/
│   ├── index.tsx
│   └── pokemon/[id].tsx
├── types/
│   └── pokemons.ts
└── utils/
    ├── getTypeColor.ts
    └── getTypeKorean.ts
```

## 주요 컴포넌트

### `PokemonList.tsx`

포켓몬 리스트를 보여주는 컴포넌트입니다. API를 통해 포켓몬 데이터를 가져와 화면에 렌더링합니다.

### `PokemonImage.tsx`

포켓몬 이미지를 보여주는 컴포넌트입니다. 포켓몬 타입에 따라 배경색이 달라집니다.

## 기여 방법

1. 이 저장소를 포크합니다.
2. 새로운 브랜치를 생성합니다.
    ```bash
    git checkout -b feature/your-feature
    ```
3. 변경 사항을 커밋합니다.
    ```bash
    git commit -m 'Add some feature'
    ```
4. 브랜치에 푸시합니다.
    ```bash
    git push origin feature/your-feature
    ```
5. 풀 리퀘스트를 생성합니다.

## 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.
```
