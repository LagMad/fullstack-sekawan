# Aplikasi Pemesanan Kendaraan

## Daftar Username dan Password

Berikut adalah daftar username dan password yang digunakan dalam aplikasi ini:

| Username           | Password    | Keterangan |
| ------------------ | ----------- | ---------- |
| admin@gmail.com    | password123 | Admin      |
| approver@gmail.com | password123 | Approver   |

## Panduan Penggunaan Aplikasi

### 1. Persiapan Lingkungan

pastikan versi software sebagai berikut

-   **PHP 8.2.12** atau yang lebih baru.
-   **SQLite 3.46.1** atau yang lebih baru.
-   **Node.js** dan **NPM** untuk mengelola dependensi frontend.

### 2. Instalasi

1. Clone repositori

````bash
    git clone https://github.com/LagMad/fullstack-sekawan.git
    cd fullstack-sekawan
    ```
````

2. **Instal Dependensi PHP** Instal dependensi PHP menggunakan Composer:

    ```bash
    composer install
    ```

3. **Instal Dependensi Frontend** Instal dependensi frontend menggunakan NPM:

    ```bash
    npm install
    ```

4. **Salin** File .env **Salin** file .env.example menjadi .env

    ```bash
    cp .env.example .env
    ```

5. **Generate Kunci Aplikasi**

    ```bash
    php artisan key:generate
    ```

6. **Migrasi Database**

    ```bash
    php artisan migrate
    ```

7. **Generate Seeder**

    ```bash
    php artisan db:seed
    ```

8. **Jalankan Server**

    ```bash
    npm run dev
    php artisan serve
    ```
jalankan kedua command pada 2 console yang berbeda

