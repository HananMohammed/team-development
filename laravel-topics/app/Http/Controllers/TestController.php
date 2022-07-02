<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class TestController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  Request  $request
     * @return Response
     */
    public function __invoke(Request $request)
    {
        //dd( $_ENV );
        //dd(env('APP_DEBUG'));
       // dd(app()->environment());
/*        config(['app.timezone' => 'America/Chicago']);
        dd( config('app.timezone'));*/
    }
}
