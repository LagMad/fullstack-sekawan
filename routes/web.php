<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\VehicleController;

Route::get('/', function () {
    return Inertia::render('Home');
})->middleware('auth')->name('home');

Route::get('/login', function () {
    return Inertia::render('Login');
})->name('login');

// Handle login submission (POST request)
Route::post('/login', [AuthController::class, 'login']);

Route::get('/register', function () {
    return Inertia::render('Register');
});

Route::post('/register', [AuthController::class, 'register']);


Route::get('/vehicle-list', [VehicleController::class, 'index'])->name('vehicle.list');

Route::get('/order', [OrderController::class, 'index'])->name('order');

// Route::get('/order', function () {
//     return Inertia::render('Order');
// });

Route::get('/admin-dashboard', function () {
    return Inertia::render('Admin/AdminDashboard');
});

Route::get('/usage-graph', function () {
    return Inertia::render('UsageGraph');
});
