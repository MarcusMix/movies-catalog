//hooks
import { useState } from "react"

//router
import { useNavigate } from "react-router-dom"

//styles
import { FormStyled } from "./search.styles"

//icons
import { GoSearch } from 'react-icons/go'

const Search = () => {

    const navigate = useNavigate()

    const [input, setInput] = useState<any>('')

    const submitHandler = (e: any) => {
        e.preventDefault()
        navigate('/searched/' + input)
    }

    const handleSearchChange = (e :any) => {
        setInput(e.target.value)
    }

    return (
        <FormStyled onSubmit={submitHandler}>
            <div>
                <div>
                    <GoSearch color='#fff'/>
                </div>
                <input 
                    onChange={handleSearchChange} 
                    type="text" 
                    value={input}
                    placeholder="Pesquisar filme..."
                />
            </div>
        </FormStyled>
    )
}

export default Search