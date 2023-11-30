<?php

namespace Database\Seeders;

use App\Models\Severity;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Approvals extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $approvals = [
            [
                'id' => 1,
                'name' => 'Approved',
                'slug' => 'An Active Partner'
            ],
            [
                'id' => 2,
                'name' => 'Blocked',
                'slug' => 'Not a partner'
            ],
            [
                'id' => 3,
                'name' => 'Requires Review',
                'slug' => 'More information required'
            ],
        ];
        foreach ($approvals as $item) {
            $approval = new Severity;
            $approval->name = $item['name'];
            $approval->slug = $item['slug'];
            $approval->save();
        }

    }
}
