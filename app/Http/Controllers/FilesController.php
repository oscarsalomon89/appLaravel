<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Intervention\Image\ImageManagerStatic as Image;

class FilesController extends Controller
{
    public function upload(Request $request){

        // $validator = Validator::make($request->all(), [
        //     'image' => 'required|mimes:jpeg,jpg,png'
        // ]);

        // if ($validator->fails()) {
        //    return response()->json(['errors'=>$validator->errors()]);
        // } else {
            $imageData = $request->get('image');            
            $fileName = Carbon::now()->timestamp . '_' . uniqid() . '.' . explode('/', explode(':', substr($imageData, 0, strpos($imageData, ';')))[1])[1];
            
            Image::make($request->get('image'))->save(public_path('img/').$fileName);

            return response()->json(['error'=>false]);
        //}
    }    
    
}