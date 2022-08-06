export interface CoachMeTheme {
  color: {
    dBlue: 'dodgerblue';
  };
  fonts: string[];
  fontSize: {
    small: string;
    medium: string;
    large: string;
  };
}

export const theme: CoachMeTheme = {
  color: {
    dBlue: 'dodgerblue',
  },
  fonts: ['sans-serif'],
  fontSize: {
    small: '1em',
    medium: '2em',
    large: '3em',
  },
};
