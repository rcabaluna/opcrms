<?php

namespace App\Http\Controllers\Opcr;

use App\Models\opcr\Opcr;
use App\Http\Requests\StoreOpcrRequest;
use App\Http\Requests\UpdateOpcrRequest;
use App\Http\Controllers\Controller;

class OpcrController extends Controller
{

    public function index()
    {
        return redirect('/opcr/dashboard');
    }

    public function dashboard(){
        return inertia('Opcr/Dashboard');
    }

}
