<?php

namespace Database\Seeders;

use App\Models\Pin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Pins extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $icelandCoordinates = [
        ['longitude' => -21.9426, 'latitude' => 64.1466],
        ['longitude' => -18.1005, 'latitude' => 65.6835],
        ['longitude' => -15.2123, 'latitude' => 64.2494],
        ['longitude' => -21.1306, 'latitude' => 64.2550],
        ['longitude' => -16.6482, 'latitude' => 64.4215],
        ['longitude' => -22.4281, 'latitude' => 63.8416],
        ['longitude' => -16.8128, 'latitude' => 65.6410],
        ['longitude' => -19.0060, 'latitude' => 63.4195],
        ['longitude' => -16.9719, 'latitude' => 64.0323],
        ['longitude' => -23.1556, 'latitude' => 66.0820],
        // Add more coordinates as needed
        ];

        $natureWeatherData = [];
        foreach ($icelandCoordinates as $coordinates) {
            $title =
            $title = ['Mountain Peak', 'Forest Grove', 'Lake View', 'Valley Meadows', 'Stormy Ridge', 'Sunny Fields', 'Winter Wonderland', 'Thunder Mountain', 'Golden Sunset', 'Rainforest Canopy'][rand(0, 9)];
            $slug = str_replace(' ', '-', $title);

            $natureWeatherData[] = [
                'longitude' => $coordinates['longitude'],
                'latitude' => $coordinates['latitude'],
                'title' => $title,
                'slug' => $slug,
                'active' => true,
            ];
        }
        foreach ($natureWeatherData as $item) {
            $pin = new Pin();
            $pin->longitude = $item['longitude'];
            $pin->latitude = $item['latitude'];
            $pin->title = $item['title'];
            $pin->slug = $item['slug'];
            $pin->active = $item['active'];
            $pin->save();
        }
    }
}
