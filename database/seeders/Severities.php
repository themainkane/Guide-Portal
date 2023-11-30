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
                'id' => 2,
                'name' => 'Low',
                'slug' => 'A hazard with either a low consequence of very low likelyhood'
            ],
            [
                'id' => 3,
                'name' => 'Moderate',
                'slug' => 'A hazard with a significant likelyhood, but low consequence and the inverse'
            ],
            [
                'id' => 4,
                'name' => 'High',
                'slug' => 'A hazard with either a high consequence or a moderate consequence and high likeihood'
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

