import Title from "./components/home/Title";
import ReactGA from 'react-ga4';

export default function App() {

  const mesurementId = 'G-L3W6R8DCDP';

  ReactGA.initialize(mesurementId);

  return (
    <main>
      <h1>Hello, World!</h1>
      <p>This is my React App</p>
      <p>Check it out!</p>
      <Title/>
    </main>
  )
}

