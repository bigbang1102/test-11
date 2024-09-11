// ตะกร้าใบหนˠึงมีส้ม มังคุด และมะม่วงรวมกัน 10 ลูก โดยทีˠจํานวนส้มเปˮนสองเท่าของจํานวนมังคุด และมี
// มะมว่ ง 1 ลูก โดยทˠีผลไม้ทุกลูกแตกต่างกัน ถ้าหยิบผลไม้อย่างไม่เจาะจงจากตะกร้าใบนีˣจํานวน 3 ลูก
// จงหาความนา่ จะเปˮนทˠีจะหยิบได้ผลไม้ชนิดละ 1 ลูก
// ข้อมูล
// ฟังก์ชันคำนวณคอมบิเนชัน
function combinations(n, k) {
    if (k > n) return 0;
    if (k === 0 || k === n) return 1;
    k = Math.min(k, n - k); // ใช้คุณสมบัติของคอมบิเนชัน
    let c = 1;
    for (let i = 0; i < k; i++) {
        c = c * (n - i) / (i + 1);
    }
    return c;
}

const totalFruits = 10;
const oranges = 6;
const mangosteen = 3;
const mango = 1;

// คำนวณจำนวนวิธีการหยิบ 3 ลูกจากทั้งหมด 10 ลูก
const totalWays = combinations(totalFruits, 3);

const waysSpecific = oranges * mangosteen * mango;

const probability = waysSpecific / totalWays;

console.log(`ความน่าจะเป็นที่หยิบได้ผลไม้ชนิดละ 1 ลูกคือ ${probability.toFixed(2)}`);
