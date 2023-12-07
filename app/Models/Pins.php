<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pins extends Model
{
    protected $table = 'pins'; 

    protected $fillable = [
        'longitude', 'latitude', 'title', 
        'approval_id', 'severity_id', 'slug', 
        'description', 'category_id', 'creator_id', 
        'video', 'images', 'active'
    ];

}
