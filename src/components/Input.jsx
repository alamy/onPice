
const Input = ({ id, value, type, text, name, onChange, Objeto }) => {
    return (
        <>
            {Objeto ? 
                Objeto.map(function(e){
                    return(<>
                    <label htmlFor={e.id}>
                        {e.text}</label>
                
                    <input 
                        type={type} 
                        name={name} 
                        id={e.id} 
                        value={e.text}
                        onChange={onChange} />
                    </>)
                })
            :
                <>
                <br></br>
                    <label htmlFor={id}>{text}</label>
                    <br />
                    <input 
               
                    type={type} 
                    name={name} 
                    id={id} 
                    value={value}
                    onChange={onChange} />
                    <br />
                </>
            }

        </>
    )
}

export default Input