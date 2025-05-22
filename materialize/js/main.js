// criação de componentes, com funcao // 


import navbar from './componentes/navbar.js' // importando a funcao naquele caminho
    // mais de uma função {xx,xx,xx} e separado por virgula
import home from  './componentes/pagehome.js'
import servico from  './componentes/pageServico.js'
import contato from  './componentes/pageContato.js'
import rodape from  './componentes/rodape.js'


navbar()
home()
rodape()

window. addEventListener("hashchange", ()=>{
    switch(location.hash){
        case "#home":
            home()
        break
        case "#servico":
            servico()
        break
        case "#contato":
            contato()
        break
    }

})

