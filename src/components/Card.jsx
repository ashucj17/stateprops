const style = {
  width: 300,
  backgroundColor: "#111",
  color: "#fff",
  display: "flex",
  justifyContent: 'center'
};

function Card(props) {

    const {followers, time} = props;
  return (
    <div style={{background: '#111', padding: 20 }}>
      <div style={style}>
        <img
          src="./Automaniac_favicon.png"
          style={{ width: 80, height: 80, borderRadius: 80, margin: 20}}
        />
        <div>
          <h2> X Dev </h2>
          <span>{followers}</span>
          {time !== undefined &&<div style={{display: 'flex', alignItems: 'center'}}>
          <p>{time}</p>
          <img style={{width: 15, height: 15, paddingLeft: 10}} src="./clock.jpg" />
          </div>}
        </div>
      </div>
      <div style={{color: "#fff", padding: 20}}>Roadmap to become a web developer in 2025</div>
    </div>
  );
}

export default Card;
