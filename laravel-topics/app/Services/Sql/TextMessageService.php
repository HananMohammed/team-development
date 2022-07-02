<?php

namespace App\Services\Sql;

use App\Services\Contracts\MessageService;
use Illuminate\Support\Facades\Log;

class TextMessageService implements MessageService
{
    public function __construct()
    {
        Log::debug("Constructing TextMessageService");
    }

    public function send()
    {
        Log::debug("Sending Message Via Text");
    }
}
