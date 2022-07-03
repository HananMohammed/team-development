<?php

use App\Http\Controllers\MessageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
//use App\Classes\StreamLab;
use Facades\App\Classes\StreamLab;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {

    return $request->user();
});
Route::get('/send', [MessageController::class, 'send']);

/*//Normal Class Call
Route::get('/streamLab', function (){
    $streamLab = new StreamLab();
    return $streamLab->doTask();
});
*/

//generate a real-time facade
Route::get('/streamLab', function (){

    return StreamLab::doTask();
});
