import { Web3 } from 'web3';
import ganache from 'ganache';
//const http = require('http');
import http from 'http';

// private RPC endpoint 
// provided by ganache
const TEST_ADDRES = "0x00f970F57Ca7a6972d71D645D0Ffc2A34c7ABa94"
const web3 = new Web3(ganache.provider());

const getGas = async () => {
    const server = await http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        let resvale;
        const gas = web3.eth.getGasPrice().then((value) => {
            resvale = value;
        });
        res.end(`Gas price: ${resvale}`);
    });
    await server.listen(3000, 'localhost', () => {
        console.log('Server running at http://localhost:3000/');
    });
}

getGas();
