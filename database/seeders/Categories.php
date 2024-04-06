<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Categories extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            [
                'id' => 1,
                'name' => 'hazard',
                'slug' => 'Dangers for clients or staff'
            ],
            [
                'id' => 2,
                'name' => 'interp',
                'slug' => 'Interesting information to deepen the exploration of an area'

            ],
            [
                'id' => 3,
                'name' => 'restaurant',
                'slug' => 'Places to eat.'
            ],
            [
                'id' => 4,
                'name' => 'service provider',
                'slug' => 'An external service provider or exhibition'
            ]
        ];

        foreach ($categories as $item) {
            $category = new Category();
            $category->id = $item['id'];
            $category->name = $item['name'];
            $category->slug = $item['slug'];
            $category->save();

        }
    }
}

