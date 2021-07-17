import React from 'react'
import "./style.css"

export default function PostIt(){

    return(

        <div className='post-it'>

            <h1>Centro de Post-it TAUK</h1>
            <p>Post-It é uma marca registada da 3M Company que identifica um tipo de bloco de notas composto por pequenas folhas de papel adesivo, de várias dimensões, formas e cores, e que são vendidas em blocos de várias folhas pegadas entre si.</p>
            <img src='assets/postit.png' alt='Exemplo de post-it'></img>
            <h3>Como reservar meus post-its?</h3>
            <p>Para reservar seu carregamento de post-it é muito simples. Basta preencher o cadastro ao lado com todas as suas informações corretinhas e aguardar que a nossa equipe entrará em contato com você o mais breve possível para agendar a entrega e acertar os detalhes!</p>
            <p>Temos opções de 45, 90, 100 e 400 folhas!</p>
            <p>R$ 5, R$ 10, R$ 15 e R$ 30, respectivamente.</p>

        </div>

    )

}