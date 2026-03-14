window.onload = () => {
    const canvas = document.getElementById('canvasGato');
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resize);
    resize();

    // --- CARREGAMENTO DAS IMAGENS ---
    const imagemGato = new Image();
    imagemGato.src = 'img/face_gato.png';
    
    const imagemBola = new Image();
    imagemBola.src = 'img/bola.png'; 
    
    // Configurações do Gato (Aumentado em +40%)
    let gato = {
        x: 100,
        y: 100,
        velocidade: 6,
        tamanho: 145 // Proporção final ajustada
    };

    // Configurações da Bola (Aumentada em +40%)
    let bola = { 
        x: 0, 
        y: 0, 
        tamanho: 70 // Agora mais visível como um novelo real
    };

    // O novelo segue o mouse
    window.addEventListener('mousemove', (e) => {
        bola.x = e.clientX;
        bola.y = e.clientY;
    });

    function animar() {
        // Limpa mantendo a transparência sobre fundo_jardim.png
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Lógica de perseguição
        let dx = bola.x - gato.x;
        let dy = bola.y - gato.y;
        let distancia = Math.sqrt(dx * dx + dy * dy);

        if (distancia > 5) {
            gato.x += (dx / distancia) * gato.velocidade;
            gato.y += (dy / distancia) * gato.velocidade;
        }

        // --- DESENHAR O NOVELO (BOLA) ---
        if (imagemBola.complete) {
            ctx.drawImage(
                imagemBola, 
                bola.x - bola.tamanho / 2, 
                bola.y - bola.tamanho / 2, 
                bola.tamanho, 
                bola.tamanho
            );
        }

        // --- DESENHAR O GATO ---
        if (imagemGato.complete) {
            ctx.drawImage(
                imagemGato, 
                gato.x - gato.tamanho / 2, 
                gato.y - gato.tamanho / 2, 
                gato.tamanho, 
                gato.tamanho
            );
        }

        requestAnimationFrame(animar);
    }

    animar();
};