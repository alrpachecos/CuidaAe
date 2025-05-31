import {createTheme} from '@shopify/restyle';
import {fontFamily, fontSize, lineHeight, fontWeight} from '../constants/typography';

export const palette = {
  // Cores principais
  blue: '#3A79C1', // Azul Calmo
  blueLight: '#60A5FA',
  blueDark: '#1E40AF',
  green: '#10B981', // Verde Saúde
  greenLight: '#34D399',
  greenDark: '#059669',
  // Cores neutras
  grayDark: '#1F2937', // Texto primário
  gray: '#4B5563', // Texto secundário
  grayLight: '#9CA3AF', // Texto desabilitado
  // Cores de fundo
  background: '#F9FAFB', // Cinza-claro
  backgroundLight: '#FFFFFF',
  backgroundHighlight: '#DBEAFE', // Azul-claro suave
  // Cores de estado
  error: '#EF4444',
  errorLight: '#FEE2E2',
  success: '#10B981',
  successLight: '#D1FAE5',
  warning: '#F59E0B',
  warningLight: '#FEF3C7',
  info: '#3B82F6',
  infoLight: '#DBEAFE',
  // Utilitários
  white: '#FFFFFF',
  black: '#000000',
};

export const theme = createTheme({
  colors: {
    ...palette,
    // Cores principais
    primary: palette.blue,
    primaryLight: palette.blueLight,
    primaryDark: palette.blueDark,
    primaryContrast: palette.white,

    secondary: palette.green,
    secondaryLight: palette.greenLight,
    secondaryDark: palette.greenDark,
    secondaryContrast: palette.white,

    // Cores de texto
    textPrimary: palette.grayDark,
    textSecondary: palette.gray,
    textDisabled: palette.grayLight,

    // Cores de fundo
    background: palette.white,
    backgroundContrast: palette.black,
    backgroundPaper: palette.backgroundLight,
    backgroundHighlight: palette.backgroundHighlight,

    // Estados
    error: palette.error,
    errorLight: palette.errorLight,
    success: palette.success,
    successLight: palette.successLight,
    warning: palette.warning,
    warningLight: palette.warningLight,
    info: palette.info,
    infoLight: palette.infoLight,
  },
  spacing: {
    spacing0: 0,
    spacing4: 4,
    spacing8: 8,
    spacing12: 12,
    spacing16: 16,
    spacing20: 20,
    spacing24: 24,
    spacing32: 32,
    spacing40: 40,
    spacing48: 48,
    spacing56: 56,
  },
  borderRadii: {
    none: 0,
    radius4: 4,
    radius8: 8,
    radius12: 12,
    radius16: 16,
    radiusFull: 9999,
  },
  textVariants: {
    defaults: {
      fontFamily: fontFamily.regular,
      fontSize: fontSize.md,
      lineHeight: lineHeight.md,
      color: 'textPrimary',
    },
    heading1: {
      fontFamily: fontFamily.bold,
      fontSize: fontSize['4xl'],
      lineHeight: lineHeight['4xl'],
      fontWeight: fontWeight.bold,
      color: 'textPrimary',
    },
    heading2: {
      fontFamily: fontFamily.bold,
      fontSize: fontSize['3xl'],
      lineHeight: lineHeight['3xl'],
      fontWeight: fontWeight.bold,
      color: 'textPrimary',
    },
    heading3: {
      fontFamily: fontFamily.bold,
      fontSize: fontSize['2xl'],
      lineHeight: lineHeight['2xl'],
      fontWeight: fontWeight.bold,
      color: 'textPrimary',
    },
    body1: {
      fontFamily: fontFamily.regular,
      fontSize: fontSize.md,
      lineHeight: lineHeight.md,
      fontWeight: fontWeight.regular,
      color: 'textPrimary',
    },
    body2: {
      fontFamily: fontFamily.regular,
      fontSize: fontSize.sm,
      lineHeight: lineHeight.sm,
      fontWeight: fontWeight.regular,
      color: 'textPrimary',
    },
    caption: {
      fontFamily: fontFamily.regular,
      fontSize: fontSize.xs,
      lineHeight: lineHeight.xs,
      fontWeight: fontWeight.regular,
      color: 'textSecondary',
    },
    button: {
      fontFamily: fontFamily.medium,
      fontSize: fontSize.lg,
      lineHeight: lineHeight.lg,
      fontWeight: fontWeight.medium,
      color: 'white',
    },
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];

