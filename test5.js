// บวกเลขด้วยวิธีการใดก็ได้ โดยใช้เฉพาะเลข 8 ให้ได้คําตอบเท่ากับ 1,000
const target = 1000;

const number = 8;

const count = target / number;

// สร้างอาเรย์ที่มีเลข 8 จำนวน count ตัว
const resultArray = Array(count).fill(number);

const sum = resultArray.reduce((acc, curr) => acc + curr, 0);

console.log(`ใช้เลข ${number} จำนวน ${count} ตัวเพื่อให้ได้ ${sum}`);
