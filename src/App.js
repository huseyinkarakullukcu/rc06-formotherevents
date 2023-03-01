import './App.css';
import Form from './components/1-forms/Form';
import FormWithObject from './components/1-forms/FormWithObject';
import KeyboardClipboard from './components/2-kayboard-clipboard-events/KeyboardClipboard';
import MouseEvent from './components/3-mouseEvent/MouseEvent';

function App() {
  return (
    <div className="container mt-4 text-center">
      {/* <Form /> */}
      {/* <FormWithObject /> */}
      {/* <KeyboardClipboard /> */}
      <MouseEvent />
    </div>
  );
}

export default App;
