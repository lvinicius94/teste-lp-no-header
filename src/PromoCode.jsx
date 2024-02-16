import React, { useState } from 'react';
import './PromoCode.css'

function PromoCode() {
  const [copied, setCopied] = useState(false);
  const promoCode = 'UPC24';

  const handleCopyClick = () => {
    navigator.clipboard.writeText(promoCode)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reseta o estado de 'copiado' após 2 segundos
        window.location.href = 'https://upbet.com/ptb/authentication/signup?affid=0209103';
      })

  };

  return (
    <div>
      <button className='botao-codigo-promocional' onClick={handleCopyClick}>
        {copied ? 'CÓDIGO COPIADO!' : 'COPIAR PROMOCODE'}
      </button>
    </div>
  );
}

export default PromoCode;
