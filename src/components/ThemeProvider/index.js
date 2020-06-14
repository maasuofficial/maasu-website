import { Component } from 'react'
import PropTypes from 'prop-types'

class ThemeProvider extends Component {
  setThemeVariables(theme) {
    const createVariables = (prefix, obj) => {
      for (const key in obj) {
        const thisPrefix = prefix + key

        if (typeof obj[key] === 'object') {
          createVariables(thisPrefix + '-', obj[key])
        } else {
          document.documentElement.style.setProperty(thisPrefix, obj[key])
        }
      }
    }

    createVariables('--', theme)
  }

  render() {
    this.setThemeVariables(this.props.theme)
    return this.props.children
  }
}

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
  theme: PropTypes.object,
}

ThemeProvider.defaultProps = {
  theme: {
    // palette

    palette: {
      background: '#aaa',
      contrastText: '#333',

      // primary

      primary: {
        light: '#c2d9fd',
        main: '#7baaf7',
        dark: '#4285f4',
        contrastText: '#000',
      },

      // secondary

      secondary: {
        light: '#fb5d89',
        main: '#f50057',
        dark: '#cf0051',
        contrastText: '#000',
      },

      // error

      error: {
        light: '#777',
        main: '#555',
        dark: '#333',
        contrastText: '#fff',
      },
    },

    // typography

    typography: {
      // font family

      fontFamily: [
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

      // font size

      fontSize: '14px',
    },

    // spacing

    spacing: '4rem',

    // breakpoints

    breakpoints: {
      xs: '0px',
      sm: '600px',
      md: '960px',
      lg: '1280px',
      xl: '1920px',
    },

    // z-index

    zIndex: {
      bar: 1100,
      modal: 1300,
    },
  },
}

export default ThemeProvider
