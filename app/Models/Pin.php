<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pin extends Model
{
    use HasFactory;

    protected $table = "pins";

    public function severity()
    {
        $this->belongsTo(Severity::class);
    }

    public function category()
    {
        $this->belongsTo(Category::class);
    }

    public function approval()
    {
        $this->belongsTo(Approval::class);
    }
}
