
// var open = "[{("

function isBalanced(input) {
    var arr = [];
    for (var i = 0; i < input.length; i++) {
        var value = input[i]

        if (value == "[" || value == "{" || value == "(")
            arr.push(value);




        var check;
        switch (value) {

            case "}":
                check = arr.pop()
                if (check == "(" || check == "[")
                    return false
                break;
            case ")":
                check = arr.pop()
                if (check == "{" || check == "[")
                    return false
                break;
            case "]":
                check = arr.pop()
                if (check == "(" || check == "{")
                    return "not balance"
                break;

        }
    }


    if (arr.length) {
        return "Not Balance"
    } else {
        return "Balance"
    }
}

console.log(isBalanced("[{()}]"))
