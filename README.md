# Site Seja Antirracista | Contador de assinaturas
O [site Seja Antirracista](https://www.sejaantirracista.org) desenvolvido pelo Instituto Identidades do Brasil e pelo Sistema B Brasil é uma campanha de conscientização e combate sobre o racismo. 
No ecossistema da campanha existem dois formulários que recolhem assinaturas de empresas e pessoas que estão dispostas a firmar um compromisso com a causa. As assinaturas recolhidas são colocadas automaticamente em uma planilha no Google Drive do organizador.

Eu fui chamado para criar uma solução  para exibir no site o número de assinaturas recolhidas pelo formulário e registradas na planilha.

## Processo e desafios
O site havia sido criado no [strikingly](https://pt.strikingly.com), uma plataforma de criação visual de sites. Nele você pode usar blocos de imagens e textos para montar seu projeto. Uma das limitações inerentes a essa abordagem é o fato de que eu não poderia mexer diretamente no código que gera a página, apenas poderia inserir blocos HTML no meio do corpo da página.

Outra limitação foi como acessar as informações da planilha do Google. Pensei primeiro em acessar via javascript diretamente do site no strikingly os dados da planilha, mas encontrei muitos bloqueios de autenticação por parte do Google. Mudei de rumo e tentei acessar os dados usando uma solução sem código, via Zapier e integrações com outros serviços. A ideia era deixar o Zapier guardar, a cada vez que a planilha fosse atualizada, o número de pessoas inscritas. Isso funcionou rápido, mas como a campanha estava recebendo muitos acessos e muitas assinaturas, o limite de ZAPS no tier gratuito foi esgotado em cinco minutos. Assumi então o desafio de fazer o trabalho similar ao que Zapier estava fazendo: emitir da planilha do google a quantidade de assinaturas e guardar essa informação num banco de dados.

## Solução
Criei um script na planilha via Google Apps Scripts (javascript) que acessava a planilha e pegava o número da última linha da planilha e o enviava para o meu servidor. Esse servidor tinha o trabalho de receber esse número e guardar num banco de dados. Por último, criei no site um código que acessa o banco de dados e pega o número de assinaturas, exibindo-o em seguida.

## Detalhes Técnicos
Neste repositório:
- NodeJS
- TypeScript
- TypeORM

O servidor foi criado usando NodeJS e hospedado no Heroku. Este está conectado a um banco de dados MongoDB na nuvem (Atlas). O script criado no Google Apps Scripts que manipula a planilha é em Javascript, bem como o código que roda no site para buscar o número de assinaturas. O servidor em Node tem duas rotas básicas, uma de atualização e outra de visualização do número de assinaturas. Essas duas rotas são usadas pela planilha e pelo site final.

## License
MIT License (MIT) for Open Source Software
