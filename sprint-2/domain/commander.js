class Commander {
  constructor(command) {
    this.command = command;
  }

  parseCommand() {
    const parsedCommandArray = this.command.split(" ");
    const option = parsedCommandArray[0];
    const operateElements = parsedCommandArray.slice(1);

    this.option = option;
    this.operateElements = operateElements;
  }

  giveCallBackFuncAndOperateElementsByOption() {
    if (this.option === "add") {
      return [this.add, this.convertStringElementToNumber()];
    }
    if (this.option === "count") {
      return [this.count, this.operateElements];
    }
  }

  convertStringElementToNumber() {
    return this.operateElements.map((e) => Number(e));
  }

  count() {}
  add(acc, cur) {
    return acc + cur;
  }
}
module.exports = Commander;
