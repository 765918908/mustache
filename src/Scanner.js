export default class Scanner {
  constructor(templateStr) {
    this.templateStr = templateStr
    console.log(templateStr)
    //指针
    this.pos = 0;
    //尾巴
    this.tail = templateStr
  }

  scan(tag) {
    if(this.tail.indexOf(tag)==0){
      this.pos += tag.length
      this.tail = this.templateStr.substring(this.pos)
    }
  }

  scanUtil(stopTag) {
    const pos_backup = this.pos
    while (this.tail.indexOf(stopTag) != 0) {
      this.pos++;
      this.tail = this.templateStr.substring(this.pos)
    }
    return this.templateStr.substring(pos_backup,this.pos)
  }
}