# Você pode criar um Comments.md ou History.md e escrever a linha de raciocínio que está usando. O que queria fazer, mas não funcionou ou funcionou? Se não funcionou, qual foi o motivo? Etc...

Bem, por eu ter travado num erro para implementar um requisito não conseguirei detalhar muito bem
a minha de raciocínio que usei.
Tentarei colocar alguns informações importantes aqui. De deficuldades, soluções, padrões que utilizei etc.

## Estrutua de Pastas e Nome de Components

**Link:** https://medium.com/@Charles_Stover/optimal-file-structure-for-react-applications-f3e35ad0a145
**Motivo:** Uma boa estrutura para organização de components e outros arquivos do projeto.

## Breakpoints CSS

**Link:** https://bulma.io/documentation/overview/responsiveness/
**Motivo:** Breakpoints mais simples

## Opcionalmente, você poderá usar Redux e Redux-Saga.

Para esse projeto só consegui implementar o básico de Redux, pois ainda é uma skill que estou em progresso.

## ​Desejamos também que a interface seja de fácil uso e com bons feedbacks para o usuário (UX), por exemplo, animações de loading enquanto uma request não é retornada.

Ver pasta comments-md_images

## Uma tela inicial com um campo para receber o nome ou apelido de um usuário no GitHub;

Fiz toda a aplicação em uma só página, por questão de requisitos. Então não vi necessidade
de redirecionar para outra página.

# Se ou suário inserido na tela inicial for um usuário válido (se ele existir), osse guintes dados deverão ser exibidos:

[x] Apelido, avatar, biografia e URL do usuário;
[] Um mapa com um marcador na localização do usuário:
Aqui consegui implemetar um o leaflet, só que por padrão ele precisa da latitude e longitude, porém
no response do usuário do github só vem um chave LOCATION que é o endereço. Tentei usar API's de Geocoding,
porém só consegui encontrar uma boa quase no prazo de entrega. Que ainda precisa ser trabalhada melhor os dados trazidos no RESPONSE, pois vem muita informação desnecessária. Por outros motivos que falarei mais
abaixo perde muito tempo para implementar esse requisito.
[x] Uma lista com os repositórios aosq uais o usuário deu estrela no GitHub;
[] Na lista de repositórios, permitir que um usuário logado dê ouremova uma estrela para
cada repositório do usuário buscado:
Aqui foi o caso que mais perdi tempo em todo esse teste. Na pasta comments-md_images colocarei algumas
screenshots dos erros que aconteceram comigo. Erros muito bizarros! No total acredito que fiquei travado
nesse requisito mais de um dia e meio, ou mais. E ainda não consegui encontrar a solução.
Pedi ajuda em Grupos de JS/React, a colegas etc e nada. Testei tudo possível!
Os dois principais erros foram de 401, Authorization e CORS.
Não sei por que mais testei as rotas, com os headers todos no Node e no Insominia e roda de boas.
Só na minha função dentro do component que não funciona, :(
[] Criação de testes.
