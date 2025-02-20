<?php

namespace App\Models\Opcr;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Targets extends Model
{
    use HasFactory;

    protected $table = 'tbltargetsummary';

    protected $primaryKey = 'targetsummaryid';

    protected $fillable = [
        'targetsummaryid',
        'xyear',
        'xstatus',
        'is_psto',
        'created_at',
        'updated_at'
    ];
}
