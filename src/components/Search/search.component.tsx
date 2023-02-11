//hooks
import { useState } from "react"

//router
import { useNavigate } from "react-router-dom"

//styles
import { FormStyled } from "./search.styles"

const Search = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState<any>('')

    const submitHandler = (e: any) => {
        e.preventDefault()
        navigate('/searched/' + input)
    }

    return (
        <FormStyled onSubmit={submitHandler}>
            <div>
                <input 
                    onChange={(e) => setInput(e.target.value)} 
                    type="text" 
                    value={input}
                    placeholder="Pesquisar filme..."
                />
            </div>
        </FormStyled>
    )
}

export default Search