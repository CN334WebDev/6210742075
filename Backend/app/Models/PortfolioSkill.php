<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PortfolioSkill extends Model
{
    use HasFactory;
    protected $table = 'portfolio_skill';
    protected $fillable = ['skill', 'skill1', 'skill2', 'skill3', 'skill4', 'skill5',
                            'skill6', 'skill7', 'skill8', 'skill9'];
}
