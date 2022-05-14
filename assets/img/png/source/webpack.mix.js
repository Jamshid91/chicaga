const mix = require('laravel-mix');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/assets/js')
    .postCss('resources/css/app.css', 'public/assets/css')
    .options({
        postCss: [
            require('tailwindcss'),
            require('postcss-discard-comments')({
                removeAll: true
            })
        ],
    })
    .purgeCss({
        enabled: mix.inProduction(),
        content: [
            './storage/framework/views/*.php',
            './resources/**/*.blade.php',
            './resources/**/*.js',
            './resources/**/*.vue',
        ],
    });
;
