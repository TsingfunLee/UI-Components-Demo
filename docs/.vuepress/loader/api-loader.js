const {parser} = require('@vuese/parser')
const { Render } = require('@vuese/markdown-render')
const path = require('path')
const fs = require('fs')

module.exports = function(source){
  if(/\r\n## API/.test(source)){
    let name = source.match(/# (?<name>\w+)\r\n/).groups.name
    let filePath = path.resolve(__dirname, `../../../src/components/${name}/${name}.vue`)

    if(fs.existsSync(filePath)){
      let vueString = fs.readFileSync(filePath, 'utf-8')
      let parserResult = parser(vueString)
      let mdResult = new Render(parserResult).renderMarkdown()
      let content = mdResult.content
      content = content.replace(/(# \w+)\r?\n+/, '')
      content = content.replace(/##/g, '###')

      return source + '\r\n'  + content
    }else{
      return source
    }  
  }else{
    return source
  }
}