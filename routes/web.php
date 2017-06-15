<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});

Route::get('/inicio', 'HomeController@index')->name('clientes');

Route::group(['middleware' => ['api']], function () {
    Route::post('/api/register','Auth\AuthController@register');

    Route::post('/api/signin', [
        'uses' => 'Auth\AuthController@signin',
    ]);

    Route::group(['middleware' => 'jwt.auth'], function () {
        Route::get('/api/user', [
            'uses' => 'UserController@index',
        ]);
    });

});

//Auth::routes();
/*Route::post('/login','Auth\LoginController@login');
Route::get('/logout','Auth\LoginController@logOut');*/
Route::get('/clientes', 'HomeController@index')->name('clientes');

Route::get('/login','HomeController@index');
Route::get('/about','HomeController@index');
Route::get('/api/users','UserController@getUsers');
