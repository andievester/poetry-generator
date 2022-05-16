import mongoose from 'mongoose';

const poemSchema = mongoose.Schema({
    title: String,
    author: Object,
    lines: [String],
    stanzas: [[String]],
});

const Poem = mongoose.model('Poem', poemSchema);

export default Poem;