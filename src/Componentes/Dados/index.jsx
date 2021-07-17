import React, { useState } from 'react'
import { TextField, Button, FormControlLabel, Switch, Container } from '@material-ui/core'

export default function FormularioDados({ aoEnviar }) {
    const [nome, setNome] = useState("")
    const [sobrenome, setSobrenome] = useState("")
    const [cpf, setCPF] = useState("")
    const [cep, setCEP] = useState("")
    const [endereco, setEndereco] = useState("")
    const [avisos, setAvisos] = useState(true)
    const [novidades, setNovidades] = useState(true)

    return (

        <Container>

            <form onSubmit={(event) => {
                event.preventDefault()
                aoEnviar({ nome, sobrenome, cpf, cep, endereco, avisos, novidades })
            }}>

                <TextField value={nome} onChange={(event) => { setNome(event.target.value) }} margin='normal' id='nome' label='Nome' variant='outlined' fullWidth />
                <TextField value={sobrenome} onChange={(event) => { setSobrenome(event.target.value) }} margin='normal' id='sobrenome' label='Sobrenome' variant='outlined' fullWidth />
                <TextField value={cpf} onChange={(event) => { setCPF(event.target.value) }} margin='normal' id='cpf' label='CPF' variant='outlined' fullWidth />
                <TextField value={cep} onChange={(event) => { setCEP(event.target.value) }} margin='normal' id='cep' type='number' label='CEP' variant='outlined' fullWidth />
                <TextField value={endereco} onChange={(event) => { setEndereco(event.target.value) }} margin='normal' id='endereco' label='Endereço' variant='outlined' fullWidth />

                <FormControlLabel label='Receber avisos' control={<Switch checked={avisos} onChange={(event) => { setAvisos(event.target.checked) }} name='avisos' color='primary' />} />
                <FormControlLabel label='Receber novidades' control={<Switch checked={novidades} onChange={(event) => { setNovidades(event.target.checked) }} name='novidades' color='primary' />} />

                <Button type='submit' variant='contained' color='primary'>Próximo</Button>

            </form>

        </Container>

    )

}