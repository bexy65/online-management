import "./App.css";
import LoginForm from "./components/login/loginForm";
import { LoginContextProvider } from "./components/login/loginContext";

function App() {
  return (
    <>
      <LoginContextProvider>
        <div className="flex flex-col bg-gray-300 h-4/5 justify-center rounded rounded-xl w-full md:w-2/3">
          <LoginForm />
        </div>
      </LoginContextProvider>
    </>
  );
}

export default App;
