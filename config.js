require('dotenv').config()

module.exports = {
  deployments: {
    netId1: {
      eth: {
        instanceAddress: {
          '0.1': undefined,
          '1': undefined,
          '10': undefined,
          '100': undefined
        },
        symbol: 'ETH',
        decimals: 18
      },
      dai: {
        instanceAddress: {
          '100': undefined,
          '1000': undefined,
          '10000': undefined,
          '100000': undefined
        },
        tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        symbol: 'DAI',
        decimals: 18
      },
    },
    netId42: {
      eth: {
        instanceAddress: {
          '0.01' : '0x449EfDAdB9Dd5143a429A661c9161b01eDdaD81b',
          '0.1': '0x18728Ed74D131598392eD76d9DadF2210E377a18',
          '1': undefined,
          '10': undefined,
          '100': undefined
        },
        symbol: 'ETH',
        decimals: 18
      },
      dai: {
        instanceAddress: {
          '100': undefined,
          '1000': undefined,
          '10000': undefined,
          '100000': undefined
        },
        tokenAddress: '0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa',
        symbol: 'DAI',
        decimals: 18
      },
    }
  }
}
