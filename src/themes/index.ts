import { ThemeOptions } from '@mui/material';

const lightTheme: ThemeOptions = {
  palette: {
    divider: '#484450',
  },
};

const darkTheme: ThemeOptions = {
  palette: {
    divider: '#484450',
    primary: {
      main: '#18E16A',
      contrastText: '#000',
    },
    secondary: {
      main: '#242427',
      contrastText: '#fff',
    },
    error: {
      main: '#F05252',
      contrastText: '#F05252',
    },
  },
};

const themes: ThemeOptions = {
  spacing: 1,
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1530,
    },
  },
  palette: {},
  components: {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.11)',
        },
      },
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },

      styleOverrides: {
        root: {
          color: 'var(--vb-gray-400)',
          textTransform: 'none',
          fontWeight: 'bold',
          '&:hover': {
            color: 'var(--vb-color)',
          },
          '&.Mui-selected': {
            color: 'var(--vb-color)',
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `'DM Sans'`,
          fontWeight: 400,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.1)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: `'Inter'`,
          textTransform: 'none',
          fontSize: 14,
          padding: '10px 24px',
        },

        sizeLarge: {
          height: 44,
          borderRadius: '22px',
        },
        sizeMedium: {
          height: 40,
          borderRadius: '20px',
        },
        sizeSmall: {
          fontSize: 12,
          height: 34,
          borderRadius: '18px',
        },
        containedPrimary: {
          '&.Mui-disabled': {
            backgroundColor: 'var(--vb-color-primary)',
            color: '#000',
            opacity: 0.38,
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          color: 'var(--vb-gray-700)',
          '&.Mui-checked+.MuiInput-root': {
            borderColor: 'var(--vb-color-primary)',
          },
          '&:hover': {
            background: 'none',
            color: 'var(--vb-color)',
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          padding: 0,
          height: 20,
          width: 40,
          '& .Mui-checked': {
            '.MuiSwitch-thumb': {
              backgroundColor: 'var(--vb-color)',
            },
          },
          '& .MuiButtonBase-root.Mui-checked+.MuiSwitch-track': {
            opacity: 1,
          },
        },
        thumb: {
          width: 16,
          height: 16,
          marginTop: 2,
          marginLeft: 2,
          backgroundColor: 'var(--vb-gray-400)',
        },
        switchBase: {
          padding: 0,
        },
        track: {
          opacity: 1,
          borderRadius: '10px',
          backgroundColor: 'var(--vb-gray-700)',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: 'var(--vb-color)',
          fontFamily: "'DM Sans'",
          border: '1px solid var(--vb-gray-700)',
          transition: 'border ease-in .1s',
          '&.Mui-focused': {
            color: 'var(--vb-color)',
            borderColor: 'var(--vb-gray-200)',
          },
          '&.Mui-error': {
            borderColor: 'var(--vb-error)',
            color: 'var(--vb-error)',
          },
          '&.MuiInputBase-multiline': {
            height: 'auto',
          },
        },
      },
    },

    MuiInput: {
      defaultProps: {
        disableUnderline: true,
      },

      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          padding: 12,
          borderRadius: 8,
          height: 48,
          backgroundColor: 'var(--vb-gray-800)',
        },
      },
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          color: 'rgba(0,0,0,0.5)',
          '& input': {
            color: 'var(--vb-color)',
            '&::first-line': {
              color: 'var(--vb-color)',
            },
          },
          '& label.Mui-focused': {
            color: '#4B5563',
          },
        },
      },
    },
    MuiAlert: {},
  },
};

export default {
  themes,
  dark: darkTheme,
  light: lightTheme,
};
