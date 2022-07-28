import Scanner from './Scanner.js'
window.SSG_TemplateEngine = {
  render(templateStr,data){
    console.log('render函数被调用')
    console.log(123)
    var scanner = new Scanner(templateStr);
    var words  = scanner.scanUtil('{{')
    console.log(words)
    scanner.scan('{{')
    console.log('scanner.pos',scanner.pos)
  }
}