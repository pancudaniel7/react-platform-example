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
    shape?: {
      borderRadius?: number
    }
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
      contrastText: '#fff',
    },
    secondary: {
      main: '#9c27b0',
      light: '#ba68c8',
      dark: '#7b1fa2',
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 2,
  }
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
