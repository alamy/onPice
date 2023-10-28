

const Usuario = ({ nome, email, telefone }) => {

    console.log(nome)
    // const user = useContext();;
    return (
        <>
            <h1>{nome}</h1>
            <p>{email}</p>
            <p>{telefone}</p>
        </>

    )
}

export default Usuario