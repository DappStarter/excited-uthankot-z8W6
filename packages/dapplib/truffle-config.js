require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth still minimum gesture infant swift trend'; 
let testAccounts = [
"0xf7cdde0606b805192dad5f9dd6a26d22fccf529a79c2cae493c58766270728b1",
"0x1d497efb75e798aeed81d0fb920893c22a99acd371073cc6da8c4a0da8502cbb",
"0xf0a3bfaee8b398381f7a336bed32e466e3c9f115830618608d74259cea66c149",
"0xb425d9e487eee22efc5092264718f3f4f5279cc03273b99904b043ff25ca9c88",
"0x94ef4f03cf8cab0450261ec343ef2c0ef23e300ff5c83410cd7bc1054f302dcf",
"0x43afeadb45ad7b57712f5d763f2fae3a7602340ba53d81dd08dd8e86c157ce66",
"0x38813ab8c11c6a4951099ce19c477a694d1974090dcac32e8b7874e820af58a0",
"0x70380986119fc2d7e5f820ca0ccde06057543b0bd8f05bf56a2e73fd94fac347",
"0x8794f5762bc6af683581e1976e0aad5800e0e55b7a4dbbc903294574bf9a41f2",
"0xa7ff25198fef02455bb0a30ed38671db53ba2fad8f51baa5d1be2d35d83cdead"
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

