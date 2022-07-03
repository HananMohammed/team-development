<?php

namespace App\Classes;

class StreamLab
{
    protected $task;

    public function __construct()
    {
        $this->task = 'Say Hi';
    }

    public function doTask()
    {
        return $this->task;
    }
}
