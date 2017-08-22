<?php

namespace App\Http\Controllers;

use App\User;
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

    public function deleteUser(Request $request){
        $res = User::destroy($request->id);
        return $res;
    }

    public function updateUser(Request $request){
        $user = User::find($request->id);

        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);

        $user->save();
        return response()->json([
                'user' => $user
            ], 200);
    }
}
