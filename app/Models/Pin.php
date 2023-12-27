<?php


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pin extends Model
{
    use HasFactory;

    protected $table = "pins";

    protected $fillable = [
        'longitude', 'latitude', 'title', 
        'approval_id', 'severity_id', 'slug', 
        'description', 'category_id', 'creator_id', 
        'video', 'images', 'active'
    ];

    public function severity()
    {
        return $this->belongsTo(Severity::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function approval()
    {
        return $this->belongsTo(Approval::class);
    }
}
