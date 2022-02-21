<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // send all data back
        return response()->json(['data' => Portfolio::all()]);
    }
  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request  $request
   * @return \Illuminate\Http\Response
   */
    public function store(Request $request)
    {
        $portfolios = new Portfolio();
        
        $portfolios->name = $request->input('name');
        $portfolios->age = $request->input('age');
        $portfolios->gender = $request->input('gender');
        $portfolios->email = $request->input('email');
        $portfolios->phone_number = $request->input('phone_number');
        $portfolios->address = $request->input('address');
        $portfolios->nation = $request->input('nation');
        $portfolios->photo = $request->input('photo');
        $portfolios->gpa = $request->input('gpa');
        $portfolios->about_me = $request->input('about_me');
        $portfolios->skill = $request->input('skill');
        $portfolios->project = $request->input('project');
        $portfolios->viedolink = $request->input('viedolink');
        $portfolios->experience = $request->input('experience');

        $portfolios->save();
        return response()->json($portfolios);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $portfolio = Portfolio::find($id);
        return response()->json(['name' => 'show', 'id' => $id, 'portfolio' => $portfolio]);    
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
        $portfolio = Portfolio::find($id);

        $portfolio->name = $request->name;
        $portfolio->age = $request->age;
        $portfolio->gender = $request->gender;
        $portfolio->email = $request->email;
        $portfolio->phone_number = $request->phone_number;
        $portfolio->address = $request->address;
        $portfolio->nation = $request->nation;
        $portfolio->photo = $request->photo;
        $portfolio->gpa = $request->gpa;
        $portfolio->about_me = $request->about_me;
        $portfolio->skill = $request->skill;
        $portfolio->project = $request->project;
        $portfolio->viedolink = $request->viedolink;
        $portfolio->experience = $request->experience;

        return response()->json(['name' => 'update', 'status' => $portfolio->save(),  'payload' => $request->all(), 'id' => $id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $portfolio = Portfolio::find($id);
        return response()->json(['name' => 'destroy', 'status' => $portfolio->delete(), 'id' => $id]);    
    }
}
