// สํารวจนักเรียน 40 คน พบว่าเล่นฟุตบอล 18 คน เล่นบาสเก็ตบอล 15 คน และไม่เล่นทˣังฟุตบอลและ
// บาสเก็ตบอล 12 คน ถ้าสุม่ นักเรียน 1 คน จงหาความน่าจะเปˮนทีˠนักเรียนคนนีˣจะเล่นบาสเก็ตบอล
// แต่ไมเ่ ล่นฟุตบอล พร้อมแสดงวิธีคิดด้วยแผนภาพเวนน์-ออยเลอร์
const Students = 40;
const football = 18;
const basketball = 15;
const Sport = 12;

// คำนวณจำนวนที่เล่นฟุตบอลหรือบาสเก็ตบอล (หรือทั้งสองอย่าง)
const eitherSport = Students - Sport;

// คำนวณจำนวนที่เล่นทั้งสองอย่าง
const bothSports = football + basketball - eitherSport;

// คำนวณจำนวนที่เล่นบาสเก็ตบอลแต่ไม่เล่นฟุตบอล
const basketballOnly = basketball - bothSports;

// คำนวณความน่าจะเป็น
const probability = basketballOnly / Students;

console.log(`ความน่าจะเป็นที่นักเรียนคนหนึ่งจะเล่นบาสเก็ตบอลแต่ไม่เล่นฟุตบอลคือ ${probability}`);
