export const POSTS_DATA = [
  {
    user: {
      name: 'Alice Costa',
      email: 'alice.costa@thrive.com',
      profile_picture: {
        src: 'https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Alice Costa'
      }
    },
    feature_image: {
      src: 'https://www.guiadasemana.com.br/contentFiles/image/2016/11/FEA/principal/52339_w840h0_1480081018smoothie-morango.jpg',
      alt: 'Imagem de destaque do post sobre alimentação saudável'
    },
    content: `
      <p><strong>Hoje preparei um smoothie de frutas e grãos integrais!</strong> 🍓🍌 Um ótimo começo de dia para manter a energia lá em cima.</p>
      <p><a href="#">#Thrive</a> <a href="#">#HábitosSaudáveis</a></p>
    `,
    liked_by: ['Luana Silva', 'Carlos Almeida']
  },
  {
    user: {
      name: 'Lucas Pereira',
      email: 'lucas.pereira@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1724159768353-55b083d0d435?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Lucas Pereira'
      }
    },
    feature_image: {
      src: 'https://plus.unsplash.com/premium_photo-1672046218112-30a20c735686?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Imagem de destaque do post sobre exercícios ao ar livre'
    },
    content: `
      <p><strong>Nada como um treino ao ar livre para energizar o corpo e a mente!</strong> 🌳💪 Quem mais ama correr ao amanhecer?</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#ExercícioAoArLivre</a></li>
      </ul>
    `,
    liked_by: ['Marcos Oliveira', 'Juliana Costa']
  },
  {
    user: {
      name: 'Fernanda Lima',
      email: 'fernanda.lima@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1702482527875-e16d07f0d91b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Fernanda Lima'
      }
    },
    feature_image: {
      src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Imagem de destaque do post sobre meditação'
    },
    content: `
      <p><strong>Meditar ao fim do dia tem sido a minha prática favorita.</strong> Acalma a mente e melhora meu sono. 🧘‍♀️🌙</p>
      <p><a href="#">#Thrive</a> <a href="#">#Meditação</a></p>
    `,
    liked_by: ['Ricardo Santos', 'Mariana Alves']
  },
  {
    user: {
      name: 'Carlos Mendes',
      email: 'carlos.mendes@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1602471615287-d733c59b79c4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Carlos Mendes'
      }
    },
    feature_image: {
      src: 'https://static.itdg.com.br/images/1200-630/7febdaea14bab95474617e60219d41c9/agua-gelada.jpg',
      alt: 'Imagem de destaque do post sobre hidratação'
    },
    content: `
      <p><strong>Nunca me esqueço de beber água!</strong> A hidratação é fundamental para o bom funcionamento do corpo. 💧</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#Saúde</a></li>
      </ul>
    `,
    liked_by: ['Fabiana Rocha', 'Renato Costa']
  },
  {
    user: {
      name: 'Juliana Martins',
      email: 'juliana.martins@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1646071961865-3cb8a5649119?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Juliana Martins'
      }
    },
    feature_image: {
      src: 'https://jppereira.com.br/wp-content/uploads/2023/12/c5a85806ade29373c6dcf52919855e7e_XL.jpg',
      alt: 'Imagem de destaque do post sobre refeições balanceadas'
    },
    content: `
      <p><strong>O segredo está em manter uma alimentação equilibrada</strong> e rica em nutrientes. Hoje, salada colorida e quinoa! 🥗🍽️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#ComidaSaudável</a></li>
      </ul>
    `,
    liked_by: ['Paulo Henrique', 'Beatriz Oliveira']
  },
  {
    user: {
      name: 'Renato Souza',
      email: 'renato.souza@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1630026317249-c1c83b21ea07?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Renato Souza'
      }
    },
    feature_image: {
      src: 'https://blog.mooui.com.br/wp-content/uploads/2020/09/cama-arrumada60-capa.jpg',
      alt: 'Imagem de destaque do post sobre sono'
    },
    content: `
      <p><strong>Dormir bem é essencial para um dia produtivo e saudável.</strong> Dormi 8 horas essa noite e já estou renovado! 🛏️</p>
      <p><a href="#">#Thrive</a> <a href="#">#BoaNoite</a></p>
    `,
    liked_by: ['Sofia Ribeiro', 'Daniel Almeida']
  },
  {
    user: {
      name: 'Beatriz Rocha',
      email: 'beatriz.rocha@thrive.com',
      profile_picture: {
        src: 'https://plus.unsplash.com/premium_photo-1683817138631-c5fb4990d01d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Beatriz Rocha'
      }
    },
    feature_image: {
      src: 'https://revistaabsollut.com.br/wp-content/uploads/2020/05/yoga.jpg',
      alt: 'Imagem de destaque do post sobre yoga'
    },
    content: `
      <p><strong>Começar o dia com uma prática de yoga faz toda a diferença.</strong> Namastê! 🧘‍♀️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#Yoga</a></li>
      </ul>
    `,
    liked_by: ['Luana Silva', 'Carlos Almeida']
  },
  {
    user: {
      name: 'Eduardo Silva',
      email: 'eduardo.silva@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Eduardo Silva'
      }
    },
    feature_image: {
      src: 'https://www.portaljornaldosestados.com.br/wp-content/uploads/2022/10/principal.jpg',
      alt: 'Imagem de destaque do post sobre caminhada'
    },
    content: `
      <p><strong>Fazer caminhadas no parque sempre me ajuda a relaxar e recarregar as energias.</strong> 🌳🚶‍♂️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#CaminhadaSaudável</a></li>
      </ul>
    `,
    liked_by: ['Marcos Oliveira', 'Juliana Costa']
  },
  {
    user: {
      name: 'Mariana Ferreira',
      email: 'mariana.ferreira@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1683792384287-d7233ac491d1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Mariana Ferreira'
      }
    },
    feature_image: {
      src: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/melhores-praias-do-brasil-praia-brava-buzios.jpg',
      alt: 'Imagem de destaque do post sobre descanso'
    },
    content: `
      <p><strong>O descanso também é parte do processo de manter uma rotina saudável.</strong> Aproveitando meu dia de folga! 🛋️</p>
      <p><a href="#">#Thrive</a> <a href="#">#Descanso</a></p>
    `,
    liked_by: ['Ricardo Santos', 'Mariana Alves']
  },
  {
    user: {
      name: 'Fabiana Alves',
      email: 'fabiana.alves@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1566277913310-9834504c22e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Fabiana Alves'
      }
    },
    feature_image: {
      src: 'https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-conceptual-photo-of-zen-balance-pile-of-pebbles-on-the-boardwalk-image_3038953.jpg',
      alt: 'Imagem de destaque do post sobre equilíbrio'
    },
    content: `
      <p><strong>Equilibrar a mente, corpo e espírito é a chave para uma vida saudável.</strong></p>
      <p><a href="#">#Thrive</a> <a href="#">#Equilíbrio</a></p>
    `,
    liked_by: ['Renato Costa', 'Paulo Henrique']
  },
  {
    user: {
      name: 'Bruno Lima',
      email: 'bruno.lima@thrive.com',
      profile_picture: {
        src: 'https://plus.unsplash.com/premium_photo-1731499365752-cf90a04e0836?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Bruno Lima'
      }
    },
    feature_image: {
      src: 'https://static.itdg.com.br/images/auto-auto/9a3dd9e20648c879bb05e114f5429c57/shutterstock-492313333.jpg',
      alt: 'Imagem de destaque do post sobre alimentação consciente'
    },
    content: `
      <p><strong>Comer com atenção plena tem sido uma prática transformadora para mim.</strong> 🍽️✨</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#AlimentaçãoConsciente</a></li>
      </ul>
    `,
    liked_by: ['Sofia Ribeiro', 'Carlos Almeida']
  },
  {
    user: {
      name: 'Sofia Ribeiro',
      email: 'sofia.ribeiro@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1684966610091-f6beda2d025a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Sofia Ribeiro'
      }
    },
    feature_image: {
      src: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2021/09/23/meditacao-1632404447742_v2_450x600.jpg',
      alt: 'Imagem de destaque do post sobre hábitos matinais'
    },
    content: `
      <p><strong>Acordar cedo, fazer uma meditação e planejar o dia</strong> são hábitos que mudaram minha rotina. 🌅</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#HábitosMatinais</a></li>
      </ul>
    `,
    liked_by: ['Daniel Almeida', 'Marcos Oliveira']
  },
  {
    user: {
      name: 'Gustavo Martins',
      email: 'gustavo.martins@thrive.com',
      profile_picture: {
        src: 'https://storage.googleapis.com/support-forums-api/avatar/profile-6207-11635933662475372915.jpg',
        alt: 'Imagem de perfil de Gustavo Martins'
      }
    },
    feature_image: {
      src: 'https://a-static.mlcdn.com.br/1500x1500/garrafa-de-agua-infantil-com-3-grande-media-pequena-squeeze/zonnestore/kit3-garrf-mot-196/0c8e59fdb233da2d2a40e69fa7422306.jpeg',
      alt: 'Imagem de destaque do post sobre hidratação'
    },
    content: `
      <p><strong>Lembrando de beber água durante o dia!</strong> Hidratação é tudo para manter a saúde em dia. 💧</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#Hidratação</a></li>
      </ul>
    `,
    liked_by: ['Daniel Almeida', 'Paulo Henrique']
  },
  {
    user: {
      name: 'Patrícia Oliveira',
      email: 'patricia.oliveira@thrive.com',
      profile_picture: {
        src: 'https://mrwallpaper.com/images/hd/portrait-of-random-person-on-leafy-background-8xtpcwzjlw7vbi63.jpg',
        alt: 'Imagem de perfil de Patrícia Oliveira'
      }
    },
    feature_image: {
      src: 'https://zenklub.com.br/hubfs/Imported_Blog_Media/iStock-1139912908-1-1.jpg',
      alt: 'Imagem de destaque do post sobre descanso mental'
    },
    content: `
      <p><strong>Não se esqueça de dar uma pausa para sua mente.</strong> A meditação tem sido minha melhor aliada. 🧘‍♀️💆‍♀️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#DescansoMental</a></li>
      </ul>
    `,
    liked_by: ['Ricardo Santos', 'Mariana Alves']
  },
  {
    user: {
      name: 'Ricardo Santos',
      email: 'ricardo.santos@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1602520628350-fbf9db1f02ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE2fHxoZWFsdGglMjBhbmQlMjBmaXRuZXNzfGVufDB8fDB8fHww',
        alt: 'Imagem de perfil de Ricardo Santos'
      }
    },
    feature_image: {
      src: 'https://images.unsplash.com/photo-1607962776833-7ec9ef952784?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Imagem de destaque do post sobre atividade física'
    },
    content: `
      <p><strong>Fazer atividade física ao ar livre é maravilhoso!</strong> Nada como respirar ar puro para revitalizar o corpo. 🏃‍♂️🌞</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#SaúdeEmMovimento</a></li>
      </ul>
    `,
    liked_by: ['Andreas Ferreira', 'Getulio Aparecido']
  },
  {
    user: {
      name: 'Alice Costa',
      email: 'alice.costa@thrive.com',
      profile_picture: {
        src: 'https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Alice Costa'
      }
    },
    feature_image: {
      src: 'https://www.guiadasemana.com.br/contentFiles/image/2016/11/FEA/principal/52339_w840h0_1480081018smoothie-morango.jpg',
      alt: 'Imagem de destaque do post sobre alimentação saudável'
    },
    content: `
      <p><strong>Hoje preparei um smoothie de frutas e grãos integrais!</strong> 🍓🍌 Um ótimo começo de dia para manter a energia lá em cima.</p>
      <p><a href="#">#Thrive</a> <a href="#">#HábitosSaudáveis</a></p>
    `,
    liked_by: ['Luana Silva', 'Carlos Almeida']
  },
  {
    user: {
      name: 'Lucas Pereira',
      email: 'lucas.pereira@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1724159768353-55b083d0d435?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Lucas Pereira'
      }
    },
    feature_image: {
      src: 'https://plus.unsplash.com/premium_photo-1672046218112-30a20c735686?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Imagem de destaque do post sobre exercícios ao ar livre'
    },
    content: `
      <p><strong>Nada como um treino ao ar livre para energizar o corpo e a mente!</strong> 🌳💪 Quem mais ama correr ao amanhecer?</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#ExercícioAoArLivre</a></li>
      </ul>
    `,
    liked_by: ['Marcos Oliveira', 'Juliana Costa']
  },
  {
    user: {
      name: 'Fernanda Lima',
      email: 'fernanda.lima@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1702482527875-e16d07f0d91b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Fernanda Lima'
      }
    },
    feature_image: {
      src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Imagem de destaque do post sobre meditação'
    },
    content: `
      <p><strong>Meditar ao fim do dia tem sido a minha prática favorita.</strong> Acalma a mente e melhora meu sono. 🧘‍♀️🌙</p>
      <p><a href="#">#Thrive</a> <a href="#">#Meditação</a></p>
    `,
    liked_by: ['Ricardo Santos', 'Mariana Alves']
  },
  {
    user: {
      name: 'Carlos Mendes',
      email: 'carlos.mendes@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1602471615287-d733c59b79c4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Carlos Mendes'
      }
    },
    feature_image: {
      src: 'https://static.itdg.com.br/images/1200-630/7febdaea14bab95474617e60219d41c9/agua-gelada.jpg',
      alt: 'Imagem de destaque do post sobre hidratação'
    },
    content: `
      <p><strong>Nunca me esqueço de beber água!</strong> A hidratação é fundamental para o bom funcionamento do corpo. 💧</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#Saúde</a></li>
      </ul>
    `,
    liked_by: ['Fabiana Rocha', 'Renato Costa']
  },
  {
    user: {
      name: 'Juliana Martins',
      email: 'juliana.martins@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1646071961865-3cb8a5649119?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Juliana Martins'
      }
    },
    feature_image: {
      src: 'https://jppereira.com.br/wp-content/uploads/2023/12/c5a85806ade29373c6dcf52919855e7e_XL.jpg',
      alt: 'Imagem de destaque do post sobre refeições balanceadas'
    },
    content: `
      <p><strong>O segredo está em manter uma alimentação equilibrada</strong> e rica em nutrientes. Hoje, salada colorida e quinoa! 🥗🍽️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#ComidaSaudável</a></li>
      </ul>
    `,
    liked_by: ['Paulo Henrique', 'Beatriz Oliveira']
  },
  {
    user: {
      name: 'Renato Souza',
      email: 'renato.souza@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1630026317249-c1c83b21ea07?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Renato Souza'
      }
    },
    feature_image: {
      src: 'https://blog.mooui.com.br/wp-content/uploads/2020/09/cama-arrumada60-capa.jpg',
      alt: 'Imagem de destaque do post sobre sono'
    },
    content: `
      <p><strong>Dormir bem é essencial para um dia produtivo e saudável.</strong> Dormi 8 horas essa noite e já estou renovado! 🛏️</p>
      <p><a href="#">#Thrive</a> <a href="#">#BoaNoite</a></p>
    `,
    liked_by: ['Sofia Ribeiro', 'Daniel Almeida']
  },
  {
    user: {
      name: 'Beatriz Rocha',
      email: 'beatriz.rocha@thrive.com',
      profile_picture: {
        src: 'https://plus.unsplash.com/premium_photo-1683817138631-c5fb4990d01d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Beatriz Rocha'
      }
    },
    feature_image: {
      src: 'https://revistaabsollut.com.br/wp-content/uploads/2020/05/yoga.jpg',
      alt: 'Imagem de destaque do post sobre yoga'
    },
    content: `
      <p><strong>Começar o dia com uma prática de yoga faz toda a diferença.</strong> Namastê! 🧘‍♀️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#Yoga</a></li>
      </ul>
    `,
    liked_by: ['Luana Silva', 'Carlos Almeida']
  },
  {
    user: {
      name: 'Eduardo Silva',
      email: 'eduardo.silva@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Eduardo Silva'
      }
    },
    feature_image: {
      src: 'https://www.portaljornaldosestados.com.br/wp-content/uploads/2022/10/principal.jpg',
      alt: 'Imagem de destaque do post sobre caminhada'
    },
    content: `
      <p><strong>Fazer caminhadas no parque sempre me ajuda a relaxar e recarregar as energias.</strong> 🌳🚶‍♂️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#CaminhadaSaudável</a></li>
      </ul>
    `,
    liked_by: ['Marcos Oliveira', 'Juliana Costa']
  },
  {
    user: {
      name: 'Mariana Ferreira',
      email: 'mariana.ferreira@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1683792384287-d7233ac491d1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Mariana Ferreira'
      }
    },
    feature_image: {
      src: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/melhores-praias-do-brasil-praia-brava-buzios.jpg',
      alt: 'Imagem de destaque do post sobre descanso'
    },
    content: `
      <p><strong>O descanso também é parte do processo de manter uma rotina saudável.</strong> Aproveitando meu dia de folga! 🛋️</p>
      <p><a href="#">#Thrive</a> <a href="#">#Descanso</a></p>
    `,
    liked_by: ['Ricardo Santos', 'Mariana Alves']
  },
  {
    user: {
      name: 'Fabiana Alves',
      email: 'fabiana.alves@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1566277913310-9834504c22e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Fabiana Alves'
      }
    },
    feature_image: {
      src: 'https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-conceptual-photo-of-zen-balance-pile-of-pebbles-on-the-boardwalk-image_3038953.jpg',
      alt: 'Imagem de destaque do post sobre equilíbrio'
    },
    content: `
      <p><strong>Equilibrar a mente, corpo e espírito é a chave para uma vida saudável.</strong></p>
      <p><a href="#">#Thrive</a> <a href="#">#Equilíbrio</a></p>
    `,
    liked_by: ['Renato Costa', 'Paulo Henrique']
  },
  {
    user: {
      name: 'Bruno Lima',
      email: 'bruno.lima@thrive.com',
      profile_picture: {
        src: 'https://plus.unsplash.com/premium_photo-1731499365752-cf90a04e0836?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Bruno Lima'
      }
    },
    feature_image: {
      src: 'https://static.itdg.com.br/images/auto-auto/9a3dd9e20648c879bb05e114f5429c57/shutterstock-492313333.jpg',
      alt: 'Imagem de destaque do post sobre alimentação consciente'
    },
    content: `
      <p><strong>Comer com atenção plena tem sido uma prática transformadora para mim.</strong> 🍽️✨</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#AlimentaçãoConsciente</a></li>
      </ul>
    `,
    liked_by: ['Sofia Ribeiro', 'Carlos Almeida']
  },
  {
    user: {
      name: 'Sofia Ribeiro',
      email: 'sofia.ribeiro@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1684966610091-f6beda2d025a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Sofia Ribeiro'
      }
    },
    feature_image: {
      src: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2021/09/23/meditacao-1632404447742_v2_450x600.jpg',
      alt: 'Imagem de destaque do post sobre hábitos matinais'
    },
    content: `
      <p><strong>Acordar cedo, fazer uma meditação e planejar o dia</strong> são hábitos que mudaram minha rotina. 🌅</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#HábitosMatinais</a></li>
      </ul>
    `,
    liked_by: ['Daniel Almeida', 'Marcos Oliveira']
  },
  {
    user: {
      name: 'Gustavo Martins',
      email: 'gustavo.martins@thrive.com',
      profile_picture: {
        src: 'https://storage.googleapis.com/support-forums-api/avatar/profile-6207-11635933662475372915.jpg',
        alt: 'Imagem de perfil de Gustavo Martins'
      }
    },
    feature_image: {
      src: 'https://a-static.mlcdn.com.br/1500x1500/garrafa-de-agua-infantil-com-3-grande-media-pequena-squeeze/zonnestore/kit3-garrf-mot-196/0c8e59fdb233da2d2a40e69fa7422306.jpeg',
      alt: 'Imagem de destaque do post sobre hidratação'
    },
    content: `
      <p><strong>Lembrando de beber água durante o dia!</strong> Hidratação é tudo para manter a saúde em dia. 💧</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#Hidratação</a></li>
      </ul>
    `,
    liked_by: ['Daniel Almeida', 'Paulo Henrique']
  },
  {
    user: {
      name: 'Patrícia Oliveira',
      email: 'patricia.oliveira@thrive.com',
      profile_picture: {
        src: 'https://mrwallpaper.com/images/hd/portrait-of-random-person-on-leafy-background-8xtpcwzjlw7vbi63.jpg',
        alt: 'Imagem de perfil de Patrícia Oliveira'
      }
    },
    feature_image: {
      src: 'https://zenklub.com.br/hubfs/Imported_Blog_Media/iStock-1139912908-1-1.jpg',
      alt: 'Imagem de destaque do post sobre descanso mental'
    },
    content: `
      <p><strong>Não se esqueça de dar uma pausa para sua mente.</strong> A meditação tem sido minha melhor aliada. 🧘‍♀️💆‍♀️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#DescansoMental</a></li>
      </ul>
    `,
    liked_by: ['Ricardo Santos', 'Mariana Alves']
  },
  {
    user: {
      name: 'Ricardo Santos',
      email: 'ricardo.santos@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1602520628350-fbf9db1f02ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE2fHxoZWFsdGglMjBhbmQlMjBmaXRuZXNzfGVufDB8fDB8fHww',
        alt: 'Imagem de perfil de Ricardo Santos'
      }
    },
    feature_image: {
      src: 'https://images.unsplash.com/photo-1607962776833-7ec9ef952784?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Imagem de destaque do post sobre atividade física'
    },
    content: `
      <p><strong>Fazer atividade física ao ar livre é maravilhoso!</strong> Nada como respirar ar puro para revitalizar o corpo. 🏃‍♂️🌞</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#SaúdeEmMovimento</a></li>
      </ul>
    `,
    liked_by: ['Andreas Ferreira', 'Getulio Aparecido']
  },
  {
    user: {
      name: 'Alice Costa',
      email: 'alice.costa@thrive.com',
      profile_picture: {
        src: 'https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Alice Costa'
      }
    },
    feature_image: {
      src: 'https://www.guiadasemana.com.br/contentFiles/image/2016/11/FEA/principal/52339_w840h0_1480081018smoothie-morango.jpg',
      alt: 'Imagem de destaque do post sobre alimentação saudável'
    },
    content: `
      <p><strong>Hoje preparei um smoothie de frutas e grãos integrais!</strong> 🍓🍌 Um ótimo começo de dia para manter a energia lá em cima.</p>
      <p><a href="#">#Thrive</a> <a href="#">#HábitosSaudáveis</a></p>
    `,
    liked_by: ['Luana Silva', 'Carlos Almeida']
  },
  {
    user: {
      name: 'Lucas Pereira',
      email: 'lucas.pereira@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1724159768353-55b083d0d435?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Lucas Pereira'
      }
    },
    feature_image: {
      src: 'https://plus.unsplash.com/premium_photo-1672046218112-30a20c735686?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Imagem de destaque do post sobre exercícios ao ar livre'
    },
    content: `
      <p><strong>Nada como um treino ao ar livre para energizar o corpo e a mente!</strong> 🌳💪 Quem mais ama correr ao amanhecer?</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#ExercícioAoArLivre</a></li>
      </ul>
    `,
    liked_by: ['Marcos Oliveira', 'Juliana Costa']
  },
  {
    user: {
      name: 'Fernanda Lima',
      email: 'fernanda.lima@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1702482527875-e16d07f0d91b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Fernanda Lima'
      }
    },
    feature_image: {
      src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Imagem de destaque do post sobre meditação'
    },
    content: `
      <p><strong>Meditar ao fim do dia tem sido a minha prática favorita.</strong> Acalma a mente e melhora meu sono. 🧘‍♀️🌙</p>
      <p><a href="#">#Thrive</a> <a href="#">#Meditação</a></p>
    `,
    liked_by: ['Ricardo Santos', 'Mariana Alves']
  },
  {
    user: {
      name: 'Carlos Mendes',
      email: 'carlos.mendes@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1602471615287-d733c59b79c4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Carlos Mendes'
      }
    },
    feature_image: {
      src: 'https://static.itdg.com.br/images/1200-630/7febdaea14bab95474617e60219d41c9/agua-gelada.jpg',
      alt: 'Imagem de destaque do post sobre hidratação'
    },
    content: `
      <p><strong>Nunca me esqueço de beber água!</strong> A hidratação é fundamental para o bom funcionamento do corpo. 💧</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#Saúde</a></li>
      </ul>
    `,
    liked_by: ['Fabiana Rocha', 'Renato Costa']
  },
  {
    user: {
      name: 'Juliana Martins',
      email: 'juliana.martins@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1646071961865-3cb8a5649119?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Juliana Martins'
      }
    },
    feature_image: {
      src: 'https://jppereira.com.br/wp-content/uploads/2023/12/c5a85806ade29373c6dcf52919855e7e_XL.jpg',
      alt: 'Imagem de destaque do post sobre refeições balanceadas'
    },
    content: `
      <p><strong>O segredo está em manter uma alimentação equilibrada</strong> e rica em nutrientes. Hoje, salada colorida e quinoa! 🥗🍽️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#ComidaSaudável</a></li>
      </ul>
    `,
    liked_by: ['Paulo Henrique', 'Beatriz Oliveira']
  },
  {
    user: {
      name: 'Renato Souza',
      email: 'renato.souza@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1630026317249-c1c83b21ea07?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Renato Souza'
      }
    },
    feature_image: {
      src: 'https://blog.mooui.com.br/wp-content/uploads/2020/09/cama-arrumada60-capa.jpg',
      alt: 'Imagem de destaque do post sobre sono'
    },
    content: `
      <p><strong>Dormir bem é essencial para um dia produtivo e saudável.</strong> Dormi 8 horas essa noite e já estou renovado! 🛏️</p>
      <p><a href="#">#Thrive</a> <a href="#">#BoaNoite</a></p>
    `,
    liked_by: ['Sofia Ribeiro', 'Daniel Almeida']
  },
  {
    user: {
      name: 'Beatriz Rocha',
      email: 'beatriz.rocha@thrive.com',
      profile_picture: {
        src: 'https://plus.unsplash.com/premium_photo-1683817138631-c5fb4990d01d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Beatriz Rocha'
      }
    },
    feature_image: {
      src: 'https://revistaabsollut.com.br/wp-content/uploads/2020/05/yoga.jpg',
      alt: 'Imagem de destaque do post sobre yoga'
    },
    content: `
      <p><strong>Começar o dia com uma prática de yoga faz toda a diferença.</strong> Namastê! 🧘‍♀️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#Yoga</a></li>
      </ul>
    `,
    liked_by: ['Luana Silva', 'Carlos Almeida']
  },
  {
    user: {
      name: 'Eduardo Silva',
      email: 'eduardo.silva@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Eduardo Silva'
      }
    },
    feature_image: {
      src: 'https://www.portaljornaldosestados.com.br/wp-content/uploads/2022/10/principal.jpg',
      alt: 'Imagem de destaque do post sobre caminhada'
    },
    content: `
      <p><strong>Fazer caminhadas no parque sempre me ajuda a relaxar e recarregar as energias.</strong> 🌳🚶‍♂️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#CaminhadaSaudável</a></li>
      </ul>
    `,
    liked_by: ['Marcos Oliveira', 'Juliana Costa']
  },
  {
    user: {
      name: 'Mariana Ferreira',
      email: 'mariana.ferreira@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1683792384287-d7233ac491d1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Mariana Ferreira'
      }
    },
    feature_image: {
      src: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/melhores-praias-do-brasil-praia-brava-buzios.jpg',
      alt: 'Imagem de destaque do post sobre descanso'
    },
    content: `
      <p><strong>O descanso também é parte do processo de manter uma rotina saudável.</strong> Aproveitando meu dia de folga! 🛋️</p>
      <p><a href="#">#Thrive</a> <a href="#">#Descanso</a></p>
    `,
    liked_by: ['Ricardo Santos', 'Mariana Alves']
  },
  {
    user: {
      name: 'Fabiana Alves',
      email: 'fabiana.alves@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1566277913310-9834504c22e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Fabiana Alves'
      }
    },
    feature_image: {
      src: 'https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-conceptual-photo-of-zen-balance-pile-of-pebbles-on-the-boardwalk-image_3038953.jpg',
      alt: 'Imagem de destaque do post sobre equilíbrio'
    },
    content: `
      <p><strong>Equilibrar a mente, corpo e espírito é a chave para uma vida saudável.</strong></p>
      <p><a href="#">#Thrive</a> <a href="#">#Equilíbrio</a></p>
    `,
    liked_by: ['Renato Costa', 'Paulo Henrique']
  },
  {
    user: {
      name: 'Bruno Lima',
      email: 'bruno.lima@thrive.com',
      profile_picture: {
        src: 'https://plus.unsplash.com/premium_photo-1731499365752-cf90a04e0836?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Bruno Lima'
      }
    },
    feature_image: {
      src: 'https://static.itdg.com.br/images/auto-auto/9a3dd9e20648c879bb05e114f5429c57/shutterstock-492313333.jpg',
      alt: 'Imagem de destaque do post sobre alimentação consciente'
    },
    content: `
      <p><strong>Comer com atenção plena tem sido uma prática transformadora para mim.</strong> 🍽️✨</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#AlimentaçãoConsciente</a></li>
      </ul>
    `,
    liked_by: ['Sofia Ribeiro', 'Carlos Almeida']
  },
  {
    user: {
      name: 'Sofia Ribeiro',
      email: 'sofia.ribeiro@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1684966610091-f6beda2d025a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Sofia Ribeiro'
      }
    },
    feature_image: {
      src: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2021/09/23/meditacao-1632404447742_v2_450x600.jpg',
      alt: 'Imagem de destaque do post sobre hábitos matinais'
    },
    content: `
      <p><strong>Acordar cedo, fazer uma meditação e planejar o dia</strong> são hábitos que mudaram minha rotina. 🌅</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#HábitosMatinais</a></li>
      </ul>
    `,
    liked_by: ['Daniel Almeida', 'Marcos Oliveira']
  },
  {
    user: {
      name: 'Gustavo Martins',
      email: 'gustavo.martins@thrive.com',
      profile_picture: {
        src: 'https://storage.googleapis.com/support-forums-api/avatar/profile-6207-11635933662475372915.jpg',
        alt: 'Imagem de perfil de Gustavo Martins'
      }
    },
    feature_image: {
      src: 'https://a-static.mlcdn.com.br/1500x1500/garrafa-de-agua-infantil-com-3-grande-media-pequena-squeeze/zonnestore/kit3-garrf-mot-196/0c8e59fdb233da2d2a40e69fa7422306.jpeg',
      alt: 'Imagem de destaque do post sobre hidratação'
    },
    content: `
      <p><strong>Lembrando de beber água durante o dia!</strong> Hidratação é tudo para manter a saúde em dia. 💧</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#Hidratação</a></li>
      </ul>
    `,
    liked_by: ['Daniel Almeida', 'Paulo Henrique']
  },
  {
    user: {
      name: 'Patrícia Oliveira',
      email: 'patricia.oliveira@thrive.com',
      profile_picture: {
        src: 'https://mrwallpaper.com/images/hd/portrait-of-random-person-on-leafy-background-8xtpcwzjlw7vbi63.jpg',
        alt: 'Imagem de perfil de Patrícia Oliveira'
      }
    },
    feature_image: {
      src: 'https://zenklub.com.br/hubfs/Imported_Blog_Media/iStock-1139912908-1-1.jpg',
      alt: 'Imagem de destaque do post sobre descanso mental'
    },
    content: `
      <p><strong>Não se esqueça de dar uma pausa para sua mente.</strong> A meditação tem sido minha melhor aliada. 🧘‍♀️💆‍♀️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#DescansoMental</a></li>
      </ul>
    `,
    liked_by: ['Ricardo Santos', 'Mariana Alves']
  },
  {
    user: {
      name: 'Ricardo Santos',
      email: 'ricardo.santos@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1602520628350-fbf9db1f02ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE2fHxoZWFsdGglMjBhbmQlMjBmaXRuZXNzfGVufDB8fDB8fHww',
        alt: 'Imagem de perfil de Ricardo Santos'
      }
    },
    feature_image: {
      src: 'https://images.unsplash.com/photo-1607962776833-7ec9ef952784?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Imagem de destaque do post sobre atividade física'
    },
    content: `
      <p><strong>Fazer atividade física ao ar livre é maravilhoso!</strong> Nada como respirar ar puro para revitalizar o corpo. 🏃‍♂️🌞</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#SaúdeEmMovimento</a></li>
      </ul>
    `,
    liked_by: ['Andreas Ferreira', 'Getulio Aparecido']
  },
  {
    user: {
      name: 'Alice Costa',
      email: 'alice.costa@thrive.com',
      profile_picture: {
        src: 'https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Alice Costa'
      }
    },
    feature_image: {
      src: 'https://www.guiadasemana.com.br/contentFiles/image/2016/11/FEA/principal/52339_w840h0_1480081018smoothie-morango.jpg',
      alt: 'Imagem de destaque do post sobre alimentação saudável'
    },
    content: `
      <p><strong>Hoje preparei um smoothie de frutas e grãos integrais!</strong> 🍓🍌 Um ótimo começo de dia para manter a energia lá em cima.</p>
      <p><a href="#">#Thrive</a> <a href="#">#HábitosSaudáveis</a></p>
    `,
    liked_by: ['Luana Silva', 'Carlos Almeida']
  },
  {
    user: {
      name: 'Lucas Pereira',
      email: 'lucas.pereira@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1724159768353-55b083d0d435?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Lucas Pereira'
      }
    },
    feature_image: {
      src: 'https://plus.unsplash.com/premium_photo-1672046218112-30a20c735686?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Imagem de destaque do post sobre exercícios ao ar livre'
    },
    content: `
      <p><strong>Nada como um treino ao ar livre para energizar o corpo e a mente!</strong> 🌳💪 Quem mais ama correr ao amanhecer?</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#ExercícioAoArLivre</a></li>
      </ul>
    `,
    liked_by: ['Marcos Oliveira', 'Juliana Costa']
  },
  {
    user: {
      name: 'Fernanda Lima',
      email: 'fernanda.lima@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1702482527875-e16d07f0d91b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Fernanda Lima'
      }
    },
    feature_image: {
      src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1399&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Imagem de destaque do post sobre meditação'
    },
    content: `
      <p><strong>Meditar ao fim do dia tem sido a minha prática favorita.</strong> Acalma a mente e melhora meu sono. 🧘‍♀️🌙</p>
      <p><a href="#">#Thrive</a> <a href="#">#Meditação</a></p>
    `,
    liked_by: ['Ricardo Santos', 'Mariana Alves']
  },
  {
    user: {
      name: 'Carlos Mendes',
      email: 'carlos.mendes@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1602471615287-d733c59b79c4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Carlos Mendes'
      }
    },
    feature_image: {
      src: 'https://static.itdg.com.br/images/1200-630/7febdaea14bab95474617e60219d41c9/agua-gelada.jpg',
      alt: 'Imagem de destaque do post sobre hidratação'
    },
    content: `
      <p><strong>Nunca me esqueço de beber água!</strong> A hidratação é fundamental para o bom funcionamento do corpo. 💧</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#Saúde</a></li>
      </ul>
    `,
    liked_by: ['Fabiana Rocha', 'Renato Costa']
  },
  {
    user: {
      name: 'Juliana Martins',
      email: 'juliana.martins@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1646071961865-3cb8a5649119?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Juliana Martins'
      }
    },
    feature_image: {
      src: 'https://jppereira.com.br/wp-content/uploads/2023/12/c5a85806ade29373c6dcf52919855e7e_XL.jpg',
      alt: 'Imagem de destaque do post sobre refeições balanceadas'
    },
    content: `
      <p><strong>O segredo está em manter uma alimentação equilibrada</strong> e rica em nutrientes. Hoje, salada colorida e quinoa! 🥗🍽️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#ComidaSaudável</a></li>
      </ul>
    `,
    liked_by: ['Paulo Henrique', 'Beatriz Oliveira']
  },
  {
    user: {
      name: 'Renato Souza',
      email: 'renato.souza@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1630026317249-c1c83b21ea07?q=80&w=1285&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Renato Souza'
      }
    },
    feature_image: {
      src: 'https://blog.mooui.com.br/wp-content/uploads/2020/09/cama-arrumada60-capa.jpg',
      alt: 'Imagem de destaque do post sobre sono'
    },
    content: `
      <p><strong>Dormir bem é essencial para um dia produtivo e saudável.</strong> Dormi 8 horas essa noite e já estou renovado! 🛏️</p>
      <p><a href="#">#Thrive</a> <a href="#">#BoaNoite</a></p>
    `,
    liked_by: ['Sofia Ribeiro', 'Daniel Almeida']
  },
  {
    user: {
      name: 'Beatriz Rocha',
      email: 'beatriz.rocha@thrive.com',
      profile_picture: {
        src: 'https://plus.unsplash.com/premium_photo-1683817138631-c5fb4990d01d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Beatriz Rocha'
      }
    },
    feature_image: {
      src: 'https://revistaabsollut.com.br/wp-content/uploads/2020/05/yoga.jpg',
      alt: 'Imagem de destaque do post sobre yoga'
    },
    content: `
      <p><strong>Começar o dia com uma prática de yoga faz toda a diferença.</strong> Namastê! 🧘‍♀️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#Yoga</a></li>
      </ul>
    `,
    liked_by: ['Luana Silva', 'Carlos Almeida']
  },
  {
    user: {
      name: 'Eduardo Silva',
      email: 'eduardo.silva@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Eduardo Silva'
      }
    },
    feature_image: {
      src: 'https://www.portaljornaldosestados.com.br/wp-content/uploads/2022/10/principal.jpg',
      alt: 'Imagem de destaque do post sobre caminhada'
    },
    content: `
      <p><strong>Fazer caminhadas no parque sempre me ajuda a relaxar e recarregar as energias.</strong> 🌳🚶‍♂️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#CaminhadaSaudável</a></li>
      </ul>
    `,
    liked_by: ['Marcos Oliveira', 'Juliana Costa']
  },
  {
    user: {
      name: 'Mariana Ferreira',
      email: 'mariana.ferreira@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1683792384287-d7233ac491d1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Mariana Ferreira'
      }
    },
    feature_image: {
      src: 'https://www.melhoresdestinos.com.br/wp-content/uploads/2020/06/melhores-praias-do-brasil-praia-brava-buzios.jpg',
      alt: 'Imagem de destaque do post sobre descanso'
    },
    content: `
      <p><strong>O descanso também é parte do processo de manter uma rotina saudável.</strong> Aproveitando meu dia de folga! 🛋️</p>
      <p><a href="#">#Thrive</a> <a href="#">#Descanso</a></p>
    `,
    liked_by: ['Ricardo Santos', 'Mariana Alves']
  },
  {
    user: {
      name: 'Fabiana Alves',
      email: 'fabiana.alves@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1566277913310-9834504c22e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Fabiana Alves'
      }
    },
    feature_image: {
      src: 'https://png.pngtree.com/thumb_back/fw800/background/20230611/pngtree-conceptual-photo-of-zen-balance-pile-of-pebbles-on-the-boardwalk-image_3038953.jpg',
      alt: 'Imagem de destaque do post sobre equilíbrio'
    },
    content: `
      <p><strong>Equilibrar a mente, corpo e espírito é a chave para uma vida saudável.</strong></p>
      <p><a href="#">#Thrive</a> <a href="#">#Equilíbrio</a></p>
    `,
    liked_by: ['Renato Costa', 'Paulo Henrique']
  },
  {
    user: {
      name: 'Bruno Lima',
      email: 'bruno.lima@thrive.com',
      profile_picture: {
        src: 'https://plus.unsplash.com/premium_photo-1731499365752-cf90a04e0836?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Bruno Lima'
      }
    },
    feature_image: {
      src: 'https://static.itdg.com.br/images/auto-auto/9a3dd9e20648c879bb05e114f5429c57/shutterstock-492313333.jpg',
      alt: 'Imagem de destaque do post sobre alimentação consciente'
    },
    content: `
      <p><strong>Comer com atenção plena tem sido uma prática transformadora para mim.</strong> 🍽️✨</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#AlimentaçãoConsciente</a></li>
      </ul>
    `,
    liked_by: ['Sofia Ribeiro', 'Carlos Almeida']
  },
  {
    user: {
      name: 'Sofia Ribeiro',
      email: 'sofia.ribeiro@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1684966610091-f6beda2d025a?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        alt: 'Imagem de perfil de Sofia Ribeiro'
      }
    },
    feature_image: {
      src: 'https://conteudo.imguol.com.br/c/entretenimento/0c/2021/09/23/meditacao-1632404447742_v2_450x600.jpg',
      alt: 'Imagem de destaque do post sobre hábitos matinais'
    },
    content: `
      <p><strong>Acordar cedo, fazer uma meditação e planejar o dia</strong> são hábitos que mudaram minha rotina. 🌅</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#HábitosMatinais</a></li>
      </ul>
    `,
    liked_by: ['Daniel Almeida', 'Marcos Oliveira']
  },
  {
    user: {
      name: 'Gustavo Martins',
      email: 'gustavo.martins@thrive.com',
      profile_picture: {
        src: 'https://storage.googleapis.com/support-forums-api/avatar/profile-6207-11635933662475372915.jpg',
        alt: 'Imagem de perfil de Gustavo Martins'
      }
    },
    feature_image: {
      src: 'https://a-static.mlcdn.com.br/1500x1500/garrafa-de-agua-infantil-com-3-grande-media-pequena-squeeze/zonnestore/kit3-garrf-mot-196/0c8e59fdb233da2d2a40e69fa7422306.jpeg',
      alt: 'Imagem de destaque do post sobre hidratação'
    },
    content: `
      <p><strong>Lembrando de beber água durante o dia!</strong> Hidratação é tudo para manter a saúde em dia. 💧</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#Hidratação</a></li>
      </ul>
    `,
    liked_by: ['Daniel Almeida', 'Paulo Henrique']
  },
  {
    user: {
      name: 'Patrícia Oliveira',
      email: 'patricia.oliveira@thrive.com',
      profile_picture: {
        src: 'https://mrwallpaper.com/images/hd/portrait-of-random-person-on-leafy-background-8xtpcwzjlw7vbi63.jpg',
        alt: 'Imagem de perfil de Patrícia Oliveira'
      }
    },
    feature_image: {
      src: 'https://zenklub.com.br/hubfs/Imported_Blog_Media/iStock-1139912908-1-1.jpg',
      alt: 'Imagem de destaque do post sobre descanso mental'
    },
    content: `
      <p><strong>Não se esqueça de dar uma pausa para sua mente.</strong> A meditação tem sido minha melhor aliada. 🧘‍♀️💆‍♀️</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#DescansoMental</a></li>
      </ul>
    `,
    liked_by: ['Ricardo Santos', 'Mariana Alves']
  },
  {
    user: {
      name: 'Ricardo Santos',
      email: 'ricardo.santos@thrive.com',
      profile_picture: {
        src: 'https://images.unsplash.com/photo-1602520628350-fbf9db1f02ae?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE2fHxoZWFsdGglMjBhbmQlMjBmaXRuZXNzfGVufDB8fDB8fHww',
        alt: 'Imagem de perfil de Ricardo Santos'
      }
    },
    feature_image: {
      src: 'https://images.unsplash.com/photo-1607962776833-7ec9ef952784?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Imagem de destaque do post sobre atividade física'
    },
    content: `
      <p><strong>Fazer atividade física ao ar livre é maravilhoso!</strong> Nada como respirar ar puro para revitalizar o corpo. 🏃‍♂️🌞</p>
      <ul>
        <li><a href="#">#Thrive</a></li>
        <li><a href="#">#SaúdeEmMovimento</a></li>
      </ul>
    `,
    liked_by: ['Andreas Ferreira', 'Getulio Aparecido']
  }
]
