<?php

namespace App\Http\Controllers;

use App\Models\PortfolioSkill;
use Illuminate\Http\Request;

class ApiSkillController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // send all data back
        return response()->json(['data' => PortfolioSkill::all()]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $portfolioSkill = new PortfolioSkill();
        
        $portfolioSkill->skill = $request->input('skill');
        $portfolioSkill->skill1 = $request->input('skill1');
        $portfolioSkill->skill2 = $request->input('skill2');
        $portfolioSkill->skill3 = $request->input('skill3');
        $portfolioSkill->skill4 = $request->input('skill4');
        $portfolioSkill->skill5 = $request->input('skill5');
        $portfolioSkill->skill6 = $request->input('skill6');
        $portfolioSkill->skill7 = $request->input('skill7');
        $portfolioSkill->skill8 = $request->input('skill8');
        $portfolioSkill->skill9 = $request->input('skill9');

        $portfolioSkill->save();
        return response()->json($portfolioSkill);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // 
        $portfolioSkill = new PortfolioSkill();
        
        $portfolioSkill->skill = $request->skill;
        $portfolioSkill->skill1 = $request->skill1;
        $portfolioSkill->skill2 = $request->skill2;
        $portfolioSkill->skill3 = $request->skill3;
        $portfolioSkill->skill4 = $request->skill4;
        $portfolioSkill->skill5 = $request->skill5;
        $portfolioSkill->skill6 = $request->skill6;
        $portfolioSkill->skill7 = $request->skill7;
        $portfolioSkill->skill8 = $request->skill8;
        $portfolioSkill->skill9 = $request->skill9;

        return response()->json(['name' => 'update', 'status' => $portfolioSkill->save(),  'payload' => $request->all(), 'id' => $id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $portfolioSkill = PortfolioSkill::find($id);
        return response()->json(['name' => 'destroy', 'status' => $portfolioSkill->delete(), 'id' => $id]);
    }
}
