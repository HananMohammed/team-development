<?php

use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Psr\Container\ContainerInterface;
use Inertia\Inertia;


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

Route::get('test/{id}', function ($id){
    dd($id);
});

Route::resource('users-test', UserController::class);
Route::get('users/{user}', function ($user){
    dd($user);
});

Route::get('/send', function (ContainerInterface $container) {
    $service = $container->get(\App\Services\Sql\TextMessageService::class);
    $service->send();
    return  'done';
    //
});

Route::get('/profile', function (){
    return  view('profile');
});

Route::get('cache/{id}', fn($id)=>\Illuminate\Support\Facades\Cache::get('user:'.$id));
////
//    Route::get('/', function () {
//        return Inertia::render('Welcome', [
//            'canLogin' => Route::has('login'),
//            'canRegister' => Route::has('register'),
//            'laravelVersion' => Application::VERSION,
//            'phpVersion' => PHP_VERSION,
//        ]);
//    });
////
//    Route::get('/dashboard', function () {
//        return Inertia::render('Dashboard');
//    })->middleware(['auth', 'verified'])->name('dashboard');
//
