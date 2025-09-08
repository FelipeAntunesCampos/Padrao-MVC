import dados from "../models/dados.js";
const { herois } = dados;

// GET /herois - Listar heróis com filtros
const getAllHerois = (req, res) => {
    const { nome, universo, ativo } = req.query;
    
    let resultado = herois;

    if (nome) {
        resultado = resultado.filter((h) => h.nome.toLowerCase().includes(nome.toLowerCase())
        );
    }
    
    if (universo) {
        resultado = resultado.filter((h) => h.universo.toLowerCase().includes(universo.toLowerCase())
        );
    }
    
    if (ativo !== undefined) {
        resultado = resultado.filter((h) => h.ativo === (ativo === 'true'));
    }

    res.status(200).json({
        total: resultado.length,
        data: resultado,
    });
};

// POST /herois - Criar novo herói
const createHeroi = (req, res) => {
    const { nome, identidadeSecreta, poder, fraqueza, universo, ativo } = req.body;

    // Validação de campos obrigatórios
    if (!nome || !universo) {
        return res.status(400).json({
            success: false,
            message: "Nome e universo são obrigatórios para um herói!",
        });
    }

    // Criar novo herói
    const novoHeroi = {
        id: herois.length + 1,
        nome,
        identidadeSecreta: identidadeSecreta || "Secreta",
        poder: poder || "A ser descoberto",
        fraqueza: fraqueza || "Nenhuma conhecida",
        universo,
        ativo: ativo !== undefined ? ativo : true,
    };

    // Adicionar à lista de heróis
    herois.push(novoHeroi);

    res.status(201).json({
        success: true,
        message: "Novo herói cadastrado!",
        data: novoHeroi,
    });
};

// Exportar as funções
export { getAllHerois, createHeroi };