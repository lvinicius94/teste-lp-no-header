import { useState, useEffect } from 'react'
import './App.css'
import PromoCode from './PromoCode'

function App() {
    
    const [showButton, setShowButton] = useState(false);

    // Function to handle scroll event
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        // Set showButton to true if scroll position is greater than or equal to a certain value
        setShowButton(scrollPosition >= 500); // Change 500 to your desired scroll position
    };

    useEffect(() => {
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll);
        // Remove scroll event listener when component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures the effect only runs once

    const copiarCodigoUp = () => {
        // Copia o código para a área de transferência
        navigator.clipboard.writeText("UPC24").then(() => {
          console.log("Código copiado com sucesso!");
          // Redireciona para o link externo após a cópia
          window.location.href = 'https://upbet.com/ptb/authentication/signup?affid=0209103';
        }).catch(err => {
          console.error('Falha ao copiar o código:', err);
        });
      };


  return (
      <div className='div-principal-lp'>
        {/*<div className='menu-principal'><img src="/logo-principal-upbet.png" alt="" /><button onClick={copiarCodigoUp} className='botao-cadastrar-menu'>CADASTRE-SE</button></div>*/}
        <div className='banner-imagem-texto'>
              <div className='conteudo-banner'>
                  <div className='conteudo-topo'>
                  
                  <h1><b>GANHE R$ 20,00</b> depositando APENAS R$ 5,00!!!</h1>
                 
                  </div>
                  <div className='config-botao-banner'>
                    
                      <button onClick={copiarCodigoUp} className='botao-cadastrar-banner'>RESGATAR BÔNUS</button>
                      
                     <p>Use o código "UPC24" no depósito!</p>
                     
                  </div>
              </div>
              <div className='imagem-banner-direita'>
                  <img src="ganhe-20-com-jogos-na-up-bet.png" alt="Ganhe 20 reais com jogos selecionados na UPBET" />
              </div>
        </div>


        <div className='div-segunda-dobra'>
                <div className='texto-final'>
                    <h2>Como Receber</h2>
                    <h3>1 - Faça seu cadastro no nosso site</h3>
                    <p>Clique no botão para poder resgatar seu bônus em sua conta na UPBET</p>

                    <h3>2 - Faça um depósito a partir de R$ 5</h3>
                    <p>Não esqueça de colocar o promocode “UPC24”</p>    

                    <h3>3 - Confirme seu depósito</h3>
                    <p>Aceitamos PIX e cai instantaneamente na sua conta!</p>  

                    <h3>4 - Pronto! Está tudo feito</h3>
                    <p>O bônus cai junto com o valor depositado, e você ja pode usar!</p>

                    <h3>5 - Válido para os jogos mais famosos!</h3>
                    <p>Fortune Rabbit, Fortune OX, Fortune Mouse, Fortune Dragon, Dragon Hatch, Gates of Olympus, Sugar Rush</p>   
                </div>

                {/* Render the button only if showButton is true */}
            {showButton && (
              <button onClick={copiarCodigoUp} className='botao-fixo-segunda-dobra'>RESGATAR BÔNUS</button>  
            )}
            
        </div>

            
        </div>

  )
}

export default App
