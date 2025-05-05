const products = [
    {
      name: 'Semáforo em Arduino',
      image: '/images/semaforo.png',
      description:
        'Projeto para disciplina de Introdução à Engenharia Elétrica.',
      brand: 'Fabricação própria',
      category: 'Eletrônicos',
      price: 100.00,
      countInStock: 0,
      rating: 5,
      numReviews: 1,
    },
    {
      name: 'Kit 500 Resistores Variados de 20Ω a 1MΩ',
      image: '/images/kitresistor.png',
      description:
        'Kit de resistores variados, útil em diversas disciplinas de laboratório ao longo do curso.',
      brand: '-',
      category: 'Eletrônicos',
      price: 30.00,
      countInStock: 10,
      rating: 4.9,
      numReviews: 45,
    }, 
    {
      name: 'Kit Rasberry PI 4 Advanced',
      image: '/images/raspberry.png',
      description: "O Kit Raspberry Pi Advanced é ideal para iniciantes e inclui a placa Raspberry Pi 4 Model B (4GB), cabo HDMI, case, dissipador, cartão de memória e fonte. Ele permite criar projetos de automação residencial, emuladores de videogames, IoT e mais. A Raspberry Pi 4 Model B apresenta um processador quad-core 64-bit de 1.5 GHz, portas USB 3.0, suporte a PoE, WiFi de 2.4GHz e 5GHz, Bluetooth 5.0 e a capacidade de usar dois monitores simultaneamente.",
      brand: 'Raspberry PI Foundation',
      category: 'Eletrônicos',
      price: 600.00,
      countInStock: 1,
      rating: 4.9,
      numReviews: 10,
    },
    {
      name: 'Motor DC',
      image: '/images/motordc.png',
      description:
        'Projeto desenvolvido para a disciplina de Laboratório de Conversão da Energia em que é pedido um motor que funcione em corrente contínua.',
      brand: 'Fabricação própria',
      category: 'Projetos',
      price: 100.00,
      countInStock: 1,
      rating: 4.8,
      numReviews: 5,
    },
    {
      name: 'Placa Fenolite Perfurada 12x18cm',
      image: '/images/placapcb.png',
      description:
        'Placa de circuito impresso ilhada (Wire-Wrap) em fenolite, ideal para fixar definitivamente componentes eletrônicos  sem a necessidade de confeccionar uma placa desde o início. Não é necessário o uso de percloreto para corrosão e já vem furada para encaixar os terminais. Basta colocar os componentes e soldar. Útil para Laboratório de Sistemas de Medição.',
      brand: '-',
      category: 'Eletrônicos',
      price: 5.00,
      countInStock: 5,
      rating: 3,
      numReviews: 7,
    },
    {
      name: 'Kit Arduino Master',
      image: '/images/arduino.png',
      description:
        'Com este kit, você aprenderá a criar diversos projetos eletrônicos práticos, como leitura de sinais analógicos com potenciômetro, controle de LEDs e servo motor, medição de temperatura e umidade, e desenvolvimento de um cronômetro digital. Também inclui projetos como trena eletrônica com sensor ultrassônico, irrigação automática com sensores, leitura de cartões RFID e um relógio digital de alta precisão. Essa experiência oferece uma sólida compreensão de conceitos eletrônicos fundamentais.',
      brand: 'SparkFun Eletronics',
      category: 'Eletrônicos',
      price: 150.00,
      countInStock: 2,
      rating: 4.9,
      numReviews: 2,
    },
    {
      name: 'Transistor NPN 2N2222',
      image: '/images/transistor.png',
      description:
        'O 2N2222 é um transistor simples e de uso geral na eletrônica. É muito utilizado em aplicações de chaveamento e amplificação. Pode ser utilizada em disciplinas como Laboratório de Eletrônica 1 e Laboratório de Eletrônica 2.',
      brand: '-',
      category: 'Eletrônicos',
      price: 0.25,
      countInStock: 150,
      rating: 4.5,
      numReviews: 23,
    },
    {
      name: 'Robô Seguidor de Linha',
      image: '/images/robo.png',
      description:
        'Esse é um projeto inicial que pode ser usado para discentes que se interessem em participar da CORA.',
      brand: 'Fabricação própria',
      category: 'Eletrônicos',
      price: 150.00,
      countInStock: 4,
      rating: 4.9,
      numReviews: 3,
    },
  ];
  
  export default products;