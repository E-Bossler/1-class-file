const express = require('express');

const app = express();
const port = 3000;


const path = require('path');

// const babyoda = {
//     name: 'Baby Yoda',
//     role: 'adorable',
//     age: 50,
//     forcePoints: 5000
// };

// const babydarthmaul = {
//     name: 'Baby Maul',
//     role: 'not cute',
//     age: 2,
//     forcePoints: 56
// };



// app.get('/baby-yoda', (req,res) => {
//     res.json(babYoda);
// });

// app.get('/baby-darth-maul', (req,res) => {
//     res.json(darthMaul);
// });

const characters = [
    {
        route: 'baby-yoda',
        name: 'Baby Yoda',
        role: 'adorable',
        age: 50,
        forcePoints: 5000
    },
    {
        route: 'baby-darth-maul',
        name: 'Baby Darth Maul',
        role: 'not cute',
        age: 2,
        forcePoints: 56
    },
    {
        route: 'baby-luke-skywalker',
        name: 'Baby Luke Skywalker',
        role: 'orpha',
        age: '5 minutes',
        forcePoints: 17
    },
    {
        route: 'baby-jar-jar-binks',
        name: 'Baby Jar Jar Binks',
        role: 'the idiot',
        age: 3,
        forcePoints: -4,
    }
];

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/api/characters/:character',(req,res) => {
    console.log(req.params.character);
    for (let i=0; i< characters.length; i++) {
        if(req.params.character === characters[i].route) {
            return res.json(characters[i]);
        }
    };
    return res.status(404).send('No character, our friends do not like you and we do not like you either.');
});

app.post('/api/characters', (req,res) => {
    const newCharacter = req.body;
    console.log(newCharacter);
    characters.push(newCharacter);
    res.json(newCharacter);
});

app.get('/api/characters', (req,res) => {
    res.json(characters);
});

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'view.html'));
});

app.listen(port, () => console.log(`app is running on port ${port}`));

