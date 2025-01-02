<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    public function orders()
    {
        return $this->hasMany(VehicleOrder::class);
    }
}
