import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from "@material-ui/core/Button"

export default function FormularioLogin({ aoEnviar }) {
    const [login, setLogin] = useState("")
    const [telefone, setTelefone] = useState("")

    return (

        <form onSubmit={
            (event) => {
                event.preventDefault()
                aoEnviar({login, telefone})
            }
        }>

            <TextField value={login} onChange={(event) => { setLogin(event.target.value) }} id='login' label='E-mail de usuário' variant='outlined' margin='normal' fullWidth />
            <TextField value={telefone} onChange={(event) => { setTelefone(event.target.value) }} id='telefone' label='Número celular com DDD | Ex: (21) 99999-9999' variant='outlined' margin='normal' fullWidth />

            <Button type='submit' variant='contained' color='primary'>Próximo</Button>

        </form>

    )

}