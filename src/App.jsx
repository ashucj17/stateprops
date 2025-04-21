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
      <Card followers = '13,245 followers' time = '14m' />
      <br />
      </div>
      <div>
      <Card followers = 'Promoted'/>
      <br />
      </div>
      <div>
      <Card followers = '31,999 followers' time = '59m' />
      </div>
      <br />
      </div>
    </div>
    );
}

export default App