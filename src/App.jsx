// import UseCard from "./UseCard";

// import StatusMessage from "./components/StatusMessage";

import Card from "./components/Card";


function App (){
    return(
        <div className="app-container" style={{display: 'flex',}}>
      {/* <UseCard name="Developer" email="developer@gmail.com" /> */}
      {/* <StatusMessage status = 'loading' /> */}
      <div>
      <div>
      <Card />
      <br />
      </div>
      <div>
      <Card />
      <br />
      </div>
      <div>
      <Card />
      </div>
      <br />
      </div>
    </div>
    );
}

export default App