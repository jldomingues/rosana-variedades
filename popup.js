function generateSku() {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var sku = '';
    for (var i = 0; i < 8; i++) {
      sku += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return sku;
  }
  
  function generateEan() {
    var ean = '789';
    for (var i = 0; i < 9; i++) {
      ean += Math.floor(Math.random() * 10);
    }
    return ean;
  }

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log(`Texto "${text}" copiado para a área de transferência`);
        document.getElementById("result").textContent = `Código SKU copiado aperte CTRL+V para colar`;
      })
      .catch(err => {
        console.error('Erro ao copiar o texto: ', err);
        document.getElementById("result").textContent = `Erro ao copiar o código`;
      });
  }
  
  document.getElementById("skuButton").addEventListener("click", () => {
    const sku = generateSku();
    copyToClipboard(sku);
  });
  

// Gera um número GTIN/EAN com 12 dígitos aleatório
function generateGTIN() {
  var countryCode = "789"; // País para o qual o código EAN foi emitido
  var companyCode = ""; // Número de registro da empresa
  var productCode = ""; // Número do produto
  var checkDigit = ""; // Dígito de verificação

  // Gera números aleatórios para os campos
  for (var i = 0; i < 4; i++) {
    companyCode += Math.floor(Math.random() * 10);
    productCode += Math.floor(Math.random() * 10);
  }

  // Calcula o dígito de verificação usando o algoritmo de Luhn
  var gtinWithoutCheckDigit = countryCode + companyCode + productCode;
  var gtinWithoutCheckDigitArr = gtinWithoutCheckDigit.split("").map(Number);
  var sum = 0;
  var odd = true;
  for (var i = gtinWithoutCheckDigitArr.length - 1; i >= 0; i--) {
    if (odd) {
      sum += gtinWithoutCheckDigitArr[i] * 3;
    } else {
      sum += gtinWithoutCheckDigitArr[i];
    }
    odd = !odd;
  }
  checkDigit = (10 - (sum % 10)) % 10;

  // Retorna o número completo do GTIN/EAN com 12 dígitos
  return countryCode + companyCode + productCode + checkDigit;
}

// Copia o número GTIN/EAN para a área de transferência
function copyGTIN(gtin) {
  navigator.clipboard.writeText(gtin)
    .then(function() {
      console.log("GTIN/EAN copiado para a área de transferência: " + gtin);
    }, function() {
      console.error("Erro ao copiar GTIN/EAN para a área de transferência.");
    });
}

// Evento de clique do botão "Gerar GTIN/EAN"
document.getElementById("generate-btn").addEventListener("click", function() {
  var gtin = generateGTIN();
  copyGTIN(gtin);
  document.getElementById("result").textContent = `Código GTIN/EAN Copiado aperte CTRL+V para colar`;
});

document.addEventListener("DOMContentLoaded", function() {
  const acc = document.getElementsByClassName("accordion-header");
  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
  
  const listas = document.getElementsByTagName("ul");
  for (let i = 0; i < listas.length; i++) {
    const items = listas[i].getElementsByTagName("li");
    for (let j = 0; j < items.length; j++) {
      items[j].addEventListener("click", function() {
        const nomeLista = this.parentNode.getAttribute("id");
        const nomeItem = this.textContent;
        

      });
    }
  }
});