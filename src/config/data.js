class Sinf {
  constructor(sinf, oquvchi_soni, guruh, sinf_rahbar, tashkil_qilindi) {
    this.sinf = sinf;
    this.oquvchi_soni = oquvchi_soni;
    this.guruh = guruh;
    this.sinf_rahbar = sinf_rahbar;
    this.tashkil_qilindi = tashkil_qilindi;
  }
}

class Talaba {
  constructor(ism, familiya, telefon, sinf, grantlar) {
    this.ism = ism;
    this.familiya = familiya;
    this.telefon = telefon;
    this.sinf = sinf;
    this.hisob_holati =
      "UZS " + (Math.floor(Math.random() * 900) + 100) + ".000";
    this.grantlar = grantlar;
  }
}

export const sinflar = [
  new Sinf("5A", 30, "Matematika", "Ali Rahimov", "2022-09-01"),
  new Sinf("6B", 25, "Ona tili", "Nigora Karimova", "2022-09-01"),
  new Sinf("7C", 28, "Fizika", "Bobur Hasanov", "2022-09-01"),
  new Sinf("8D", 22, "Informatika", "Dilnoza Mirzayeva", "2022-09-01"),
  new Sinf("9E", 20, "Tarix", "Rustam Qosimov", "2022-09-01"),
  new Sinf("10F", 18, "Biologiya", "Durdona Xudoyberdiyeva", "2022-09-01"),
  new Sinf("11G", 15, "Kimyo", "Jamshid Olimov", "2022-09-01"),
  new Sinf("12H", 12, "Ingliz tili", "Susan Smith", "2022-09-01"),
  new Sinf("13I", 10, "Musiqi", "Shahzoda Mahmudova", "2022-09-01"),
  new Sinf("14J", 8, "San'at", "Jamol Kamolov", "2022-09-01"),
];

export const talabalar = [
  new Talaba("John", "Doe", "123-456-7890", "10th grade", 500),
  new Talaba("Jane", "Smith", "987-654-3210", "11th grade", 0),
  new Talaba("Alex", "Johnson", "555-123-4567", "9th grade", 300),
  new Talaba("Emily", "Williams", "777-888-9999", "12th grade", 700),
  new Talaba("Michael", "Brown", "111-222-3333", "10th grade", 0),
  new Talaba("Sophia", "Miller", "444-555-6666", "9th grade", 200),
  new Talaba("Daniel", "Jones", "666-777-8888", "11th grade", 400),
  new Talaba("Olivia", "Davis", "999-000-1111", "12th grade", 0),
  new Talaba("Matthew", "Garcia", "222-333-4444", "10th grade", 600),
  new Talaba("Ava", "Martinez", "888-999-0000", "9th grade", 0),
  new Talaba("Abdulloh", "Qodirov", "123-456-7890", "10-sinf", 500),
  new Talaba("Shahzoda", "Karimova", "987-654-3210", "11-sinf", 0),
  new Talaba("Ravshan", "Olimov", "555-123-4567", "9-sinf", 300),
  new Talaba("Nigora", "Xolmirzaeva", "777-888-9999", "12-sinf", 700),
  new Talaba("Olim", "Ahmadov", "111-222-3333", "10-sinf", 0),
  new Talaba("Zarnigor", "Xasanova", "444-555-6666", "9-sinf", 200),
  new Talaba("Diyor", "Rahmonov", "666-777-8888", "11-sinf", 400),
  new Talaba("Gulnora", "Jalilova", "999-000-1111", "12-sinf", 0),
  new Talaba("Sardor", "Ahmedov", "222-333-4444", "10-sinf", 600),
  new Talaba("Dilnoza", "Yunusova", "888-999-0000", "9-sinf", 0),
];
