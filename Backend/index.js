
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
app.use(cors());

const Suspects = new mongoose.Schema(
    {
        name: String,
        photo: String,
        motive: String,
        weapon: String,
        clue1: String,
        clue2: String,
        clue3: String,
        clue4: String,
        clue5: String
    }
)
const Suspects1 = new mongoose.model('Suspects',Suspects);
 async function getClues() {
    //mongodb+srv://quincymalone101:Marshadow101@chocalatecluster.ba2dcss.mongodb.net/
   await mongoose.connect('mongodb+srv://quincymalone101:Marshadow101@chocalatecluster.ba2dcss.mongodb.net/CodeCrewClue');

   console.log(mongoose.Collection.name);
    const query = await Suspects1.findOne({name:"Shakyra"});
    console.log(query);
    clues[0] = query.clue1 
    clues[1] = query.clue2 
    clues[2] = query.clue3 
    clues[3] = query.clue4
    clues[4] = query.clue5 
    mongoose.disconnect();
}
const clues = [];
app.get('/api/clues', async (req, res) => {
    await getClues();
    res.json(clues);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
