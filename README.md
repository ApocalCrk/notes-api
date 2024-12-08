# **Notes API**

## **Deskripsi**
Notes API adalah aplikasi berbasis REST API untuk mengelola note. API ini memungkinkan pengguna untuk membuat, membaca, memperbarui, dan menghapus note. 

---

## **Fitur**
1. **Membuat Notes Baru**  
   Endpoint untuk menambahkan note baru ke database.
   
2. **Melihat Semua Notes**  
   Endpoint untuk mendapatkan daftar semua note yang tersedia.
   
3. **Melihat Detail Notes**  
   Endpoint untuk mendapatkan informasi detail tentang satu note berdasarkan ID.
   
4. **Memperbarui Notes**  
   Endpoint untuk memperbarui judul, tanggal, dan isi note.
   
5. **Menghapus Notes**  
   Endpoint untuk menghapus note berdasarkan ID.

---

## **Cara Penggunaan**
### **Prasyarat**
Pastikan sudah memiliki:
- **Node.js (> v20.0)**
- **MySQL**
- **npm**

### **Langkah Cara Penggunaan**
1. Clone repository ini:
   ```bash
   git clone https://github.com/ApocalCrk/notes-api.git
   ```
   
2. Masuk ke direktori proyek:
   ```bash
   cd notes-api
   ```
   
3. Install dependencies:
   ```bash
   npm i
   ```

4. Copy file `.env.example` dan ubah namanya menjadi `.env`. Isi file `.env` dengan konfigurasi
   ```env
   APP_PORT=3000
   HOST=localhost
   USER=root
   PASSWORD=
   DATABASE=notes_db
   ```

5. Atau ubah nama file `.env.example` menjadi `.env` dan isi konfigurasi

5. Buat database MySQL dan jalankan perintah berikut di MySQL:
   ```sql
   CREATE DATABASE notes_db;
   USE notes_db;
   CREATE TABLE notes (
       id BIGINT AUTO_INCREMENT PRIMARY KEY,
       title TEXT NOT NULL,
       datetime DATETIME NOT NULL,
       note LONGTEXT NOT NULL
   );
   ```

6. Jalankan server:
   ```bash
   npm run dev
   ```

7. Secara default server akan berjalan di `http://localhost:3000`, jika ingin mengganti port ubah nilai `APP_PORT` di file `.env`.

---

## **Endpoint Dokumentasi**
### **Base URL**
`http://localhost:3000/api/notes`

### **1. Mendapatkan Semua Notes**
- **Endpoint**: `GET /`
- **Deskripsi**: Mengembalikan daftar semua notes.
- **Query SQL**: `SELECT * FROM notes;`
- **Response**:
  ```json
  [
    {
      "id": 1,
      "title": "Contoh Judul",
      "datetime": "2024-12-05T10:00:00.000Z",
      "note": "Isi notes."
    }
  ]
  ```

---

### **2. Mendapatkan Notes Berdasarkan ID**
- **Endpoint**: `GET /:id`
- **Deskripsi**: Mengembalikan detail notes berdasarkan ID.
- **Parameter**: 
  - `id` (path parameter): ID notes yang ingin diambil.
- **Query SQL**: `SELECT * FROM notes WHERE id = :id;`
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Contoh Judul",
    "datetime": "2024-12-05T10:00:00.000Z",
    "note": "Isi notes."
  }
  ```

---

### **3. Membuat Notes Baru**
- **Endpoint**: `POST /`
- **Deskripsi**: Menambahkan notes baru ke database.
- **Query SQL**: `INSERT INTO notes (title, datetime, note) VALUES (:title, :datetime, :note);`
- **Body Request**:
  ```json
  {
    "title": "Judul Notes Baru",
    "datetime": "2024-12-05T10:00:00",
    "note": "Isi notes baru."
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Judul Notes Baru",
    "datetime": "2024-12-05T10:00:00",
    "note": "Isi notes baru."
  }
  ```

---

### **4. Memperbarui Notes**
- **Endpoint**: `PUT /:id`
- **Deskripsi**: Memperbarui notes berdasarkan ID.
- **Parameter**:
  - `id` (path parameter): ID notes yang ingin diperbarui.
- **Query SQL**: `UPDATE notes SET title = :title, datetime = :datetime, note = :note WHERE id = :id;`
- **Body Request**:
  ```json
  {
    "title": "Judul Baru",
    "datetime": "2024-12-06T10:00:00",
    "note": "Isi notes yang diperbarui."
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Judul Baru",
    "datetime": "2024-12-06T10:00:00",
    "note": "Isi notes yang diperbarui."
  }
  ```

---

### **5. Menghapus Notes**
- **Endpoint**: `DELETE /:id`
- **Deskripsi**: Menghapus notes berdasarkan ID.
- **Parameter**:
  - `id` (path parameter): ID notes yang ingin dihapus.
- **Query SQL**: `DELETE FROM notes WHERE id = :id;`
- **Response**:
  ```json
  {
    "message": "Data berhasil dihapus."
  }
  ```

---

## **Struktur Direktori**
```
notes_api/
├── .gitignore
├── .env
├── .env.example
├── README.md
├── package.json
├── app.js
└── src/
    ├── config/
    │   └── db.js
    ├── controllers/
    │   └── notesController.js
    ├── models/
    │   └── notesModel.js
    └── routes/
        └── notesRoutes.js
```

---

## **Tambahan**
- **Validasi Input**: Pastikan semua input valid untuk menghindari error.
- **Error Handling**: API telah dilengkapi dengan response error untuk memudahkan debugging.