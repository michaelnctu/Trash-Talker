//Random index generator
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}


function trashGen(target) {

  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

  }

  const phrase = ['很簡單', '很容易', '很快', '很正常']


  let targetTask = []
  let targetName = ''
  let trashy = '' //幹話
  let phraseSelect = sample(phrase)

  if (target === 'engineer') {
    targetTask = sample(task.engineer)  //return engineer的task 
    targetName = '工程師'
  }

  if (target === 'designer') {
    targetTask = sample(task.designer)
    targetName = '設計師'
  }

  if (target === 'entrepreneur') {
    targetTask = sample(task.entrepreneur)
    targetName = '創業家'
  }

  if (targetTask.length === 0) {
    return '請選出適當人選接受幹話'
  }


  trashy = `身為一個 ${targetName} ${targetTask} ${phraseSelect} 吧!`

  return trashy

}

//export generatePassword function for other files to use
module.exports = trashGen

