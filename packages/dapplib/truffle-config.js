require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind essay imitate private forget sentence'; 
let testAccounts = [
"0x37d3a9dc417ca231f7a9800f20dd07eece8a9b483deb1ec05f15fd43ef1d192a",
"0x2b2b016146d0e2309f34335ff9b84a32fd29bf19876eb7651ccfc12c57dfc10b",
"0xfed31c015c690cf83c37eb67a981b260a61f456661e3495934dbdd79f2dc8209",
"0xb86aea4158ae8e8e3b467258f04d508b7eac2557710de3432d19e318c2e4bc19",
"0xb8aea243b2b42e4a2489f8cff1045a65568573464e460522382482620f2f3347",
"0x73126d2f20bb947dbc792467567e535cb88eeb1f1146d102da53862f594ed3f9",
"0x22e4447dd1c98bcaebb63604c954ffad9967523a4d9918cbb8d1a966815a5d63",
"0x5c9e0c0704c86aaf7d6986bd87263c77b0260f9a8f6b1a70d97e10f44c1bb368",
"0x2bb4bdc00d40d3469eb8719b9da6ebe0c2f82a18556bb5ef51566d7140db5ab2",
"0x229d5b7f4500dbeae0f8d6a84017b4d7015a167090efcf637b3f35a048849ec2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

