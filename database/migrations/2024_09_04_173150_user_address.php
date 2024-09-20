<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\{User, State, City};

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_address', function (Blueprint $table) {
            $table->bigInteger('id')->unsigned();
            // $table->foreignId('state_id')->foreignIdFor(State::class)->constrained();
            $table->foreignId('user_id')->foreignIdFor(User::class)->constrained();
            $table->string('address_line_1')->nullable();
            $table->string('address_line_2')->nullable();
            $table->foreignId('city_id')->foreignIdFor(City::class)->constrained();
            $table->string('postal_code')->nullable();
            $table->integer('mobile', 12)->nullable();
            $table->tinyInteger('is_default')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_address');
    }
};
