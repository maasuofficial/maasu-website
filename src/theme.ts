/**
 * -----------------------------------------------------
 * Colors
 *
 * Colors were numbered from darkest to lightest, where
 * a high number indicates a light shade of that color.
 * This is because increasing hex values generally
 * signify an increase in tone.
 * -----------------------------------------------------
 */

const colors = {
  black: '#000',
  grey1: '#111',
  grey2: '#222',
  grey3: '#404040',
  grey4: '#464646',
  grey5: '#aaa',
  grey6: '#cbcbcb',
  grey7: '#fbfbfb',
  white: '#fff',

  red1: '#980000',
  red2: '#d12329',
  red3: '#ff5e53',
}

export const theme = {
  palette: {
    ...colors,
    background: {
      light: colors.white,
      main: '#fbfbfb',
      dark: '#cbcbcb',
    },
    text: {
      light: '#464646',
      main: '#404040',
      dark: '#222',
    },
    primary: {
      // red
      light: '#ff5e53',
      main: '#d12329',
      dark: '#980000',
    },
    secondary: {
      // orange
      light: '#ffb051',
      main: '#ea801f',
      dark: '#b25200',
    },
    tertiary: {
      // green
      light: '#61e2a7',
      main: '#20af78',
      dark: '#007e4c',
    },
  },
}
