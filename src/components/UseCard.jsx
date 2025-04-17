
function UseCard(props) {

  let {name, email} = props
  console.log(name, email);

  return (
    <div>
    <h1>Hello {name}</h1>
    <input type = 'Developer' value={name} readOnly></input>
    <input type = 'developer@gmail.com' value={email} readOnly></input>
    </div>
  )
}

export default UseCard
