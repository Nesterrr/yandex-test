var str = ['Иванов Иван Иванович',
    'ИвановИванИванович',
    'Иванов Иван',
    'Иванов 4 3',
    'Ив авы выв',
    '   ',
    ' ',
    'И  ',
    ' Иванов Иван Иванович'];

var domains = ['ya.ru', 'yandex.ru',
               'yandex.ua', 'yandex.by',
               'yandex.kz', 'yandex.com'
              ];
var masseges = {
    domain: 'domain not correct: domain must be one of list: ' + domains
}

function MyForm() {

}

MyForm.prototype.isEmpty = (str) => {
    return str === '' || str === null ? true : false;
}

MyForm.prototype.threeWords = (str) => {
    let result = str.match(/[а-я]{3,40}(\s)[а-я]{3,40}(\s)[а-я]{3,40}/ig);
    if(result) {
        return result[0].split(' ').length
    } else {
        return 'msg';
    }
}

MyForm.prototype.extChar = (str) => {
    return str.search(/(^[a-я])(^[a-z])/ig);
}

MyForm.prototype.domain = (str) => {

}