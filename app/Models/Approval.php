<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class approval extends Model
{
    use HasFactory;
    public function pins()
    {
        return $this->hasMany(Pin::class);
    }
}
