// Step 1: define the web scraper

const cheerio = require('cheerio')

let stockTicker = 'mrna'
let type = 'history'

async function getStockChartData(ticker) {
    try {
        // Step 1A: Fetch the page html
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${ticker}?interval=1d&range=5d`;
        const res = await fetch(url);
        const data = await res.json();
        const closePrices = data.chart.result[0].indicators.quote[0].close;
        return closePrices;

    } catch (err) {
        console.log(`Error fetching stock data for ${ticker}:`, err.message)
        return []
    }
}

function getPrices(cher) {
    const prices = cher('td:nth-child(6)').get().map((current_value) => {
        return cher(current_value).text()
    })
    return prices
}



// Step 2: Initialize server that serves up an html file that the user can play with

const express = require('express')
const app = express()
const port = 8383

// middleware

app.use(express.json())
app.use(require('cors')())
app.use(express.static('public'))

app.listen(port, () => {console.log(`Server has started on port: ${port}`)})

// Step 3: Define api endpoints to access stock data (and call webscraper)

app.post('/api', async (req, res) => {
    const { stock_ticker: ticker } = req.body;

    console.log("Received POST request with ticker:", ticker); 

    if (!ticker) {
        return res.status(400).send({ message: 'No stock ticker provided' });
    }

    const prices = await getStockChartData(ticker);

    console.log("Returned prices:", prices); 

    res.status(200).send({ message: 'successful', data: prices });
});
