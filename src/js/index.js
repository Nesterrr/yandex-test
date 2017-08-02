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
    let result = [];
    domains.forEach((domain) => {
        let rgxp = new RegExp('[a-z]{1,50}' + '@' + domain);
        let sub = str.match(rgxp)
        if(sub != null) {
            result.push(sub);
        }
    });
    return result.length === 0 ? false : true;
}

MyForm.prototype.phoneSum = (str) => {
    var result = 0;
    function isNum(num) {
        if (Number.isInteger(num)) {
            return num;
        }
    }
    str.split('').map((i) => {
        return parseInt(i);
    }).filter(isNum).forEach((n) => {
        result += n;
    });
    return result > 47 ? false : true;
}
