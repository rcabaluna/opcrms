<?php

namespace App\Http\Controllers\Opcr;

use App\Models\opcr\Manage;
use App\Http\Requests\StoreManageRequest;
use App\Http\Requests\UpdateManageRequest;
use App\Http\Controllers\Controller;

class ManageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia('Opcr/Manage');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia('Opcr/CreateOpcr');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreManageRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Manage $manage)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Manage $manage)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateManageRequest $request, Manage $manage)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Manage $manage)
    {
        //
    }
}
