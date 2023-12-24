class Sinf {
  constructor(sinf, oquvchi_soni, guruh, sinf_rahbar, tashkil_qilindi) {
    this.id = `${Math.floor(Math.random() * 900000) + 100}`;
    this.sinf = sinf;
    this.oquvchi_soni = oquvchi_soni;
    this.guruh = guruh;
    this.sinf_rahbar = sinf_rahbar;
    this.tashkil_qilindi = tashkil_qilindi;
  }
}

class Talaba {
  constructor(ism, familiya, telefon, sinf, grantlar, gender) {
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
    this.img =
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsprzedajemy.pl%2Fportret-prezent-slubny-malowane-ze-zdjecia-rysunek-warszawa-4-7897fb-nr56054002&psig=AOvVaw3RWF2gBIJWIHzWe9Bt3OWI&ust=1703487459903000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCejcC_p4MDFQAAAAAdAAAAABAD";
  }
}

export const sinflar = [
  new Sinf('8"A"', 30, "Matematika", "Ali Rahimov", "2022-09-01"),
  new Sinf('8"B"', 25, "Ona tili", "Nigora Karimova", "2022-09-01"),
  new Sinf('8"V"', 28, "Fizika", "Bobur Hasanov", "2022-09-01"),
  new Sinf('8"D"', 22, "Informatika", "Dilnoza Mirzayeva", "2022-09-01"),
  new Sinf('9"A"', 20, "Tarix", "Rustam Qosimov", "2022-09-01"),
  new Sinf('9"B"', 18, "Biologiya", "Durdona Xudoyberdiyeva", "2022-09-01"),
  new Sinf('9"V"', 15, "Kimyo", "Jamshid Olimov", "2022-09-01"),
  new Sinf('9"D"', 12, "Ingliz tili", "Susan Smith", "2022-09-01"),
  new Sinf('10"A"', 10, "Musiqiy", "Shahzoda Mahmudova", "2022-09-01"),
  new Sinf('10"B"', 8, "San'at", "Jamol Kamolov", "2022-09-01"),
];

export const talabalar = [
  new Talaba("John", "Doe", "123-456-7890", "10th grade", 500, "male"),
  new Talaba("Jane", "Smith", "987-654-3210", "11th grade", 0, "female"),
  new Talaba("Alex", "Johnson", "555-123-4567", "9th grade", 300, "male"),
  new Talaba("Emily", "Williams", "777-888-9999", "12th grade", 700, "female"),
  new Talaba("Michael", "Brown", "111-222-3333", "10th grade", 0, "male"),
  new Talaba("Sophia", "Miller", "444-555-6666", "9th grade", 200, "female"),
  new Talaba("Daniel", "Jones", "666-777-8888", "11th grade", 400, "male"),
  new Talaba("Olivia", "Davis", "999-000-1111", "12th grade", 0, "female"),
  new Talaba("Matthew", "Garcia", "222-333-4444", "10th grade", 600, "male"),
  new Talaba("Ava", "Martinez", "888-999-0000", "9th grade", 0, "female"),
  new Talaba("Abdulloh", "Qodirov", "123-456-7890", "10-sinf", 500, "male"),
  new Talaba("Shahzoda", "Karimova", "987-654-3210", "11-sinf", 0, "female"),
  new Talaba("Ravshan", "Olimov", "555-123-4567", "9-sinf", 300, "male"),
  new Talaba("Nigora", "Xolmirzaeva", "777-888-9999", "12-sinf", 700, "female"),
  new Talaba("Olim", "Ahmadov", "111-222-3333", "10-sinf", 0, "male"),
  new Talaba("Zarnigor", "Xasanova", "444-555-6666", "9-sinf", 200, "female"),
  new Talaba("Diyor", "Rahmonov", "666-777-8888", "11-sinf", 400, "male"),
  new Talaba("Gulnora", "Jalilova", "999-000-1111", "12-sinf", 0, "female"),
  new Talaba("Sardor", "Ahmedov", "222-333-4444", "10-sinf", 600, "male"),
  new Talaba("Dilnoza", "Yunusova", "888-999-0000", "9-sinf", 0, "female"),
];
