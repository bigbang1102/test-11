// ทอดลูกเต๋า 2 ลูก 1 ครั้ง ให้หาความน่าจะเป็น ที
// 1. ผลรวมของแต้มเป็น 10
// 2. ผลต่างของแต้มเป็น 2
const totalOutcomes = 6 * 6;

// จำนวนวิธีการที่ผลรวมของแต้มเป็น 10
const sum10Ways = [
    [4, 6],
    [5, 5],
    [6, 4]
].length;

// จำนวนวิธีการที่ผลต่างของแต้มเป็น 2
const diff2Ways = [
    [1, 3],
    [3, 1],
    [2, 4],
    [4, 2],
    [3, 5],
    [5, 3],
    [4, 6],
    [6, 4]
].length;

// คำนวณความน่าจะเป็น
const probabilitySum10 = sum10Ways / totalOutcomes;
const probabilityDiff2 = diff2Ways / totalOutcomes;

console.log(`ความน่าจะเป็นที่ผลรวมของแต้มเป็น 10 คือ ${probabilitySum10}`);
console.log(`ความน่าจะเป็นที่ผลต่างของแต้มเป็น 2 คือ ${probabilityDiff2}`);
