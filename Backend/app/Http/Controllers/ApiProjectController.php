<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PortfolioProject;


class ApiProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // send all data back
        return response()->json(['data' => PortfolioProject::all()]);    
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $portfolioProject = new PortfolioProject();
        
        $portfolioProject->title = $request->input('title');
        $portfolioProject->description = $request->input('description');
        $portfolioProject->url = $request->input('url');

        $portfolioProject->save();
        return response()->json($portfolioProject);
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
        $portfolioProject = PortfolioProject::find($id);
        return response()->json(['name' => 'show', 'id' => $id, 'portfolio' => $portfolioProject]);    
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
        $portfolioProject = new PortfolioProject();

        $portfolioProject->title = $request->title;
        $portfolioProject->description = $request->description;
        $portfolioProject->url = $request->url;

        return response()->json(['name' => 'update', 'status' => $portfolioProject->save(),  'payload' => $request->all(), 'id' => $id]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $portfolioProject = PortfolioProject::find($id);
        return response()->json(['name' => 'destroy', 'status' => $portfolioProject->delete(), 'id' => $id]);    
    }
}

