# 10000hours-rule
[위니브 1만 시간의 법칙](http://paullab.co.kr/10000hours.html)을 클론한 웹사이트입니다.

## 1. 목표와 기능
### 1.1 목표
- HTML, CSS, JavaScript의 활용
- 미디어쿼리의 활용을 통한 반응형 웹 구현

### 1.2 기능
- 전문가가 되고 싶은 분야와 하루에 공부할 시간을 입력하면 며칠 동안 훈련해야 10000시간을 채울 수 있는지 알려줍니다.
- 훈련하러 가기 버튼 : 지금은 모달을 닫는 기능을 수행하지만, 다른 페이지로 이동하는 등의 기능을 넣을 수 있습니다.
- 공유하기 버튼 : 해당 웹사이트의 URL을 클립보드에 복사해 줍니다.

## 2. 개발 환경 및 배포 URL
### 2.1 개발 환경
- 서비스 배포 환경
    - GitHub Pages
### 2.2 배포 URL
- https://choar816.github.io/10000hours-rule/

## 3. 프로젝트 구조
```
.
├── css
│   ├── reset.css
│   ├── style_desktop.css
│   ├── style_font.css
│   └── style_mobile.css
├── img
│   ├── click.png
│   ├── clock.png
│   ├── favicon.ico
│   ├── licat.png
│   ├── loading.png
│   ├── logo.png
│   ├── quotes.png
│   └── title.png
├── index.html
└── js
    └── 10000hours.js

```

## 4. 개발하며 느낀 점
- 요소들의 위치를 모두 position: absolute를 활용하여 구현하다가 유지보수성이 너무 떨어져 margin을 활용해 레이아웃을 배치하였습니다.
레이아웃 구성 방식을 고민할 때 유지보수성을 높은 우선순위에 두어야 함을 깨달았습니다.
