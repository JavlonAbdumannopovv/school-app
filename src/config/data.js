export const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7TcnAQ1ffsQVQ88Fz-Wfedu1G7jAI0J2L0g&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8dskGIOA-i-gfcujyB4_ATkptpwfL6byLNQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKAldg00whlgebXOdnmPmHHsa9luUV_S-TCQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3IAww3y_qJcpkqxx4ODiQU4tAHh7HyKK_3w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VGApfrNSJM0gQVjslRFkXFkBUpt3zLuhEQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuT75uNlHsF1QKrd7OtN3Hgd03x2Jc_MTdTA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZC_95EVYM_FcC4b-LJg6XHL4p1E673azPuTMH92vOjnVJE0-dIyTszYt6teIip0PPcQs&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlot5hzNohlAcNOXzciUjqPOHhgU99aaHRpFWZFWfFegv2-eXqPsSJ8vyQR9eDjFkyC6w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBJN4PjwVGU98s7C3F3gQBct8VtqPdJVdkEg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2vbjn3ExSX5wA732-SKLHG4Ocy7cUYjl-CA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06QhKoBuD1DofkRhwjSYWndbX262fO7Fsjg&usqp=CAU",
];
export class Fan {
  constructor(nomi, turi) {
    this.id = `${Math.floor(Math.random() * 900000) + 100}`;
    this.nomi = nomi;
    this.turi = turi;
  }
}

export class Teacher {
  constructor(ism, familiya, fan, img) {
    this.id = `${Math.floor(Math.random() * 900000) + 100}`;
    this.ism = ism;
    this.familiya = familiya;
    this.fan = fan;
    this.img = images.find((c, i) => i === Number(img));
  }
}

export const oqituvchilar = [
  new Teacher("Ali", "Abdurahimov", "Algebra", "0"),
  new Teacher("Nigora", "Karimova", "Astronomiya", "1"),
  new Teacher("Bobur", "Hasanov", "Geometriya", "2"),
  new Teacher("Dilnoza", "Mirzayeva", "Zoologiya", "3"),
  new Teacher("Rustam", "Qosimov", "Ona tili", "4"),
  new Teacher("Durdona", "Xudoyberdiyeva", "Adabiyot", "5"),
  new Teacher("Jamshid", "Olimov", "Geografiya", "6"),
  new Teacher("Susan", "Smith", "Tarix", "7"),
  new Teacher("Shahzoda", "Mahmudova", "Kimyo", "8"),
  new Teacher("Jamol", "Kamolov", "Fizika", "9"),
  new Teacher("Abdulloh", "Mirzayev", "Biologiya", "10"),
];

export const fanlar = [
  new Fan("Algebra", "Aniq fan"),
  new Fan("Astronomiya", "Tabiiy fan"),
  new Fan("Geometriya", "Aniq fan"),
  new Fan("Ona tili", "Gumanitar fan"),
  new Fan("Zoologiya", "Tabiiy fan"),
  new Fan("Adabiyot", "Gumanitar fan"),
  new Fan("Geografiya", "Tabiiy fan"),
  new Fan("Tarix", "Gumanitar fan"),
  new Fan("Kimyo", "Tabiiy fan"),
  new Fan("Fizika", "Aniq fan"),
  new Fan("Biologiya", "Tabiiy fan"),
];

export class Talaba {
  constructor(ism, familiya, telefon, sinf, grantlar, gender, img) {
    this.ism = ism;
    this.familiya = familiya;
    this.id = `${this.ism.split("")[0]}${this.familiya.split("")[0]}${
      Math.floor(Math.random() * 9000) + 100
    }`;
    this.parol = `${this.ism.toLowerCase()}${
      Math.floor(Math.random() * 900) + 100
    }${this.familiya.toLowerCase()}`;
    this.username = this.ism + "_" + this.familiya;
    this.tugilgan_sana = "01.02.2005";
    this.telefon = telefon;
    this.sinf = sinf;
    this.hisob_holati = (Math.floor(Math.random() * 900) + 100) * 1000;
    this.grantlar = grantlar;
    this.gender = gender;
    this.email = `${this.ism.toLowerCase()}${this.familiya.toLowerCase()}@gmail.com`;
    this.about = `${this.ism}${this.familiya}, in full Cristiano Ronaldo dos Santos Aveiro 
    (born February 5, 1985, Funchal, Madeira, Portugal), Portuguese 
    football (soccer) forward who was one of the greatest players of his 
    generation. Ronaldo's father, José Dinis Aveiro, was the`;
    this.manzil = `Toshkent sh. Chilonzor t. Muqumiy 18A uy`;
    this.img = images.find((c, i) => i === Number(img));
  }
}

