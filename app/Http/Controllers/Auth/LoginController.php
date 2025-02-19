<?php

namespace App\Http\Controllers\Auth;

use App\Models\Auth\Login;
use App\Http\Controllers\Controller;
use App\Http\Requests\StoreLoginRequest;
use App\Http\Requests\UpdateLoginRequest;

class LoginController extends Controller
{
    public function create(){
        return inertia('Auth/Login');
    }

}
