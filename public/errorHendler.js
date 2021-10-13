class ErrorHendler extends Error {
    constructor(message){
        super(message)
        this.name = "ErrorHendler"
    }

    showError(action){
       try {
           action
       } catch (error) {
           alert(console.log(error.message))
       }

    }

}

export default ErrorHendler;