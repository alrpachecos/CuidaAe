import { theme } from './theme';
import { colors } from '../constants/colors';

export const darkTheme = {
  ...theme,
  colors: {
    ...colors,
    background: {
      default: '#111827', // Cinza muito escuro
      paper: '#1F2937', // Cinza escuro
      highlight: '#1E3A8A', // Azul escuro para destaque
    },
    text: {
      primary: '#F9FAFB', // Quase branco
      secondary: '#D1D5DB', // Cinza claro
      disabled: '#6B7280', // Cinza médio
    },
    border: {
      light: '#374151', // Cinza escuro
      main: '#4B5563', // Cinza médio
      dark: '#6B7280', // Cinza claro
    },
    // Mantém as cores principais (primary e secondary) e status inalteradas
  },
} as const; 