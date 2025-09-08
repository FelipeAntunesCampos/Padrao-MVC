const herois = [
    {
        id: 1,
        nome: "Superman",
        identidadeSecreta: "Clark Kent",
        poder: "Super força, voo, visão de calor",
        fraqueza: "Kriptonita",
        universo: "DC",
        ativo: true,
    },
    {
        id: 2,
        nome: "Spider-Man",
        identidadeSecreta: "Peter Parker",
        poder: "Agilidade, teia, sentido aranha",
        fraqueza: "Responsabilidade excessiva",
        universo: "Marvel",
        ativo: true,
    },
    // ... mais heróis
];

const viloes = [
    {
        id: 1,
        nome: "Joker",
        identidadeSecreta: "Desconhecida",
        poder: "Caos, toxinas, loucura",
        objetivo: "Destruir Batman",
        universo: "DC",
        perigoso: true,
    },
    // ... mais vilões
];

const universos = [
    { id: 1, nome: "DC", editora: "DC Comics", fundacao: 1934 },
    { id: 2, nome: "Marvel", editora: "Marvel Comics", fundacao: 1939 },
];

export default { herois, viloes, universos };