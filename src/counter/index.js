const express = require('express');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3003;

const countersDir = './src/counters';

if (!fs.existsSync(countersDir)) {
    fs.mkdirSync(countersDir);
}

app.post('/:bookid/incr', (req, res) => {
    const bookId = req.params.bookid;
    const counterFile = `${countersDir}/${bookId}.json`;
    let count = 1;

    if (fs.existsSync(counterFile)) {
        const data = fs.readFileSync(counterFile, 'utf8');
        count = parseInt(data, 10);
        count++;
    }

    fs.writeFileSync(counterFile, count.toString());
    res.json({ count });
});

app.get('/:bookid', (req, res) => {
    const bookId = req.params.bookid;
    const counterFile = `${countersDir}/${bookId}.json`;
    let count = 1;

    if (fs.existsSync(counterFile)) {
        const data = fs.readFileSync(counterFile, 'utf8');
        count = parseInt(data, 10);
    }

    res.json({ count });
});

app.listen(PORT, () => {
    console.log(`Server listening port ${PORT}`);
});

