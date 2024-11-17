const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    const name = "John"
    res.render('index.hbs', { name })
})

const PORT = process.env.PORT || 3000; // Railway տրամադրած PORT
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
