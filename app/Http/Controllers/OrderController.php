<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    public function index()
    {
        $vehicles = Vehicle::all();

        return inertia('Order', [
            'vehicles' => $vehicles,
        ]);
    }
}
