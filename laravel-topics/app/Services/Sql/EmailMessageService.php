<?php

namespace App\Services\Sql;

use App\Services\Contracts\MessageService;
use Illuminate\Support\Facades\Log;

class EmailMessageService implements MessageService
{
    public function __construct()
    {
        Log::debug("Constructing EmailMessageService");
    }

    public function send()
    {
        Log::debug("Sending Message Via Email");
    }
}
