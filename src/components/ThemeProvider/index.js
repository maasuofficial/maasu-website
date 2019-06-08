import { Component } from 'react';
import PropTypes from 'prop-types';

class ThemeProvider extends Component {

    setThemeVariables(theme) {

        const createVariables = (prefix, obj) => {
            for (let key in obj) {
                let thisPrefix = prefix + key;
                
                if (typeof obj[key] === 'object') {
                    createVariables(thisPrefix + '-', obj[key]);
                } else {
                    console.log(thisPrefix, obj[key]);
                    document.documentElement.style.setProperty(thisPrefix, obj[key]);
                }
            
            }
        }

        createVariables('--', theme);

    }

    render() {
        this.setThemeVariables(this.props.theme);
        return this.props.children;
    }

}

ThemeProvider.propTypes = {
    children: PropTypes.element.isRequired,
    theme: PropTypes.object,
}

ThemeProvider.defaultProps = {
    theme: {
        palette: {

            background: '#fff',
            foreground: '#777',

            primary: {
                light: '#c2d9fd',
                main: '#7baaf7',
                dark: '#4285f4',
                contrastText: '#000',
            },
            
            secondary: {
                light: '#fb5d89',
                main: '#f50057',
                dark: '#cf0051',
                contrastText: '#000',
            },

        },
    },
}

export default ThemeProvider;