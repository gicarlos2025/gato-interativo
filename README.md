😺 Gato & Novelo: Simulação de Interatividade com Canvas
Este projeto é uma aplicação interativa desenvolvida para explorar as capacidades do elemento HTML5 Canvas e a lógica de Álgebra Vetorial em ambiente web. O usuário controla um novelo de lã (cursor) enquanto é perseguido por uma inteligência de movimento baseada em vetores.

🚀 Tecnologias Utilizadas
HTML5 (Canvas): Renderização de gráficos dinâmicos em tempo real.

CSS3: Estilização de camadas e gerenciamento de background.

JavaScript (Vanilla): Lógica de perseguição, manipulação de vetores e gerenciamento de estados.

🧠 Lógica e Inteligência de Movimento
O grande diferencial técnico deste projeto é a forma como o "Gato" se comporta em relação ao usuário. Em vez de movimentos lineares simples, foi aplicada uma lógica de Normalização de Vetores:

Cálculo de Distância: Utilização do Teorema de Pitágoras para identificar a hipotenusa entre o cursor e o personagem.

Direcionamento Suave: O gato calcula o trajeto mais curto e ajusta seu ângulo de deslocamento a cada frame.

Game Loop: Uso de requestAnimationFrame para garantir uma taxa de quadros fluida (60 FPS), otimizando o consumo de hardware.