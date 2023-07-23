const textElement = document.querySelector('#text');
        const textArray = ["Estudante", "Desenvolvedor"];
        let currentIndex = 0;

        function typeWrite(elemento, texto, i = 0) { 
            if (i < texto.length) {
                elemento.innerHTML += texto.charAt(i);
                i++;
                setTimeout(() => typeWrite(elemento, texto, i), 150); //velocidade da digitação
            }
        }

        function eraseText(elemento) { 
            let textoAtual = elemento.innerHTML;
            if (textoAtual.length > 0) {
                elemento.innerHTML = textoAtual.slice(0, -1);
                setTimeout(() => eraseText(elemento), 80); // velocidade para apagar
            } else {
                currentIndex = (currentIndex + 1) % textArray.length;
                typeWrite(elemento, textArray[currentIndex]);
            }
        }

        function startTyping() {
            typeWrite(textElement, textArray[currentIndex]);
        }

       
        startTyping();
        
        setTimeout(() => {
            eraseText(textElement);
        }, 3000); //troca de texto


