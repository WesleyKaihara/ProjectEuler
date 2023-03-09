// Usando names.txt (clique com o botão direito do mouse e 'Salvar link/destino como...'), um arquivo de texto de 46K contendo mais de cinco mil nomes, comece classificando-o em ordem alfabética. Em seguida, calculando o valor alfabético para cada nome, multiplique esse valor por sua posição alfabética na lista para obter uma pontuação de nome.

// Por exemplo, quando a lista é classificada em ordem alfabética, COLIN, que vale 3 + 15 + 12 + 9 + 14 = 53, é o 938º nome da lista. Assim, COLIN obteria uma pontuação de 938 × 53 = 49714.

// Qual é o total de todas as pontuações de nomes no arquivo?

const fs = require('fs');

let letras = {
  A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26
}

let total = 0

fs.readFile(`${__dirname}/data.txt`, 'utf8' , (err, data) => {
  const nomes = data.split(",").map(nome => 
    nome = nome.replace(/"/g,"")
  ).sort()

  nomes.forEach((nome,index) => {
    let score = 0
    for(let i=0; i<nome.length;i++) {
      score+=letras[nome[i]]
    }
    total+=score*(index+1)
    console.log(nome, score, index, index+1)
  })
  console.log(total)
});