export const talabalar = [
  new Talaba("Jane", "Smith", "987-654-3210", "11th grade", 0, "female", "1"),
  new Talaba("Alex", "Johnson", "555-123-4567", "9th grade", 300, "male", "2"),
  new Talaba(
    "Emily",
    "Williams",
    "777-888-9999",
    "12th grade",
    700,
    "female",
    "3"
  ),
  new Talaba("Michael", "Brown", "111-222-3333", "10th grade", 0, "male", "4"),
  new Talaba(
    "Sophia",
    "Miller",
    "444-555-6666",
    "9th grade",
    200,
    "female",
    "5"
  ),
  new Talaba("John", "Doe", "123-456-7890", "10th grade", 500, "male", "0"),
  new Talaba("Daniel", "Jones", "666-777-8888", "11th grade", 400, "male", "6"),
  new Talaba("Olivia", "Davis", "999-000-1111", "12th grade", 0, "female", "7"),
  new Talaba(
    "Matthew",
    "Garcia",
    "222-333-4444",
    "10th grade",
    600,
    "male",
    "8"
  ),
  new Talaba("Ava", "Martinez", "888-999-0000", "9th grade", 0, "female", "9"),
  new Talaba(
    "Abdulloh",
    "Qodirov",
    "123-456-7890",
    "10-sinf",
    500,
    "male",
    "10"
  ),
  new Talaba(
    "Shahzoda",
    "Karimova",
    "987-654-3210",
    "11-sinf",
    0,
    "female",
    "0"
  ),
  new Talaba("Ravshan", "Olimov", "555-123-4567", "9-sinf", 300, "male", "1"),
  new Talaba(
    "Nigora",
    "Xolmirzaeva",
    "777-888-9999",
    "12-sinf",
    700,
    "female",
    "2"
  ),
  new Talaba("Olim", "Ahmadov", "111-222-3333", "10-sinf", 0, "male", "3"),
  new Talaba(
    "Zarnigor",
    "Xasanova",
    "444-555-6666",
    "9-sinf",
    200,
    "female",
    "4"
  ),
  new Talaba("Diyor", "Rahmonov", "666-777-8888", "11-sinf", 400, "male", "5"),
  new Talaba(
    "Gulnora",
    "Jalilova",
    "999-000-1111",
    "12-sinf",
    0,
    "female",
    "6"
  ),
  new Talaba("Sardor", "Ahmedov", "222-333-4444", "10-sinf", 600, "male", "7"),
  new Talaba("Dilnoza", "Yunusova", "888-999-0000", "9-sinf", 0, "female", "8"),
];

class Sinf {
  constructor(id, sinf, oquvchi_soni, guruh, sinf_rahbar, tashkil_qilindi) {
    this.id = id;
    this.sinf = sinf;
    this.oquvchi_soni = oquvchi_soni;
    this.guruh = guruh;
    this.sinf_rahbar = sinf_rahbar;
    this.tashkil_qilindi = tashkil_qilindi;
    this.fanlar = fanlar.map((item, i) => {
      return { fanId: item.id, oqituvchiId: oqituvchilar[i].id };
    });
    this.oquvchilar = talabalar.map((talaba) => talaba.id);
    this.xona = "101";
  }
}

export const sinflar = [
  new Sinf("213756", '7"A"', 10, "N1", `${oqituvchilar[0].id}`, "2022-09-01"),
  new Sinf("929257", '7"B"', 8, "N2", `${oqituvchilar[1].id}`, "2022-09-01"),
  new Sinf("838358", '8"A"', 30, "N1", `${oqituvchilar[2].id}`, "2022-09-01"),
  new Sinf("747459", '8"B"', 25, "N2", `${oqituvchilar[3].id}`, "2022-09-01"),
  new Sinf("656516", '8"V"', 28, "N1", `${oqituvchilar[4].id}`, "2022-09-01"),
  new Sinf("565626", '8"D"', 22, "N2", `${oqituvchilar[5].id}`, "2022-09-01"),
  new Sinf("474736", '9"A"', 20, "N1", `${oqituvchilar[6].id}`, "2022-09-01"),
  new Sinf("383846", '9"B"', 18, "N2", `${oqituvchilar[7].id}`, "2022-09-01"),
  new Sinf("292976", '9"V"', 15, "N1", `${oqituvchilar[8].id}`, "2022-09-01"),
  new Sinf("125186", '9"D"', 12, "N2", `${oqituvchilar[9].id}`, "2022-09-01"),
];
