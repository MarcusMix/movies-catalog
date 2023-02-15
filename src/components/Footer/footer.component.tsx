//styles
import { FooterBottom, FooterColumn, FooterContent, FooterRow, FooterStyled } from "./footer.styles"

//interface
import FooterProps from "../../types/footer.types"

//react
import { FC } from "react"

const Footer:FC<FooterProps> = () => {
    return (
        <FooterStyled>
            <FooterContent>
                <FooterRow>
                    <FooterColumn>
                       <div>
                            <p>
                                <a 
                                    href="https://www.themoviedb.org/?language=pt-BR" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    API
                                </a>
                            </p>
                            <p>
                                <a 
                                    href="https://github.com/MarcusMix/filtering-animation-react" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    Código
                                </a>
                            </p>
                       </div>
                    </FooterColumn>

                    <FooterColumn>
                        <div>
                            <p>
                                <a 
                                    href="https://developers.themoviedb.org/3" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    Documentação
                                </a>
                            </p>
                            <p>
                                <a 
                                    href="https://marcus-sandi.tech" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    Site
                                </a>
                            </p>
                       </div>
                    </FooterColumn>

                    <FooterColumn>
                        <div>
                            <p>
                                <a 
                                    href="https://github.com/MarcusMix" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    Github
                                </a>
                            </p>
                            <p>
                                <a 
                                    href="https://www.linkedin.com/in/marcus-sandi/" 
                                    target="_blank" 
                                    rel="noreferrer"
                                >
                                    LinkedIn
                                </a>
                            </p>
                       </div>
                    </FooterColumn>
                </FooterRow>
                <hr style={{width: 250, borderColor: '#313131'}}/>
                <FooterBottom>
                    <p>Desenvolvido por <a href="https://marcus-sandi.tech">Marcus Sandi</a></p>
                </FooterBottom>
            </FooterContent>
        </FooterStyled>
    )
}

export default Footer