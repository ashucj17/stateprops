function StatusMessage(props){

    const {status} = props;
   

    return(
        <div>
            <button onClick={status}>Status {status}</button>
        </div>
    )

}

export default StatusMessage