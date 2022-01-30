function getValue(val) {
  document.getElementById("result").value += val;
}

function solve() {
  let textarea = document.getElementById("result").value;
  let anwserr = eval(textarea);
  document.getElementById("result").value = anwserr;
}

function clearAll() {
  document.getElementById("result").value = "";
}

function square() {
  let val = document.getElementById("result").value;
  let sqr = Math.pow(val, 2);
  document.getElementById("result").value = sqr;
}

function cube() {
  let val = document.getElementById("result").value;
  let cube = Math.pow(val, 3);
  document.getElementById("result").value = cube;
}

function squareRoot() {
  let val = document.getElementById("result").value;
  let sqrRoot = Math.sqrt(val);
  document.getElementById("result").value = sqrRoot;
}

function sinValue() {
  let val = document.getElementById("result").value;
  let sin = Math.sin((val * Math.PI) / 180);
  document.getElementById("result").value = sin;
}

function cosValue() {
  let val = document.getElementById("result").value;
  let cos = Math.cos((val * Math.PI) / 180);
  document.getElementById("result").value = cos;
}

function tanValue() {
  let val = document.getElementById("result").value;
  let tan = Math.tan((val * Math.PI) / 180);
  document.getElementById("result").value = tan;
}

function logValue(){
    let val = document.getElementById("result").value;
  let log = Math.log(val);
  document.getElementById("result").value = log;
}

function logValue(){
    let val = document.getElementById("result").value;
  let exp = Math.exp(val);
  document.getElementById("result").value = exp;
}



function standardCalc() {
  document.getElementById("standard").innerHTML = ` <table class="list">

    <thead>
        <tr>
            <td colspan="4"><input type="text" id="result"></td>
        </tr>
        <tr>
            <th colspan="3"><input type="button" value="C" onclick="clearAll()"> </th>

            <td><input type="button" value="/" onclick="getValue('/')" /> </td>
        </tr>
        <tr>
            <td><input type="button" value="7" onclick="getValue('7')" /> </td>
            <td><input type="button" value="8" onclick="getValue('8')" /> </td>
            <td><input type="button" value="9" onclick="getValue('9')" /> </td>
            <td><input type="button" value="*" onclick="getValue('*')"></td>
        </tr>
        <tr>
            <td><input type="button" value="4" onclick="getValue('4')" /> </td>
            <td><input type="button" value="5" onclick="getValue('5')" /> </td>
            <td><input type="button" value="6" onclick="getValue('6')" /> </td>
            <td><input type="button" value="-" onclick="getValue('-')"></td>
        </tr>
        <tr>
            <td><input type="button" value="1" onclick="getValue('1')" /> </td>
            <td><input type="button" value="2" onclick="getValue('2')" /> </td>
            <td><input type="button" value="3" onclick="getValue('3')" /> </td>
            <td><input type="button" value="+" onclick="getValue('+')"></td>
        </tr>

        <tr>
            <td><input type="button" value="+-" /> </td>
            <td><input type="button" value="0" onclick="getValue('0')" /> </td>
            <td><input type="button" value="." onclick="getValue('.')" /> </td>
            <td><input type="button" value="=" onclick="solve()"></td>
        </tr>



    </thead>
</table>`;
}

function scientificCalc() {
  document.getElementById("scientific").innerHTML = `
    <table class="list">

    <thead>
        <tr>
            <td colspan="4"><input type="text" id="result"></td>
        </tr>
        <tr>
            <th colspan="4"><input type="button" value="C" onclick="clearAll()"> </th>
        </tr>
        <tr>
            <td><input type="button" value="7" onclick="getValue('7')" /> </td>
            <td><input type="button" value="8" onclick="getValue('8')" /> </td>
            <td><input type="button" value="9" onclick="getValue('9')" /> </td>
           
        </tr>
        <tr>
            <td><input type="button" value="4" onclick="getValue('4')" /> </td>
            <td><input type="button" value="5" onclick="getValue('5')" /> </td>
            <td><input type="button" value="6" onclick="getValue('6')" /> </td>
           
        </tr>
        <tr>
            <td><input type="button" value="1" onclick="getValue('1')" /> </td>
            <td><input type="button" value="2" onclick="getValue('2')" /> </td>
            <td><input type="button" value="3" onclick="getValue('3')" /> </td>
           
        </tr>

        <tr>
           
            <td><input type="button" value="0" onclick="getValue('0')" /> </td>
            <td><input type="button" value="." onclick="getValue('.')" /> </td>
            <td><input type="button" value="=" onclick="solve()"></td>
        </tr>
        <tr>
        <td><input type="button" value="Square" onclick="square()" /> </td>
        <td><input type="button" value="Cube" onclick="cube()" /> </td>
        <td><input type="button" value="square Root" onclick="squareRoot()" /> </td>

    </tr>
    <tr>
        <td><input type="button" value="sinValue" onclick="sinValue()" /> </td>
        <td><input type="button" value="cosValue" onclick="cosValue()" /> </td>
        <td><input type="button" value="tanValue" onclick="tanValue()" /> </td>

    </tr>

    <tr>
        <td><input type="button" value="logValue" onclick="logValue()" /> </td>
        <td><input type="button" value="expValue" onclick="expValue()" /> </td>
       

    </tr>


    </thead>
</table>`;
}
