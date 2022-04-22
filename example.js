const Sweeper = require('./src/sweeper')

const n = 1
const bip32 = 'tprv8ZgxMBicQKsPf1tAEtRgCgBY42KHtHtrQep8roxcrmE4U99zsVEw22oN2nPS55W9cu6Un94k1jJXb49XHUJLxXDKbdExnwfDTRfyYyoGepr'
const privkey2 = 'cNxjRY2T1MXp1sBuw9gxJrSjMmG2XXajAPKX2gVhAF3zbbL2NRi1'
const toAddr = 'mkHS9ne12qx9pS9VojpwU5xtRd4T7X7ZUt'
const network = 'BTCTEST'
const derivationPath = 'm/i/0'

if (!n || !bip32 || !privkey2 || !toAddr || !network || !derivationPath) {
  console.log('One or more required arguments are missing')
  process.exit(0)
}

const sweep = new Sweeper(network, bip32, privkey2, toAddr, n, derivationPath)

Sweep()

async function Sweep () {
  try {
    await sweep.begin()
  } catch (err) {
    console.log(err)
  }
}
