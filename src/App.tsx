import { ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound/NotFound';
import Ticket from './pages/ticket/Ticket';

declare module '@mui/material/styles' {
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }

  interface PaletteOptions {
    palette?: {
      primary?: {
        main?: string;
        light?: string;
        dark?: string;
      };
      secondary?: {
        main?: string;
        light?: string;
        dark?: string;
      };
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#34baeb',
      light: '#82c8e0',
      dark: '#0f7fa8',
    },
    secondary: {
      main: '#24e3ca',
      light: '#9bebe0',
      dark: '#188576',
    },
  },
});

function App() {
  return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Ticket />} />
            <Route path='/ticket' element={<Ticket />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
