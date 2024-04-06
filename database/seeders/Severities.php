<?php

namespace Database\Seeders;

use App\Models\Severity;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Severities extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $severities = [
            [
                'id' => 1,
                'name' => 'Low',
                'slug' => 'A hazard with either a low consequence or very low likelihood'
            ],
            [
                'id' => 2,
                'name' => 'Moderate',
                'slug' => 'A hazard with a significant likelihood, and low consequence or the inverse'
            ],
            [
                'id' => 3,
                'name' => 'High',
                'slug' => 'A hazard with a high consequence and moderate or high likelihood'
            ],
        ];

        foreach ($severities as $item) {
            $severity = new Severity;
            $severity->name = $item['name'];
            $severity->slug = $item['slug'];
            $severity->save();
        }
    }

}

