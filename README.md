````markdown
# Next.js Full Stack Todo App (Front-end + Back-end)

ໂຄງການນີ້ເປັນຕົວຢ່າງ Full Stack Web Application ທີ່ສ້າງດ້ວຍ:

- Next.js (Front-end)
- Next.js API Routes (Back-end)
- TypeScript
- Prisma ORM
- MySQL / MariaDB
- JWT Authentication
- Tailwind CSS

---

# ຈຸດປະສົງຂອງໂຄງການ

ໃຫ້ນັກສຶກສາໄດ້ຮຽນຮູ້:

- Project Structure
- Front-end & Back-end Communication
- API Development
- Authentication (Register/Login)
- JWT Token
- Prisma ORM
- Database Relationship
- CRUD Operations
- Environment Variables
- Package Management ດ້ວຍ PNPM

---

# ໂຄງສ້າງຂອງ Project

```text
project
│
├── front-end
│
└── back-end
```

---

# ວິທີໃຊ້ງານ

## 1. Fork Repository

ໃຫ້ນັກສຶກສາ Fork Repository ນີ້ໄປຍັງ GitHub ຂອງຕົນເອງ.

---

## 2. ສຶກສາ Packages

ໃຫ້ນັກສຶກສາຄົ້ນຄວ້າ ແລະ ສຶກສາວ່າ Project ນີ້ໄດ້ນຳໃຊ້ Package ໃດແດ່ ທັງໃນ:

- Front-end
- Back-end

ພ້ອມທັງອະທິບາຍໜ້າທີ່ຂອງ Package ແຕ່ລະຕົວ.

---

## 3. Run Back-end

ເປີດ Terminal ແລ້ວເຂົ້າໄປທີ່ Folder:

```bash
cd back-end
```

ຕິດຕັ້ງ Packages:

```bash
pnpm install
```

ກວດກາ .env ກໍລະນີທີ່ນັກສຶກສາໃສ່ລະຫັດໃຫ້ກັບຖານຂໍ້ມູນ

```text
.env
DATABASE_URL="mysql://root:ໃສ່ລະຫັດຜ່ານບ່ອນນີ້@localhost:3306/todo_app"
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=ໃສ່ລະຫັດຜ່ານບ່ອນນີ້
DB_NAME=todo_app
JWT_SECRET="some_secret_key"
```

ສ້າງ Database Tables:

```bash
pnpm prisma migrate dev --name init
```

ກວດສອບວ່າ Database ແລະ Tables ຖືກສ້າງແລ້ວ.

Generate Prisma Client:

```bash
pnpm prisma generate
```

Run Server:

```bash
pnpm dev
```

ສັງເກດວ່າ Back-end ກຳລັງ Run ຢູ່ Port ໃດ.

ຕົວຢ່າງ:

```text
http://localhost:3001
```

---

## 4. Run Front-end

ເປີດ Terminal ໃໝ່ ແລ້ວເຂົ້າໄປທີ່:

```bash
cd front-end
```

ຕິດຕັ້ງ Packages:

```bash
pnpm install
```

ເປີດໄຟລ໌:

```text
.env
```

ແລ້ວແກ້ URL ຫຼື Port ໃຫ້ກົງກັບ Back-end.

ຕົວຢ່າງ:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Run Front-end:

```bash
pnpm dev
```

ສັງເກດວ່າ Front-end ກຳລັງ Run ຢູ່ Port ໃດ.

ຕົວຢ່າງ:

```text
http://localhost:3002
```

---

## 5. ທົດລອງລົງທະບຽນ (Register)

ເປີດ Browser:

```text
http://localhost:<front_end_port>/register
```

ຕົວຢ່າງ:

```text
http://localhost:3002/register
```

ທົດລອງສ້າງບັນຊີຜູ້ໃຊ້ໃໝ່.

---

## 6. ທົດລອງເຂົ້າລະບົບ (Login)

ເປີດ:

```text
http://localhost:<front_end_port>/login
```

ຕົວຢ່າງ:

```text
http://localhost:3002/login
```

ແລ້ວລອງ Login ດ້ວຍບັນຊີທີ່ສ້າງໄວ້.

---

# ວຽກທີ່ມອບໝາຍ

1. ອະທິບາຍ Project Structure.
2. ອະທິບາຍການເຮັດວຽກຂອງ Register.
3. ອະທິບາຍການເຮັດວຽກຂອງ Login.
4. ອະທິບາຍ JWT Authentication.
5. ສຶກສາ Prisma Schema.
6. ສ້າງ CRUD ສຳລັບ Todo List ໃຫ້ສຳເລັດ.
7. ປັບປຸງ UI ໃຫ້ສວຍງາມຂຶ້ນ.

---

# ໝາຍເຫດ

ຖ້າ Project Run ບໍ່ໄດ້ ໃຫ້ກວດສອບ:

- Node.js Version
- Database Connection
- .env Configuration
- Port Number
- Prisma Migration
- Prisma Client Generation
````
