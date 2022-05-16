import Poem from '../models/poemModel.js'

export const getPoems = async (req, res) => {
    try {
        const poems = await Poem.find();
        res.status(200).json(poems);
    } catch(err) {
        res.status(404).json({ message: err.message });
    }
}

export const createPoem = async (req, res) => {
    const poem = new Poem({
        title: req.body.title,
        author: req.body.author,
        lines: req.body.lines,
        stanzas: req.body.stanzas
    });

    try {
        const newPoem = await poem.save();
        res.status(201).json(newPoem);
    } catch(err) {
        res.status(404).json({ message: err.message });
    }
}


export const getPoem = async (req, res) => { 
    const { id } = req.params;

    try {
        const poem = await Poem.findById(id);
        
        res.status(200).json(poem);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}