var e=`#include <Robot.h>

void setup() {
  Robot.begin();
}

void loop() {
  // อ่านเซนเซอร์เส้นด้วย Robot.onBlack(LINE_LEFT) และ Robot.onBlack(LINE_RIGHT)
}
`,t=`#include <Robot.h>

void setup() {
  Robot.begin();
  // ก้ามหนีบ: Robot.clawOpen(), Robot.clawClose()
  // แขน: Robot.armDown(), Robot.armUp()
  // ระยะข้างหน้า: Robot.distance() เป็นเซนติเมตร
}

void loop() {
}
`,n=`#include <Robot.h>

void setup() {
  Robot.begin();
}

void loop() {
  // เวทีสีดำ ขอบสีขาว: ถ้า !Robot.onBlack(LINE_CENTER) แปลว่าถึงขอบแล้ว
  // หาคู่แข่งด้วย Robot.distance()
}
`,r=`#include <Robot.h>

void setup() {
  Robot.begin();
}

void loop() {
  if (Gamepad.update()) {
    // Gamepad.axisY() ขึ้นลง, Gamepad.axisX() ซ้ายขวา ค่า -511 ถึง 512
  }
  delay(20);
}
`,i={x:-.65,y:-.2,heading:0},a=[{id:`line-1`,topic:`line`,level:1,title:`วงรีเส้นเรียบ`,goal:`เดินตามเส้นครบ 1 รอบ`,hint:`ถ้าเซนเซอร์ซ้ายเจอเส้น ให้เลี้ยวซ้าย ถ้าขวาเจอ ให้เลี้ยวขวา นอกนั้นเดินหน้า`,setup:{kind:`line`,track:`oval`},variants:[{startAt:.3},{startAt:.6,reverse:!0}],timeLimit:60,fastTime:18,mode:`auto`,starter:e},{id:`line-2`,topic:`line`,level:2,title:`สนามโค้ง`,goal:`เดินตามเส้นที่มีโค้งแคบครบ 1 รอบ`,hint:`โค้งแคบต้องเลี้ยวแรงขึ้น ลองให้ล้อด้านในถอยหลังเล็กน้อย`,setup:{kind:`line`,track:`curvy`},variants:[{startAt:.35},{startAt:.7,reverse:!0}],timeLimit:70,fastTime:25,mode:`auto`,starter:e},{id:`line-3`,topic:`line`,level:3,title:`เลขแปดมีทางตัด`,goal:`วิ่งเลขแปดครบ 1 รอบ ตรงทางตัดต้องวิ่งตรงไป ห้ามเลี้ยวเข้าเส้นอื่น`,hint:`ตอนผ่านทางตัด เซนเซอร์ทั้งซ้ายและขวาเจอสีดำพร้อมกัน ให้เดินหน้าตรง`,setup:{kind:`line`,track:`eight`},variants:[{startAt:.5},{startAt:.2,reverse:!0}],timeLimit:70,fastTime:25,mode:`auto`,starter:e},{id:`line-4`,topic:`line`,level:4,title:`เส้นขาด`,goal:`วิ่งครบรอบบนเส้นที่ขาดเป็นช่วงๆ`,hint:`ตอนเซนเซอร์ทุกตัวไม่เจอเส้น ให้เดินหน้าต่อสักครู่ ไม่ต้องหยุดหรือหมุนหา`,setup:{kind:`line`,track:`curvy`,gaps:!0},variants:[{startAt:.4},{startAt:.75,reverse:!0}],timeLimit:80,fastTime:28,mode:`auto`,starter:e},{id:`line-5`,topic:`line`,level:5,title:`จับเวลา`,goal:`วิ่งครบรอบสนามโค้งให้เร็วที่สุด ต้องไม่เกิน 22 วินาที`,hint:`เพิ่มความเร็วตอนเส้นตรง และลดเฉพาะตอนเลี้ยว ลองใช้เซนเซอร์กลางช่วยดูว่าอยู่บนเส้นไหม`,setup:{kind:`line`,track:`curvy`},variants:[{startAt:.5}],timeLimit:22,fastTime:17,mode:`auto`,starter:e},{id:`grip-1`,topic:`gripper`,level:1,title:`คีบกระป๋องตรงหน้า`,goal:`คีบกระป๋องข้างหน้า แล้วไปวางในวงสีเหลือง`,hint:`เปิดก้าม วางแขนลง เดินจนระยะข้างหน้าเหลือไม่กี่เซนติเมตร แล้วหนีบ ใช้ระยะถึงกำแพงบอกว่าถึงวงแล้ว`,setup:{kind:`gripper`,start:i,cans:[[-.15,-.2]],goals:[{x:.55,y:-.2,radius:.13}]},variants:[{cans:[[-.3,-.2]]},{cans:[[0,-.2]]}],timeLimit:40,fastTime:14,mode:`auto`,starter:t},{id:`grip-2`,topic:`gripper`,level:2,title:`เลี้ยวไปวาง`,goal:`คีบกระป๋อง แล้วเลี้ยวซ้ายไปวางในวงที่อยู่ด้านข้าง`,hint:`ลองหาว่าต้องหมุนกี่มิลลิวินาทีถึงได้ 90 องศา แล้วใช้ระยะถึงกำแพงบอกตำแหน่ง`,setup:{kind:`gripper`,start:i,cans:[[-.15,-.2]],goals:[{x:-.25,y:.3,radius:.2}]},variants:[{cans:[[-.25,-.2]]},{cans:[[-.05,-.2]]}],timeLimit:45,fastTime:16,mode:`auto`,starter:t},{id:`grip-3`,topic:`gripper`,level:3,title:`สองกระป๋อง`,goal:`นำกระป๋องทั้ง 2 ใบเข้าวงสีเหลือง`,hint:`หุ่นดันของได้ ไม่จำเป็นต้องคีบทุกใบ`,setup:{kind:`gripper`,start:i,cans:[[-.25,-.2],[.15,-.2]],goals:[{x:.72,y:-.2,radius:.18}]},variants:[{cans:[[-.3,-.2],[.05,-.2]]},{cans:[[-.15,-.2],[.25,-.2]]}],timeLimit:50,fastTime:18,mode:`auto`,starter:t},{id:`grip-4`,topic:`gripper`,level:4,title:`อ้อมสิ่งกีดขวาง`,goal:`คีบกระป๋อง แล้วอ้อมกล่องไม้ไปวางในวงสีเหลือง`,hint:`เลี้ยวซ้ายออกไปก่อน เดินขนาน แล้วเลี้ยวขวากลับเข้าหาวง ใช้ระยะข้างหน้าช่วยกะ`,setup:{kind:`gripper`,start:i,cans:[[-.25,-.2]],goals:[{x:.55,y:.2,radius:.15}],obstacles:[{x:.15,y:-.2,w:.08,h:.5}]},variants:[{cans:[[-.32,-.2]]},{cans:[[-.18,-.2]]}],timeLimit:60,fastTime:22,mode:`auto`,starter:t},{id:`grip-5`,topic:`gripper`,level:5,title:`บังคับจอยเก็บ 3 ใบ`,goal:`ใช้จอยเก็บกระป๋องทั้ง 3 ใบเข้าวงสีเหลือง ภายใน 90 วินาที`,hint:`ปุ่ม A หนีบ ปุ่ม B ปล่อย ปุ่ม Y ยกแขน ปุ่ม X วางแขน ลองเขียนโค้ดคุมจอยเองก่อน`,setup:{kind:`gripper`,start:i,cans:[[-.2,.3],[.1,-.35],[.3,.25]],goals:[{x:.6,y:0,radius:.18}]},variants:[],timeLimit:90,fastTime:45,mode:`live`,starter:r},{id:`sumo-1`,topic:`sumo`,level:1,title:`ดันคู่แข่งที่ยืนนิ่ง`,goal:`ดันคู่แข่งออกจากเวที โดยหุ่นของเราไม่ตก`,hint:`เดินหน้าไปเรื่อยๆ ก่อน แล้วค่อยเพิ่มการเช็กขอบเวที`,setup:{kind:`sumo`,start:{x:-.2,y:0,heading:0},opponent:`idle`,opponentStart:{x:.2,y:0,heading:Math.PI}},variants:[{opponentStart:{x:.18,y:.12,heading:Math.PI}},{opponentStart:{x:.22,y:-.12,heading:2.5}}],timeLimit:30,fastTime:6,mode:`auto`,starter:n},{id:`sumo-2`,topic:`sumo`,level:2,title:`คู่แข่งเดินไปมา`,goal:`ชนะคู่แข่งที่เดินสุ่มไปมาบนเวที`,hint:`หมุนหาคู่แข่งด้วยเซนเซอร์ระยะ เห็นแล้วพุ่ง และถอยเมื่อเจอขอบขาว`,setup:{kind:`sumo`,start:{x:-.2,y:0,heading:0},opponent:`patrol`,opponentStart:{x:.2,y:0,heading:Math.PI}},variants:[{opponentStart:{x:.15,y:.15,heading:2}},{opponentStart:{x:.2,y:-.1,heading:4}}],timeLimit:40,fastTime:12,mode:`auto`,starter:n},{id:`sumo-3`,topic:`sumo`,level:3,title:`คู่แข่งไล่ล่า`,goal:`ชนะคู่แข่งที่วิ่งเข้าหาเรา`,hint:`อย่าให้คู่แข่งดันเราจากด้านข้าง หันเข้าหาให้เร็วที่สุด`,setup:{kind:`sumo`,start:{x:-.2,y:0,heading:0},opponent:`hunter`,opponentStart:{x:.2,y:0,heading:Math.PI}},variants:[{opponentStart:{x:.1,y:.2,heading:3.5}},{opponentStart:{x:.2,y:-.15,heading:2.2}}],timeLimit:40,fastTime:8,mode:`auto`,starter:n},{id:`sumo-4`,topic:`sumo`,level:4,title:`บังคับจอยสู้ไล่ล่า`,goal:`ใช้จอยบังคับหุ่นสู้คู่แข่งไล่ล่าให้ชนะ`,hint:`เขียนโค้ดคุมจอยเอง ให้หุ่นหมุนได้เร็วและพุ่งได้แรง`,setup:{kind:`sumo`,start:{x:-.2,y:0,heading:0},opponent:`hunter`,opponentStart:{x:.2,y:0,heading:Math.PI}},variants:[],timeLimit:60,fastTime:10,mode:`live`,starter:r}];function o(e){return a.find(t=>t.id===e)}var s={line:a.filter(e=>e.topic===`line`),gripper:a.filter(e=>e.topic===`gripper`),sumo:a.filter(e=>e.topic===`sumo`)};function c(e){return[e.setup,...e.variants.map(t=>({...e.setup,...t}))]}function l(e,t){return t[0]?.passed?t.every(e=>e.passed)?t.every(t=>t.time<=e.fastTime)?3:2:1:0}var u=`robot-sim-theme`,d=new Set,f=matchMedia(`(prefers-color-scheme: dark)`);function p(){try{let e=localStorage.getItem(u);return e===`light`||e===`dark`?e:null}catch{return null}}function m(){return p()??(f.matches?`dark`:`light`)}function h(){let e=m();document.documentElement.dataset.theme=e;for(let t of d)t(e)}function g(){try{localStorage.setItem(u,m()===`dark`?`light`:`dark`)}catch{document.documentElement.dataset.theme=m()===`dark`?`light`:`dark`;return}h()}function _(e){return d.add(e),()=>d.delete(e)}f.addEventListener(`change`,h),h();export{s as a,l as c,a as i,_ as n,c as o,g as r,o as s,m as t};