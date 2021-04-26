import './App.css';
import HomePage from './Pages/HomePage';
import ContactsApiProvider from './Hooks/ContactsApiContext';

function App() {
  return (
    <div className="App">
      <ContactsApiProvider>
        <HomePage />
      </ContactsApiProvider>
    </div>
  );
}

export default App;
