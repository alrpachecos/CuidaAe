import React from 'react';
import {TextStyle} from 'react-native';
import {createText} from '@shopify/restyle';
import {Theme} from '../../theme/theme';
import {fontFamily} from '../../constants/typography';

const SRText = createText<Theme>();

type SRTextProps = React.ComponentProps<typeof SRText>;

export type TextVariants =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'body1'
  | 'body2'
  | 'caption'
  | 'button';

interface TextProps extends SRTextProps {
  preset?: TextVariants;
  bold?: boolean;
  italic?: boolean;
  medium?: boolean;
}

export const Text = ({
  children,
  preset = 'body1',
  bold,
  italic,
  medium,
  style,
  color = 'textPrimary',
  ...srTextProps
}: TextProps) => {
  const fontFamilyStyle = getFontFamily(preset, bold, italic, medium);
  return (
    <SRText
      color={color}
      variant={preset}
      style={[{fontFamily: fontFamilyStyle}, style]}
      {...srTextProps}>
      {children}
    </SRText>
  );
};

const getFontFamily = (
  preset: TextVariants,
  bold?: boolean,
  italic?: boolean,
  medium?: boolean,
) => {
  switch (true) {
    case preset.startsWith('heading'):
      return fontFamily.bold;
    case bold:
      return fontFamily.bold;
    case medium:
      return fontFamily.medium;
    default:
      return fontFamily.regular;
  }
};

export const $fontSizes: Record<TextVariants, TextStyle> = {
  heading1: {
    fontSize: 32,
    lineHeight: 40,
  },
  heading2: {
    fontSize: 24,
    lineHeight: 32,
  },
  heading3: {
    fontSize: 20,
    lineHeight: 28,
  },
  body1: {
    fontSize: 16,
    lineHeight: 24,
  },
  body2: {
    fontSize: 14,
    lineHeight: 20,
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
  },
  button: {
    fontSize: 16,
    lineHeight: 24,
  },
};
