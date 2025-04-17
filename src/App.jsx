// import UseCard from "./UseCard";

import StatusMessage from "./components/StatusMessage";


function App (){
    return(
        <div className="app-container">
      {/* <UseCard name="Developer" email="developer@gmail.com" /> */}
      <StatusMessage status = 'loading' />
    </div>
    );
}

export default App