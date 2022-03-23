import React from 'react';
import './App.css';
import ContactsPage from './pages/ContactsPage';
import { Container } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Container minW="90vw">
        <Router>
          <Routes>
            <Route path="/" element={<ContactsPage />} />
          </Routes>
        </Router>
      </Container>
    </Provider>

  );
}

export default App;
