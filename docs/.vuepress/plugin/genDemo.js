module.exports = (options, ctx) => {
  return {
    name: 'genDemo',
    async ready(){
      console.log(ctx.pages)
      
      
    }
  }
}