module.exports = function check(str, bracketsConfig) {
    let configArray = {};
    bracketsConfig.forEach(bracket => {
        configArray[bracket[0]] = bracket[1];
    });

    str = str.split('');
    let i;

    do {
        str.some((bracket, index) => {
            if (configArray[bracket] == str[index + 1]) {
                i = index;
                return true;
            }

            i = -1;
        });

        if (i != -1) {
            str.splice(i, 2);
        }
    }
    while (i != -1 && str.length > 1);

    return str.length == 0;
}