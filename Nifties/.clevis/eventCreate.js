//
// usage: node contract Create Nifties
//
module.exports = (contract,params,args)=>{
  return contract.getPastEvents('Create', {
      fromBlock: params.blockNumber,
      toBlock: 'latest'
  })
}
