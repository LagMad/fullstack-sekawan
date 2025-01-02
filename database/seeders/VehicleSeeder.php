<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;

class VehicleSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        // Seed the vehicles table with 10 dummy vehicles
        foreach (range(1, 50) as $index) {
            DB::table('vehicles')->insert([
                'name' => $faker->word,  // Random name
                'gas_usage' => $faker->randomFloat(2, 5, 20),  // Random gas usage between 5 and 20 liters
                'service_sched' => $faker->date(),  // Random date for service schedule
                'usage_log' => $faker->sentence,  // Random usage log sentence
                'created_at' => now(),
                'updated_at' => now(),
                'type' => $faker->randomElement(['person', 'goods']),
            ]);
        }
    }
}
