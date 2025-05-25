import { theme } from './theme';
import { colors } from '../constants/colors';

export const lightTheme = {
  ...theme,
  colors: {
    ...colors,
    // Mantém as cores padrão do colors.ts, que já são otimizadas para o tema claro
  },
} as const; 