<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VehicleOrder extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function vehicle()
    {
        return $this->belongsTo(Vehicle::class);
    }

    public function approver1()
    {
        return $this->belongsTo(User::class, 'approver_1');
    }

    public function approver2()
    {
        return $this->belongsTo(User::class, 'approver_2');
    }
}
