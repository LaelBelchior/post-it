import React, { useEffect, useState } from 'react'
import './style.css'

import FormularioLogin from "../Login/"
import FormularioDados from "../Dados/"
import FormularioProdutos from '../Produtos/'
import Agradecimento from '../Agradecimento/'

export default function FormularioCadastro({ aoEnviar }) {

    const [etapaAtual, setEtapaAtual] = useState(0)
    const [dadosColetados, setDados] = useState({})

    useEffect(()=>{console.log(dadosColetados)})

    const formularios = [

        <FormularioLogin aoEnviar={coletarDados}/>,
        <FormularioDados aoEnviar={coletarDados}/>,
        <FormularioProdutos aoEnviar={coletarDados}/>,
        <Agradecimento />

    ]

    function coletarDados(dados) {

        setDados({...dadosColetados, ...dados})
        proximo()

    }

    function proximo() {

        setEtapaAtual(etapaAtual + 1)

    }

    return (

        <div className='formulario'>
            {formularios[etapaAtual]}
        </div>

    )

}