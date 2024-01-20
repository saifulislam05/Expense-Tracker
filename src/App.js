
import "./App.css";
import Body from "./components/Body/Body";
import ExpenseTrackerProvider from "./Context/Context";

function App() {

  return (
    <div className="App w-11/12 mx-auto">
      <h1 className="text-3xl font-bold  text-center my-6">Expense Tracker</h1>
      <ExpenseTrackerProvider>
        <Body />
      </ExpenseTrackerProvider>
    </div>
  );
}

export default App;
