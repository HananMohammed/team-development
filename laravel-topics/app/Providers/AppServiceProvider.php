<?php

namespace App\Providers;

use App\Http\Controllers\MessageController;
use App\Models\User;
use App\Services\Contracts\MessageService;
use App\Services\Sql\EmailMessageService;
use App\Services\Sql\TextMessageService;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\ServiceProvider;
use Laravel\Cashier\Cashier;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
       // Cashier::ignoreMigrations();
        $this->app->when(MessageController::class)
            ->needs(MessageService::class)
            ->give(
                [
                    EmailMessageService::class,
                    TextMessageService::class,
                ]
            );
//            ->give(function ($app) {
//                return [
//                    $app->make(EmailMessageService::class),
//                    $app->make(TextMessageService::class),
//                ];
//            });

        $this->app->resolving(EmailMessageService::class, function ($transistor, $app) {
            // Called when container resolves objects of type "EmailMessageService"...
            Log::debug("Resolve Event on EmailMessageService Fired !!!!!!!!!!!!!!!!!!");
        });



    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Cashier::useCustomerModel(User::class);

        Cashier::calculateTaxes();
    }
}
