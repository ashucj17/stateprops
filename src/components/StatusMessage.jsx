function StatusMessage(props){

    const {status} = props;
    console.log(status);

    return(
        <div>
            <p>Status {status}</p>
        </div>
    )

}

export default StatusMessage