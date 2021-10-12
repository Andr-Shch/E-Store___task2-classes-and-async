class ErrorHendler extends Error {
    constructor(message){
        super(message)
        this.name = "ErrorHendler"
    }
    
    

}

export default ErrorHendler;