// ให้เขียนโปรแกรมโดยภาษาใดก็ได้ รับ Input เปˮนตัวเลข 1 ตัว แล้วแสดงเปˮนรูปสามเหลีˠยมกลับด้าน
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
function printInvertedTriangleWithSpaces(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += ' ';
        }
        for (let k = 0; k < (n - i); k++) {
            row += '* ';
        }
        console.log(row);
    }
}
readline.question('Enter number of rows: ', input => {
    let numRows = parseInt(input);

    if (isNaN(numRows) || numRows <= 0) {
        console.log('กรุณากรอกจำนวนแถวที่เป็นตัวเลขที่มากกว่า 0');
    } else {
        printInvertedTriangleWithSpaces(numRows);
    }
    readline.close();
});
