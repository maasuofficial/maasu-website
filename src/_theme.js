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
    primary: {
      light: '#FE823C',
      main: '#F35C07',
      dark: '#BE4500',
      contrastText: '#fbfbfb',
    },
    secondary: {
      light: '#28A683',
      main: '#059F74',
      dark: '#007D5A',
      contrastText: '#fbfbfb',
    },
    error: {
      light: '#F52419',
      main: '#c90a02',
      dark: '#A40800',
      contrastText: '#fbfbfb',
    },
  },
  typography: {
    fontFamily: {
      primary: [
        'nevis',
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