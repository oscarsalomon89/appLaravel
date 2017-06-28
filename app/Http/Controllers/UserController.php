<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function index(Request $request)
    {
        $data = [];
        $data['name'] = $request->user()->name;
        $data['rol'] = $request->user()->rol;
        return response()->json([
            'data' => $data,
        ]);
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function getUsers(){
        $users = DB::table('users')->get();
        return $users;
    }
}
