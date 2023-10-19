# Shook Layout

Shook Layout에서는 리액트에서 사용 가능한 Flex 컴포넌트를 제공합니다. 반응형에 따라 Flex 속성을 부여할 수 있습니다. 또한 타입을 함께 제공해주고 있습니다.

## 설치

```
$yarn add shook-layout
```

혹은

```
$npm install shook-layout
```

## 사용

```tsx
import Flex from 'shook-layout';

const MyComponent = () => {
  return (
    <Flex $direction="column" $gap={10}>
      <Item />
      <Item />
      <Item />
    </Flex>
  );
};
```

다음과 같이 `Flex` 컴포넌트의 props로 flex 속성을 넣을 수 있습니다.

```tsx
import Flex from 'shook-layout';

const MyComponent = () => {
  return (
    <Flex $gap={4} $direction="row" $md={{ $direction: 'column', $gap = 10 }}>
      <Item />
      <Item />
      <Item />
    </Flex>
  );
};
```

다음과 같이 `width`에 따라 반응형으로 flex 속성을 차등 부여해줄 수 있습니다.

## Props

### flex 속성

| props                 | 타입       | 기본값                | 설명                  |
| --------------------- | ---------- | --------------------- | --------------------- | 
| $direction (optional) | "column"   | "column-reverse"      | "row"                 | "row-reverse | row                           | 아이템의 배치 방향 설정 |
| $align (optional)     | Globals    | DataType.SelfPosition | "baseline"            | "normal"     | "stretch"                     | stretch                 | 아이템을 교차 축에서 정렬 |
| $justify (optional)   | "baseline" | "normal"              | "stretch"             | flex-start   | 아이템을 주 축에서 정렬       |
| $gap (optional)       | number     | 0                     | 아이템 간의 간격 조절 |
| $wrap (optional)      | "nowrap"   | "wrap"                | "wrap-reverse”        | nowrap       | 아이템이 넘칠 때 줄 바꿈 설정 |

### 반응형 속성

각 사이즈 별로 flex 속성을 객체 형태로 값을 넣을 수 있습니다.

| size | break point(width) |
| ---- | ------------------ |
| $xxl | 1440px~            |
| $xl  | ~1280px            |
| $lg  | ~1024px            |
| $md  | ~768px             |
| $sm  | ~640px             |
| $xs  | ~420px             |
| $xss | ~380px             |
