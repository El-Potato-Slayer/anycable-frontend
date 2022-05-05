import './App.css';
import actioncable from 'actioncable';

function App() {
  const cable = actioncable.createConsumer('ws://localhost:3000/cable');
    
  cable.subscriptions.create(
    {
      channel: 'RoomChannel',
    },
    {
      connected: () => { console.log('Room Channel connected!'); },
      disconnected: () => { console.log('Room Channel disconnected!'); },
      received: (data) => {
        console.log(data);
      },
    },
  );
  
  return (
    <div className="App">
      <h1>App room</h1>
    </div>
  );
}

export default App;
