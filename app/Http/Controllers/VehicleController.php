<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vehicle;

class VehicleController extends Controller
{
    public function index()
    {
        $vehicles = Vehicle::latest()->paginate(10);

        return inertia('VehicleList', [
            'vehicles' => $vehicles,
        ]);
    }

    public function showLog($id)
    {
        $vehicle = Vehicle::findOrFail($id);
        return inertia('VehicleLog', [
            'vehicle' => $vehicle,
        ]);
    }
}
