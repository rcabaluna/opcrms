<?php

namespace App\Models\Libraries;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offices extends Model
{
    /** @use HasFactory<\Database\Factories\Libraries\OfficesFactory> */
    use HasFactory;

    protected $table = 'tbloffices';

    protected $primaryKey = 'officeid';

    protected $fillable = [
        'officeid',
        'officename',
        'officecode',
        'is_psto',
        'created_at',
        'updated_at'
    ];
}
