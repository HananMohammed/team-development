<?php

use App\Http\Controllers\UserController;
use App\Models\Post;
use App\Models\User;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
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
Route::get('/users/{user}/posts/{post}', function (User $user, Post $post) {
    return $post;
})->missing(function (Request $request) {
    return dd("OKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK");
});

Route::get('test/{id}', function ($id) {
    dd($id);
});

Route::resource('users-test', UserController::class);
Route::get('users/{user:email}', function (\App\Models\User $user) {
    dd($user);
});
/*Route::get('/posts/{post:slug}', function (Post $post) {
    return $post;
});*/
Route::get('/send', function (ContainerInterface $container) {
    $service = $container->get(\App\Services\Sql\TextMessageService::class);
    $service->send();
    return 'done';
    //
});

Route::get('/profile', function () {
    return view('profile');
});

Route::get('cache/{id}', fn($id) => \Illuminate\Support\Facades\Cache::get('user:' . $id));

Route::redirect('/here', '/send', 301);
Route::permanentRedirect('/hi', '/send', 301);

Route::view('/welcome', 'welcome', ['id' => '1']);
Route::get('/home/{id}', fn($id) => [
    'id' => $id
])->where('id', '[0-9]+');
Route::get('/posts/{post}/comments/{comment}', function ($postId, $commentId) {
    return [
        'post_id' => $postId,
        'comment_id' => $commentId
    ];
});

//Optional Parameters
Route::get('/user/{name?}', function ($name = 'John') {
    return $name;
});


//Regular Expression Constraints
/*Route::get('/user/{id}/{name}', function ($id, $name) {
    return [
        'id' => $id,
        'name' => $name
    ];
})->where(['id' => '[0-9]+', 'name' => '[A-Za-z]+']);*/

// regular expression patterns have helper methods that allow you to quickly add pattern constraints to your routes
Route::get('/user/{id}/{name}', function ($id, $name) {
    return [
        'id' => $id,
        'name' => $name
    ];
})->whereNumber('id')->whereAlphaNumeric('name');

Route::get('/user/{ids}', function ($id) {
    return [
        'id' => $id,
    ];
})->whereUuid('ids');

Route::get('/search/{search}', function ($search) {
    return $search;
})->where('search', '.*');

Route::group(['middleware' => 'default.locale', 'prefix' => 'en'], function ($q) {
    Route::get('/user-test/{id}/profile', function ($id) {
        dd(route('profile', ['id' => 1, 'photos' => 'yes']));
    })->name('profile');
});

Route::domain('{account}.example.com')->group(function () {
    Route::get('user/{id}', function ($account, $id) {
        //
    });
});

Route::name('admin.')->group(function () {
    Route::get('/admin-users', function () {
        dd(route('admin.users'));
        // Route assigned name "admin.users"...
    })->name('users');
});

Route::middleware(['throttle:uploads'])->group(function (){
    Route::get('uploads', fn()=>dd("UP"));
});

//
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
