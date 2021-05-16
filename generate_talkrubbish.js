function generateTalkrubbish (option) { 

    const task = {
        engineer: ['加個按鈕','加新功能','切個版', '改一點 code'],
        designer: ['畫一張圖', '改個 logo','順便幫忙設計一下','隨便換個設計'],
        entrepreneur: ['週末加班', '要能賺錢','想個 business model','找 VC 募錢']
    }
    const phrase = ['很簡單','很容易','很快','很正常']
    const optionlength = Object.keys(task).length

    function randomNumber (task) {     
        const index = Math.floor( Math.random() * optionlength )
        return index
    }
    
    let contentHTML = ''
    console.log(option)

    switch (option.job) {
        case 'engineer': 
            contentHTML += `
            身為一個工程師,${task[option.job][randomNumber()]},${phrase[randomNumber()]}吧！
            ` 
            break;
        case 'designer':
            contentHTML += `
            身為一個設計師,${task[option.job][randomNumber()]},${phrase[randomNumber()]}吧！
            ` 
            break;
        case 'entrepreneur':
             contentHTML += `
            身為一個創業家,${task[option.job][randomNumber()]},${phrase[randomNumber()]}吧！
            ` 
            break;
    }
    console.log(contentHTML)
    return contentHTML
}

module.exports = generateTalkrubbish