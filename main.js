var result1 = ""
var result2 = ""
var start = false
const display = (val) => {
    

    if (val >= 0 && val <= 9) {
        if (start) {
            document.getElementById('result').value = ""
            start = false
        }
        document.getElementById("result").value+=val
    }else if (val == '.') {
        document.getElementById("result").value+=val
    }else {
        if (val == '+' || val == '-' || val == '*' || val =='%' || val =='/') {
            result1 = document.getElementById('result').value+= " " + val + " "
            document.getElementById("result").value = ""
        }else if (val == '=') {
            result1 += document.getElementById('result').value
            result2 = eval(result1)
            document.getElementById("result").value = result2
            result1 = ''
            start = true
        }
    }
}

const clr = (val) => {
    if(val == 'c') {
        document.getElementById("result").value = "" 
        result1 = ""
    } else if (val == 'ce') {
        document.getElementById("result").value = "" 
    } else if (val == 'backspace') {
        backspace()
    }

}

const backspace = () => {
    let str = document.getElementById("result").value
    str = str.substring(0, str.length - 1)
    document.getElementById("result").value = str
}

