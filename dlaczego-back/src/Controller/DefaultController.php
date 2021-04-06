<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;

class DefaultController
{
    public function home()
    {
        return new Response(
            '<html><body>strona main</body></html>'
        );
    }

    // searchbar
    public function search()
    {
        //TODO
    }

}