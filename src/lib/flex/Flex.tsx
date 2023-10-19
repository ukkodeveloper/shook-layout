import styled, { css } from 'styled-components';

const breakPoints = {
  xxs: '380px',
  xs: '420px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xxl: '1440px',
};

type BreakPoints = keyof typeof breakPoints;

interface FlexBox {
  $direction?: React.CSSProperties['flexDirection'];
  $wrap?: React.CSSProperties['flexWrap'];
  $gap?: number;
  $align?: React.CSSProperties['alignItems'];
  $justify?: React.CSSProperties['justifyContent'];
}

interface ResponsiveFlexBox
  extends Partial<Record<`$${BreakPoints}`, FlexBox>> {}

interface FlexProps extends FlexBox, ResponsiveFlexBox {}

const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ $direction = 'row' }) => $direction};
  flex-wrap: ${({ $wrap = 'nowrap' }) => $wrap};
  gap: ${({ $gap = 0 }) => `${$gap}px`};
  align-items: ${({ $align = 'stretch' }) => $align};
  justify-content: ${({ $justify = 'flex-start' }) => $justify};

  @media (max-width: ${breakPoints.xxl}) {
    ${({ $xxl }) => flexCss($xxl)}
  }

  @media (max-width: ${breakPoints.xl}) {
    ${({ $xl }) => flexCss($xl)}
  }

  @media (max-width: ${breakPoints.lg}) {
    ${({ $lg }) => flexCss($lg)}
  }

  @media (max-width: ${breakPoints.md}) {
    ${({ $md }) => flexCss($md)}
  }

  @media (max-width: ${breakPoints.sm}) {
    ${({ $sm }) => flexCss($sm)}
  }

  @media (max-width: ${breakPoints.xs}) {
    ${({ $xs }) => flexCss($xs)}
  }

  @media (max-width: ${breakPoints.xxs}) {
    ${({ $xxs }) => flexCss($xxs)}
  }
`;

export default Flex;

const flexCss = (flexBox?: FlexBox) => {
  if (!flexBox) return;
  const { $align, $direction, $gap, $justify, $wrap } = flexBox;

  return css`
    flex-direction: ${$direction};
    flex-wrap: ${$wrap};
    gap: ${$gap && `${$gap}px`};
    align-items: ${$align};
    justify-content: ${$justify};
  `;
};
