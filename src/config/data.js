import shortid from "shortid";

export class Fan {
  constructor(nomi, turi) {
    this.id = shortid.generate();
    this.nomi = nomi;
    this.turi = turi;
  }
}

export class Teacher {
  constructor(ism, familiya, fan, img) {
    this.id = shortid.generate();
    this.ism = ism;
    this.familiya = familiya;
    this.fan = fan;
    this.img = img;
  }
}

export const oqituvchilar = [
  new Teacher("Ali", "Abdurahimov", "Algebra", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqO-txCm-Rzy68gIiY3qUj8bmwDuBH0ZMJog&usqp=CAU"),
  new Teacher("Nigora", "Karimova", "Astronomiya", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjmV54aXl_GNhRXRN8CH2mogyDeJNsm21rg&usqp=CAU"),
  new Teacher("Bobur", "Hasanov", "Geometriya", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRetvZhGYWBpAUVj20J7-dW86bzlC6-tsCzbw&usqp=CAU"),
  new Teacher("Dilnoza", "Mirzayeva", "Zoologiya", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1hLsdU7ZXFcVNwbM05eAg3FMl5rb6WTF8Q&usqp=CAU"),
  new Teacher("Rustam", "Qosimov", "Ona tili", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVqcxq4nNUutW5_irHhaGtW7WXrPYyGfHNPg&usqp=CAU"),
  new Teacher("Durdona", "Xudoyberdiyeva", "Adabiyot", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHVK7-51tougEWwCU9Z-CYICiqn95AijGXfrnQ4TW0WXeA04MMY97uIS6n7BYbIyFfmdY&usqp=CAU"),
  new Teacher("Jamshid", "Olimov", "Geografiya", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQW1l04qYkF23D4c2jpMXwQFe94u763E_r6f4rhTWFiowVJbLqETHIsJJtLYci7TftYzU&usqp=CAU"),
  new Teacher("Susan", "Smith", "Tarix", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlkRl5X8HYaUssIz-r_b7RGHdsreKsYJeTNQeLqWgpa-E05GBe15DgoQb77RULm3bI_PU&usqp=CAU"),
  new Teacher("Shahzoda", "Mahmudova", "Kimyo", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yXFQtWmuETdjgYyBo0eBq18Pe3pFl4n8p0bpBogkDLtZvtr2MmuZREyzuj-HoVABFl0&usqp=CAU"),
  new Teacher("Jamol", "Kamolov", "Fizika", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSifbdEoWTJsk0NcIZVP9Y8UcDqRJOG4iwEkA&usqp=CAU"),
  new Teacher("Abdulloh", "Mirzayev", "Biologiya", "https://i.pinimg.com/736x/23/08/88/230888e8b8118b9a655c4b7939273a36.jpg"),
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
  constructor(id, ism, familiya, telefon, sinf, grantlar, gender, img) {
    this.id = id;
    this.ism = ism;
    this.familiya = familiya;
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
    this.img = img;
  }
}

export const talabalar = [
  new Talaba("1", "Jane", "Smith", "987-654-3210", "11th grade", 0, "female", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8-KCa94PI5XvKFs1aocevP6sY1dkCmKkRQw&usqp=CAU"),
  new Talaba("2", "Alex", "Johnson", "555-123-4567", "9th grade", 300, "male", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAPOb2o1pX05ha7kDRfEqFmv1Jz_3DQWZF1w&usqp=CAU"),
  new Talaba("3", 
    "Emily",
    "Williams",
    "777-888-9999",
    "12th grade",
    700,
    "female",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvcx-ca5PQUug9vqndVgVN_-36zMtnIpQtsQ&usqp=CAU"
  ),
  new Talaba("4", "Michael", "Brown", "111-222-3333", "10th grade", 0, "male", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNAIF6CJb8u4m-ec70oauZhij28AOFX7FvGE3JdWV9lNvUZ1loYVFeIXq9xw8h-51esp8&usqp=CAU"),
  new Talaba("5", 
    "Sophia",
    "Miller",
    "444-555-6666",
    "9th grade",
    200,
    "female",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTWVDpq7E3P-K1rzDPY9M6qhRXvaGM7Vo0piDtQR3xEfNcFujLN4RdjoCBGotD758rsCM&usqp=CAU"
  ),
  new Talaba("6", "John", "Doe", "123-456-7890", "10th grade", 500, "male", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPLW7RJ2Sqz_vvL9Twn5lyAhdNsLWbL0PXag&usqp=CAU"),
  new Talaba("7", "Daniel", "Jones", "666-777-8888", "11th grade", 400, "male", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_r_lhaIGEnOtbvzmQgpgnEc4Ys5_ZOB1hPPt9aGRei_s2AHTcR3PT5CRuypi-SeuLSM&usqp=CAU"),
  new Talaba("8", "Olivia", "Davis", "999-000-1111", "12th grade", 0, "female", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgAB_7-WBqrWg4RD9Xwk96gLs8OFAlmTm0YJBEJ4Ht8HmN3Z8yBbqB1PDhkYtRaVFBh0w&usqp=CAU"),
  new Talaba("9", 
    "Matthew",
    "Garcia",
    "222-333-4444",
    "10th grade",
    600,
    "male",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStFZBEWFKtWQxT4p9dESi9uy8wkn9Q3wONn5i9hxT71iBwTFx5fPWfka460Cs9qKG2Jps&usqp=CAU"
  ),
  new Talaba("10", "Ava", "Martinez", "888-999-0000", "9th grade", 0, "female", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0q_ExoQHEuNXfNcafj-BqXptelMW6DobjTKhcm97AvdJTY0LseHwcT_hDmiV2tVMBAIk&usqp=CAU"),
  new Talaba("11", 
    "Abdulloh",
    "Qodirov",
    "123-456-7890",
    "10-sinf",
    500,
    "male",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTnGhvgTfwI0iVaJCDnO-BNhvQ4ikhvoMB7eUkYn1zN0N3a3AjF45ASliQg-3Du7Jv-ec&usqp=CAU"
  ),
  new Talaba("12", 
    "Shahzoda",
    "Matyoqubova",
    "987-654-3210",
    "11-sinf",
    0,
    "female",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr62IrUkyYMQO4piRr0nBdLFowkYSuZgrV_NImzHCxQHu6IE9NkwdRSpVAj_dGKmlG8D8&usqp=CAU"
  ),
  new Talaba("13", "Abdukarim", "Olimov", "555-123-4567", "9-sinf", 300, "male", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMAsk4E3RgyEY-pWAOS2syOZNBAava4umc-PjK7yj5PC3QMJcxh8eiP0Fkd-vF9wtmoS0&usqp=CAU"),
  new Talaba("14", 
    "Sevara",
    "Xolmirzaeva",
    "777-888-9999",
    "12-sinf",
    700,
    "female",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-eZS5rKAdSqIGGnCCqr9N0aESDc3Rgp20dVxpqcpSHIif3Htisfn8FChMJm-ImqhBnf8&usqp=CAU"
  ),
  new Talaba("15", "Olim", "Ahmadov", "111-222-3333", "10-sinf", 0, "male", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnfczp0D69XtS7h_2O1hYv37jJlzgAK8eY2hPeUQ5anVnJFiHHDfLMY1sSoTJ4LBtGLNI&usqp=CAU"),
  new Talaba("16", 
    "Zarnigor",
    "To`laganova",
    "444-555-6666",
    "9-sinf",
    200,
    "female",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbles8IANiFktxG1Ag4h2sQGKtaOW6dBqgUCKHcbBI7YPtUgPYlNWAZFidiFGCtCj5y4&usqp=CAU"
  ),
  new Talaba("17", "Diyor", "Abdurahmonov", "666-777-8888", "11-sinf", 400, "male", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVuN7lFx5vr-9ZDcCwm4NkCoWoDgzbkrSfGqPnu2z7gk7swL4UhnaA1E3elPiD0R6M6NI&usqp=CAU"),
  new Talaba("18", 
    "Gulnora",
    "Hasanova",
    "999-000-1111",
    "12-sinf",
    0,
    "female",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlF-LxhmR8L939YqCn69xidPrtjYcvIrNKjQ&usqp=CAU"
  ),
  new Talaba("19", "Yodgor", "Ahmedov", "222-333-4444", "10-sinf", 600, "male", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeRYnhFSr3MGcuVSPULldiAKMUr8-nAasUwg&usqp=CAU"),
  new Talaba("20", "Dilnoza", "Yunusova", "888-999-0000", "9-sinf", 0, "female", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4lJn4SmwJ2fCWcusV1kNWyqkC5z9MLyXELP9ePeSZs8XgAM2EDnLQQMXB7RHrlQEAwoY&usqp=CAU"),
  new Talaba("21", "Abdujabbor", "Ahmadaliyev", "777-555-0000", "9-sinf", 500, "male", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQFmcpmMhr-Qi95BMpZB3Io_TbtZbrHMRXew&usqp=CAU"),
  new Talaba("22", "Saodat", "Tursunova", "657-999-0000", "8-sinf", 130, "female", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSypihg9Jq-1dG8D2FGBK5cN-jX39tKMORL_Q&usqp=CAU"),
  new Talaba("23", "Viktor", "Kyucko", "421-999-0000", "7-sinf", 240, "male", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoLsernGlbX-qgcGirDlCKuaWft5epVOa2YA&usqp=CAU"),
  new Talaba("24", "Dilnavoz", "Ravshanova", "876-999-0000", "8-sinf", 420, "female", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZOJT2u4DnQDIRGbGYNJ48n-i02bo5faYKw&usqp=CAU"),
  new Talaba("25", "Igor", "Mixayelev", "888-654-0000", "10-sinf", 780, "male", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLhUBoGBWwqfeSCSj_gEUBqrYAl3RQPfmzeA&usqp=CAU"),
];

class Sinf {
  constructor(id, sinf,  guruh, sinf_rahbar, tashkil_qilindi, arr, xona) {
    this.id = id;
    this.sinf = sinf;
    this.guruh = guruh;
    this.sinf_rahbar = sinf_rahbar;
    this.tashkil_qilindi = tashkil_qilindi;
    this.fanlar = fanlar.map((item, i) => {
      return { fanId: item.id, oqituvchiId: oqituvchilar[i].id };
    });
    this.oquvchilar = arr;
    this.xona = xona;
  }
}

export const sinflar = [
  new Sinf("000000", '8"D"', "N2", `${oqituvchilar[5].id}`, "2022-09-01", ["1", "2", "3", "4", "5"], 100),
  new Sinf("111111", '9"A"', "N1", `${oqituvchilar[6].id}`, "2022-09-01", ["6", "7", "8", "9", "10"], 101),
  new Sinf("222222", '9"B"', "N2", `${oqituvchilar[2].id}`, "2022-09-01", ["11", "12", "13", "14", "15"], 102),
  new Sinf("333333", '9"V"', "N1", `${oqituvchilar[1].id}`, "2022-09-01", ["16", "17", "18", "19", "20"], 103),
  new Sinf("444444", '9"D"', "N2", `${oqituvchilar[0].id}`, "2022-09-01", ["21", "22", "23", "24", "25"], 104),
  // new Sinf('7"A"', "N1", `${oqituvchilar[0].id}`, "2022-09-01"),
  // new Sinf('7"B"', "N2", `${oqituvchilar[1].id}`, "2022-09-01"),
  // new Sinf('8"A"', "N1", `${oqituvchilar[2].id}`, "2022-09-01"),
  // new Sinf('8"B"', "N2", `${oqituvchilar[3].id}`, "2022-09-01"),
  // new Sinf('8"V"', "N1", `${oqituvchilar[4].id}`, "2022-09-01"),
];
