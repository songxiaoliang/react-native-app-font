const fonts = {
    Merriweather: {
        fontWeights: {
            300: 'Light',
            400: 'Regular',
            700: 'Bold',
            900: 'Black',
            normal: 'Regular',
            bold: 'Bold',
        },
        fontStyles: {
            normal: '',
            italic: 'Italic',
        },
    },
};

const getFontFamily = (baseFontFamily, styles = {}) => {
    const { fontWeight, fontStyle } = styles;
    const font = fonts[baseFontFamily];
    const weight = fontWeight
        ? font.fontWeights[fontWeight]
        : font.fontWeights.normal;
    const style = fontStyle
        ? font.fontStyles[fontStyle]
        : font.fontStyles.normal;

    if (style === font.fontStyles.italic && weight === font.fontWeights.normal) {
        return `${baseFontFamily}-${style}`;
    }

    return `${baseFontFamily}-${weight}${style}`;
};

export default getFontFamily;
