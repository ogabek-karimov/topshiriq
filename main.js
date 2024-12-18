let prosta = [];

while (true) {

  let user = prompt("Kiriting (masalan: add, Ali yoki del, Ali yoki stop):");


  if (user === "stop") {
    console.log("Oxirgi massiv:", prosta);
    break;
  }


  if (user) {
    let qism = user.split(","); 
    let harakat = qism[0].trim();
    let qiymat = qism[1] ? qism[1].trim() : null;

    if (harakat === "add" && qiymat) {
      
      prosta.push(qiymat);
      console.log(`${qiymat} va Ivan massivga qo'shildi.`);
    } else if (harakat === "del" && qiymat) {
      
      let index = prosta.indexOf(qiymat);
      if (index !== -1) {
        prosta.splice(index, 1);
        console.log(`${qiymat} massivdan o'chirildi.`);
      } else {
        console.log(`${qiymat} massivda topilmadi.`);
      }
    } else {
      console.log("Noto'g'ri komanda! Format: add, Ali yoki del, Ali yoki stop.");
    }
  }
}
