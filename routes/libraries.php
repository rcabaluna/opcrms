<?php

use App\Http\Controllers\Libraries\OfficesController;
use Illuminate\Support\Facades\Route;


Route::resource('libraries/offices', controller: OfficesController::class);