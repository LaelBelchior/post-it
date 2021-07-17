import React, { useState } from 'react'
import { Button, Container} from '@material-ui/core'
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core'

export default function FormularioCategoria({ aoEnviar }) {
    const [quantidade, setQuantidade] = useState("")
    const [cor, setCor] = useState("")
    const [tamanho, setTamanho] = useState("")


    return (

        <form onSubmit={(event) => {
            event.preventDefault()
            aoEnviar({ quantidade, cor, tamanho })
        }}>

            <Container>

                <FormControl fullWidth margin='normal'>

                    <InputLabel>Quantidade</InputLabel>
                    <Select value={quantidade} onChange={(event) => { setQuantidade(event.target.value) }} id='quantidade'>

                        <MenuItem value='10'>10</MenuItem>
                        <MenuItem value='20'>20</MenuItem>
                        <MenuItem value='30'>30</MenuItem>
                        <MenuItem value='40'>40</MenuItem>
                        <MenuItem value='50'>50</MenuItem>

                    </Select>

                </FormControl>

                <FormControl fullWidth margin='normal'>

                    <InputLabel>Cor</InputLabel>
                    <Select value={cor} onChange={(event) => { setCor(event.target.value) }} id='cor'>

                        <MenuItem value='Branco'>Branco</MenuItem>
                        <MenuItem value='Cinza'>Cinza</MenuItem>
                        <MenuItem value='Amarelo'>Amarelo</MenuItem>
                        <MenuItem value='Laranja'>Laranja</MenuItem>
                        <MenuItem value='Verde'>Verde</MenuItem>
                        <MenuItem value='Azul'>Azul</MenuItem>
                        <MenuItem value='Roxo'>Roxo</MenuItem>
                        <MenuItem value='Marrom'>Marrom</MenuItem>
                        <MenuItem value='Preto'>Preto</MenuItem>

                    </Select>

                </FormControl>

                <FormControl fullWidth margin='normal'>

                    <InputLabel>Tamanho</InputLabel>
                    <Select value={tamanho} onChange={(event) => { setTamanho(event.target.value) }} id='tamanho'>

                        <MenuItem value='400 folhas'>400 folhas</MenuItem>
                        <MenuItem value='100 folhas'>100 folhas</MenuItem>
                        <MenuItem value='90 folhas'>90 folhas</MenuItem>
                        <MenuItem value='45 folhas'>45 folhas</MenuItem>

                    </Select>

                </FormControl>

                <Button type='submit' variant='contained' color='primary'>Finalizar</Button>

            </Container>

        </form>

    )

}