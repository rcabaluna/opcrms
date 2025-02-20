<?php

namespace App\Http\Controllers\Libraries;

use App\Models\Libraries\Offices;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class OfficesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $offices = Offices::latest()->get();

        return inertia('Libraries/Offices',['offices' => $offices]);
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
    public function store(Request $request)
    {
        sleep(1);

        $fields = $request->validate([
            'officename' => ['required'],
            'officecode' => ['required']
        ]);

        Offices::create($fields);

        return redirect('/libraries/offices')->with(
            'message', 'The post was created.'
        );
    }

    /**
     * Display the specified resource.
     */
    public function show(Offices $offices)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Offices $offices)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateOfficesRequest $request, Offices $offices)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Offices $office)
    {
        $office->delete();

        return redirect('/libraries/offices')->with(
            'message', 'The data has been deleted successfully.'
        );
    }
}
