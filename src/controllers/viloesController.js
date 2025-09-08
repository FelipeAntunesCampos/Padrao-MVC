import dados from "../models/dados.js"
const { viloes } = dados;

const getAllViloes = (req, res) => {
    const { nome, universo, perigoso } = req.query;
    let resultado = viloes

    if (nome) {
        resultado = resultado.filter((h) => h.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }
    
    if (universo) {
        resultado = resultado.filter((h) => h.universo.toLowerCase().includes(universo.toLowerCase())
        );
    }
    
    if (perigoso !== undefined) {
        resultado = resultado.filter((h) => h.perigoso === (perigoso === 'true'));
    }

    res.status(200).json({
        total: resultado.length,
        data: resultado,
    });
};

// POST /herois - Criar novo herói
const createViloes = (req, res) => {
    const { nome, identidadeSecreta, poder, objetivo, universo, perigoso } = req.body;

    // Validação de campos obrigatórios
    if (!nome || !universo) {
        return res.status(400).json({
            success: false,
            message: "Nome e universo são obrigatórios para um herói!",
        });
    }

    // Criar novo vilao
    const novoVilao = {
        id: viloes.length + 1,
        nome,
        identidadeSecreta: identidadeSecreta || "Secreta",
        poder: poder || "A ser descoberto",
        objetivo: objetivo || "Nenhum conhecido",
        universo,
        perigoso: perigoso !== undefined ? perigoso : true,
    };

    // Adicionar à lista de heróis
    viloes.push(novoVilao);

    res.status(201).json({
        success: true,
        message: "Novo Vilão cadastrado!",
        data: novoVilao,
    });
};

export { getAllViloes, createViloes };