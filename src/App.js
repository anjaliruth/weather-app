
import './App.css';
import MainWeatherWindow from './components/MainWeatherWindow';

function App() {
    return (
    <div style={{
      backgroundImage: "url('../../images/download.jpg)", // Replace with your weather background image URL
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <MainWeatherWindow />
    </div>
  );
}

export default App;
