<?php

namespace App\Http\Controllers;

use App\Services\Contracts\MessageService;
use Illuminate\Http\Request;

class MessageController extends Controller
{

    /**
     * The MessageService instance.
     *
     * @var MessageService
     */
    private $services;

    /**
     * Create a new controller instance.
     *
     * @param  MessageService  ...$messageService
     * @return void
     */
    public function __construct(MessageService  ...$messageService)
    {
        $this->services = $messageService;
    }

    public function send(){
        foreach ($this->services as $service){
            $service->send();
        }
        return[
            'status' => "OK"
        ];
    }

}
