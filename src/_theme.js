export default {
  palette: {
    white: '#fff',
    black: '#000',
    background: {
      light: '#fff',
      main: '#fbfbfb',
      dark: '#cbcbcb',
    },
    text: {
      light: '#464646',
      main: '#222',
      dark: '#000',
    },
    primary: { // red
      light: '#ff5e53',
      main: '#d12329',
      dark: '#980000',
      contrastText: '#fbfbfb',
    },
    secondary: { // orange
      light: '#ffb051',
      main: '#ea801f',
      dark: '#b25200',
      contrastText: '#000',
    },
    tertiary: { // green
      light: '#61e2a7',
      main: '#20af78',
      dark: '#007e4c',
      contrastText: '#fbfbfb',
    },
  },
  typography: {
    fontFamily: {
      primary: [
        'hind',
        'Roboto',
        'arial',
        'sans-serif',
      ].join(','),
      secondary: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ].join(','),
    },
    fontSize: '16px',
  },
  spacing: '4rem',
  zIndex: {
    bar: 1100,
    modal: 1300,
  },
}