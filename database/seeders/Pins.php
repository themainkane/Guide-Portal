<?php

namespace Database\Seeders;

use App\Models\Pin;
use Illuminate\Database\Seeder;

class Pins extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $pins = [
            [
                'longitude' => -19.045356,
                'latitude' => 64.146546,
                'title' => 'Gondola Gully',
                'severity_id' => 1,
                "category_id" => 2,
                // number 1, 2, or 3
                'slug' => 'Gondola Gully',
                'description' => 'Lift waiting times',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2013/04/01/21/33/ski-lift-99315_1280.png'
            ],
            [
                'longitude' => -19.075901,
                'latitude' => 64.144942,
                'title' => 'Crevasse Chair',
                'severity_id' => 1,
                "category_id" => 2,
                // number 1, 2, or 3
                'slug' => 'Crevasse Chair',
                'description' => 'Lift waiting times',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2013/04/01/21/33/ski-lift-99315_1280.png'
            ],
            [
                'longitude' => -22.539155,
                'latitude' => 65.146785,
                'title' => 'Logans Lift',
                'severity_id' => 1,
                "category_id" => 2,
                // number 1, 2, or 3
                'slug' => 'Logans Lift',
                'description' => 'Lift waiting times',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2013/04/01/21/33/ski-lift-99315_1280.png'
            ],
            [
                'longitude' => -21.539155,
                'latitude' => 65.146785,
                'title' => 'Relaxing Ridge',
                'severity_id' => 1,
                "category_id" => 2,
                // number 1, 2, or 3
                'slug' => 'Relaxing Ridge',
                'description' => 'Lift waiting times',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2013/04/01/21/33/ski-lift-99315_1280.png'
            ],
            [
                'longitude' => -22.939155,
                'latitude' => 66.146785,
                'title' => 'Turbulent T-Bars',
                'severity_id' => 1,
                "category_id" => 2,
                // number 1, 2, or 3
                'slug' => 'Turbulent T-Bars',
                'description' => 'Lift waiting times',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2013/04/01/21/33/ski-lift-99315_1280.png'
            ],
            [
                'longitude' => -21.939155,
                'latitude' => 64.146785,
                'title' => 'Icy Surface',
                'severity_id' => 2,
                "category_id" => 1,
                // number 1, 2, or 3
                'slug' => 'Caution when exiting the chairlift',
                'description' => 'Please take care when exiting the chair lift; a recent thaw has created slick ice',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2021/11/14/08/42/cable-car-6793989_1280.jpg'
            ],
            [
                'longitude' => -21.970231,
                'latitude' => 64.149623,
                'title' => 'Avalance Hazard',
                'severity_id' => 4,
                "category_id" => 1,
                // number 1, 2, or 3
                'slug' => 'Serious Avalanche Danger',
                'description' => 'This slope has not released since the snowfall last wednesday, our Patrollers advise no off-piste skiing on this aspect',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2012/06/07/23/52/ridge-49485_1280.jpg'
            ],
            [
                'longitude' => -21.925373,
                'latitude' => 64.137562,
                'title' => 'Large Moulin',
                'severity_id' => 4,
                "category_id" => 1,
                // number 1, 2, or 3
                'slug' => 'Large Moulin',
                'description' => 'A skiier recently fell into a large moulin at these coordinates. If you are going to ski in this area please be aware that snow bridges are weak. And be sure to carry all your glacier rescue equipment.',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2017/11/06/16/15/glacier-2924065_1280.jpg'

            ],
            [
                'longitude' => -21.892349,
                'latitude' => 64.139842,
                'title' => 'Ski School',
                'severity_id' => 2,
                "category_id" => 1,
                // number 1, 2, or 3
                'slug' => 'SLOW: Ski School in progress',
                'description' => 'Caution, young an inexperienced skiiers are using this area',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2012/02/26/10/58/active-17089_1280.jpg'
            ],
            [
                'longitude' => -21.953227,
                'latitude' => 64.128401,
                // 52.16 with aberration 0.06
                'title' => 'Cornice',
                'severity_id' => 4,
                "category_id" => 1,
                // number 1, 2, or 3
                'slug' => 'Out of bounds: Large Cornice',
                'description' => 'Please do not approach the edge, a large cornice is expected to fall soon. Skiing in this location will present serious risk to backcountry skiiers below.',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2019/02/23/16/38/winter-4016000_1280.jpg'
            ],
            [
                'longitude' => -21.908534,
                'latitude' => 64.125071,
                'title' => 'Accident',
                "category_id" => 1,
                'severity_id' => 3,
                // number 1, 2, or 3
                'slug' => 'SLOW: Accident',
                'description' => 'Please slow down, are partollers are responding to an accident at this location',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2010/12/13/10/10/ski-2410_1280.jpg'
            ],
            [
                'longitude' => -21.933709,
                'latitude' => 64.130817,
                'title' => 'Avalanche Debris',

                'severity_id' => 3,
                "category_id" => 1,
                // number 1, 2, or 3
                'slug' => 'Slow: Debis in the area',
                'description' => 'An avalance last tuesday morning has left substantial debis, skiing is technical and dangerous. Experts only.',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2017/07/19/10/33/avalanche-2518679_1280.jpg'
            ],
            [
                'longitude' => -21.898822,
                'latitude' => 64.133448,
                'title' => 'Natural Half Pipe',

                'severity_id' => 1,
                "category_id" => 3,
                // number 1, 2, or 3
                'slug' => 'Great natural half pipe!',
                'description' => 'Me and my buddies rode here all day! We left a few nice kickers around, have fun!',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2016/01/26/00/26/canazei-1161799_1280.jpg'
            ],
            [
                'longitude' => -21.912156,
                'latitude' => 64.141662,
                'title' => 'Backcounrty Pow!',

                'severity_id' => 1,
                "category_id" => 3,
                // number 1, 2, or 3
                'slug' => 'Awesome Powdery Run!',
                'description' => 'Reall amazing conditions here! Careful not to venture onto the eastern aspect, I saw on the hazards filter that the avalanche hazard is high there. Peace!',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2019/03/19/19/22/snow-4066640_1280.jpg'
            ],
            [
                'longitude' => -21.941289,
                'latitude' => 64.135279,
                'title' => 'Snowball Fight',

                'severity_id' => 1,
                "category_id" => 3,
                // number 1, 2, or 3
                'slug' => 'FIGHT!!',
                'description' => 'Huge snowballfight at the kiddies slope, come on down...If you dare!',
                'active' => true,
                'images' => 'https://cdn.pixabay.com/photo/2014/12/23/14/57/snowball-fight-578445_1280.jpg'
            ],

        ];


        foreach ($pins as $pin) {
            $map_pin = new Pin();
            $map_pin->longitude = $pin['longitude'];
            $map_pin->latitude = $pin['latitude'];
            $map_pin->title = $pin['title'];
            $map_pin->category_id = $pin['category_id'];
            $map_pin->severity_id = $pin['severity_id'];
            $map_pin->slug = $pin['slug'];
            $map_pin->description = $pin['description'];
            $map_pin->active = $pin['active'];
            $map_pin->images = $pin['images'];
            $map_pin->save();
        }
    }
}
