<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        User::create([
            'name' => 'laalam',
            'city' => 'casa',
            'phone' => null,
            'image' => 'images/imageprofile.PNG',
            'status' => 'En attente',
            'sector' => null,
            'descreption' => 'test',
            'working_days' => null,
            'hours_per_day' => null,
            'availability' => '0',
            'role' => 'client',
            'email' => 'laalam@gmail.com',
            'password' => Hash::make('12345678'),
            ]);
    }
}
