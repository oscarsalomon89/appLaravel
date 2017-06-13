<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Redirect;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    public function showLoginForm()
    {
        // Verificamos que el usuario no esté autenticado
        if (Auth::check())
        {
            // Si está autenticado lo mandamos a la raíz donde estara el mensaje de bienvenida.
            return Redirect::to('/clientes');
        }
        // Mostramos la vista login.blade.php (Recordemos que .blade.php se omite.)
        return view('auth.login');
    }

    public function login(Request $request){
        // Guardamos en un arreglo los datos del usuario.
        $userdata = array(
            'name' => $request->input('user'),
            'password'=> $request->input('password')
        );
        // Validamos los datos y además mandamos como un segundo parámetro la opción de recordar el usuario.
        if(Auth::attempt($userdata, $request->input('remember', 0))){
            // De ser datos válidos nos mandara a la bienvenida
            return response()->json(['error'=> false, 'token'=> $request->input('user')]);
        }
        // En caso de que la autenticación haya fallado manda un mensaje al formulario de login y también regresamos los valores enviados con withInput().
        return response()->json(['error'=> true, 'msg'=> 'Tus datos son incorrectos']);
    }

    public function logOut(){
        Auth::logout();
        return Redirect::to('login');
    }
}
