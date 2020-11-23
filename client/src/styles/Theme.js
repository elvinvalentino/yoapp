import React from 'react'

import { ThemeProvider } from '@emotion/react';

const Theme = ({ children }) => {
  const theme = {
    color: {
      primary: {
        dark: "#FC1ABD",
        light: "#F43FC2"
      },
      secondary: {
        light: "#FFDDF5",
        dark: "#FF8EDF"
      }
    },
    typography: {
      family: {
        roboto: '"Roboto", sans-serif',
        saira: '"Saira", sans-serif'
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default Theme;
