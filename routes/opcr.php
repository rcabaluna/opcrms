<?php

use App\Http\Controllers\Opcr\ManageController;
use App\Http\Controllers\Opcr\OpcrController;
use Illuminate\Support\Facades\Route;


Route::get('/opcr/dashboard', [OpcrController::class, 'dashboard']);

Route::resource('opcr', controller: OpcrController::class)->except(['create','store','edit','destroy','show','update']);
Route::resource('opcr/manage', controller: ManageController::class);
