<?php

namespace App\Http\Controllers\Opcr;

use App\Models\Opcr\Targets;
use App\Http\Requests\StoreTargetsRequest;
use App\Http\Requests\UpdateTargetsRequest;
use App\Http\Controllers\Controller;

class TargetsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $targets = Targets::latest()->get();

        return inertia('Opcr/Targets',['targets' => $targets]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTargetsRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Targets $targets)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Targets $targets)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTargetsRequest $request, Targets $targets)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Targets $target)
    {
        $target->delete();

        return redirect('/opcr/targets')->with(
            'message', 'The data has been deleted successfully.'
        );
    }
}
