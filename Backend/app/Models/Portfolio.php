<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Portfolio extends Model
{
    use HasFactory;
    protected $table = 'portfolio';
    protected $fillable = ['name', 'age', 'gender', 'email', 'phone_number', 'address', 'nation', 'photo', 'gpa', 'about_me', 'skill', 'project', 'viedolink', 'experience'];
}
