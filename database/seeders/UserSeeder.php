<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        \App\Models\User::create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password123'),
            'role' => 'admin',
        ]);

        \App\Models\User::create([
            'name' => 'Approver',
            'email' => 'approver@example.com',
            'password' => bcrypt('password123'),
            'role' => 'approver',
        ]);

        // \App\Models\User::create([
        //     'name' => 'Jeremmy',
        //     'email' => 'hizkiajeremmy@gmail.com',
        //     'password' => bcrypt('ASUSX441U'),
        //     'role' => 'user',
        // ]);
    }
}
