// Generated on 2014-06-11 using generator-webapp 0.4.9
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths
    var config = {
        app: 'app',
        dist: 'dist',
        tmp: '.tmp'
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        config: config,

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['bowerInstall']
            },
            js: {
                files: ['<%= config.app %>/scripts/{,*/}*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: true
                }
            },
            jstest: {
                files: ['test/spec/{,*/}*.js'],
                tasks: ['test:watch']
            },
            gruntfile: {
                files: ['Gruntfile.js'],
                options: {
                    reload: true
                }
            },
            typescript: {
                files: ['<%= config.app %>/scripts/**/*.ts'],
                tasks: ['typescript:tmp', 'bower:tmp', 'requirejs:tmp']
            },
            react: {
                files: ['<%= config.app %>/scripts/**/*.jsx'],
                tasks: ['react:tmp']
            },            
            // sass: {
            //     files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
            //     tasks: ['sass:server', 'autoprefixer']
            // },
            styles: {
                files: ['<%= config.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= config.app %>/{,*/}*.html',
                    '<%= config.app %>/{,*/}*.*',
                    '.tmp/styles/{,*/}*.css',
                    '<%= config.app %>/images/{,*/}*'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                open: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [                          
                            connect.static('.tmp'),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static(config.app)
                        ];
                    }
                }
            },
            qunit: {
                options: {
                    open: true,
                    port: 9001,
                    middleware: function(connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect().use('app', connect.static(config.app)),
                            connect.static('qunit')
                        ];
                    }
                }
            },
            test: {
                options: {
                    open: false,
                    port: 9002,
                    middleware: function(connect) {
                        return [
                            connect.static('.tmp'),
                            connect.static('test'),
                            connect().use('/bower_components', connect.static('./bower_components')),
                            connect.static(config.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    base: '<%= config.dist %>',
                    livereload: false
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= config.dist %>/*',
                        '!<%= config.dist %>/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                '<%= config.app %>/scripts/{,*/}*.js',
                '!<%= config.app %>/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },

        // Mocha testing framework configuration options
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://<%= connect.test.options.hostname %>:<%= connect.test.options.port %>/index.html']
                }
            }
        },

        qunit: {
            all: {
                options:{
                    timeout: 5000,
                    urls: ['http://localhost:9001/index.html']
                }
            }
        },

        // Compiles Sass to CSS and generates necessary files if requested
        // sass: {
        //     options: {
        //         includePaths: [
        //             'bower_components'
        //         ]
        //     },
        //     dist: {
        //         files: [{
        //             expand: true,
        //             cwd: '<%= config.app %>/styles',
        //             src: ['*.scss'],
        //             dest: '.tmp/styles',
        //             ext: '.css'
        //         }]
        //     },
        //     server: {
        //         files: [{
        //             expand: true,
        //             cwd: '<%= config.app %>/styles',
        //             src: ['*.scss'],
        //             dest: '.tmp/styles',
        //             ext: '.css'
        //         }]
        //     }
        // },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },

        // Automatically inject Bower components into the HTML file
        bowerInstall: {
            app: {
                src: ['<%= config.app %>/index.html'],
                exclude: ['bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap.js']
            },
            sass: {
                src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}']
            }
        },

        // Renames files for browser caching purposes
        rev: {
            dist: {
                files: {
                    src: [
                        '<%= config.dist %>/scripts/{,*/}*.js',
                        '<%= config.dist %>/styles/{,*/}*.css',
                        '<%= config.dist %>/images/{,*/}*.*',
                        '<%= config.dist %>/styles/fonts/{,*/}*.*',
                        '<%= config.dist %>/*.{ico,png}'
                    ]
                }
            }
        },

        // convert jsx files to js
        react: {
            files: {
                expand: true,
                cwd: '<%= config.app %>/scripts',
                src: ['**/*.jsx'],
                dest: '<%= config.app %>/scripts/',
                ext: '.js'
            },
            tmp: {
                expand: true,
                cwd: '<%= config.app %>/scripts',
                src: ['**/*.jsx'],
                dest: '.tmp/scripts/',
                ext: '.js'
            }
        },
        // Run compiler on .ts files
        typescript: {
            options: {
                basePath: '<%= config.app %>/scripts',
                comments: true,
                module: 'amd',
                // sourceMap: true
            },
            amd: {
                src: ['<%= config.app %>/scripts/**/*.ts'],
                dest: '<%= config.app %>/scripts/typescript.js',
                options: { module: 'amd' }
            },
            dist: {
                src: ['<%= config.app %>/scripts/**/*.ts'],
                dest: '.tmp/concat/scripts/typescript.js',
                options: { module: 'amd' }
            },
            tmp: {
                src: ['<%= config.app %>/scripts/**/*.ts'],
                dest: '.tmp/scripts/',
                options: { module: 'amd' }
            }
        },

        // adds dependencies to requier config file
        bower: {
            target: {
                rjsConfig: '<%= config.app %>/scripts/config.js'
            },
            dist: {
                rjsConfig: '<%= config.app %>/scripts/main.js'
            },

            tmp: {
                rjsConfig: '.tmp/scripts/config.js'
            }
        },

        requirejs: {
            dist: {
                options: {
                    baseUrl        : '<%= config.app %>/scripts/',
                    name           : 'main',
                    mainConfigFile : '<%= config.app %>/scripts/main.js',
                    out            : '.tmp/concat/scripts/main.js',
                    removeCombined : true
                }
            },
            tmp: {
                options: {
                    baseUrl        : '.tmp/scripts/',
                    name           : 'config',
                    mainConfigFile : '.tmp/scripts/config.js',
                    out            : '.tmp/scripts/config.js',
                    removeCombined : true
                }
            }
        },        
        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            options: {
                dest: '<%= config.dist %>'
            },
            html: '<%= config.app %>/index.html'
        },

        // Performs rewrites based on rev and the useminPrepare configuration
        usemin: {
            options: {
                assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
            },
            html: ['<%= config.dist %>/{,*/}*.html'],
            css: ['<%= config.dist %>/styles/{,*/}*.css']
        },

        // The following *-min tasks produce minified files in the dist folder
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.{gif,jpeg,jpg,png}',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= config.app %>/images',
                    src: '{,*/}*.svg',
                    dest: '<%= config.dist %>/images'
                }]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseBooleanAttributes: true,
                    collapseWhitespace: true,
                    removeAttributeQuotes: true,
                    removeCommentsFromCDATA: true,
                    removeEmptyAttributes: true,
                    removeOptionalTags: true,
                    removeRedundantAttributes: true,
                    useShortDoctype: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= config.dist %>',
                    src: '{,*/}*.html',
                    dest: '<%= config.dist %>'
                }]
            }
        },

        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //     dist: {
        //         files: {
        //             '<%= config.dist %>/styles/main.css': [
        //                 '.tmp/styles/{,*/}*.css',
        //                 '<%= config.app %>/styles/{,*/}*.css'
        //             ]
        //         }
        //     }
        // },
        // uglify: {
        //     dist: {
        //         files: {
        //             '<%= config.dist %>/scripts/scripts.js': [
        //                 '<%= config.dist %>/scripts/scripts.js'
        //             ]
        //         }
        //     }
        // },
        // concat: {
        //     dist: {}
        // },

        // Copies remaining files to places other tasks can use
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= config.app %>',
                    dest: '<%= config.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'styles/fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true,
                    dot: true,
                    cwd: '.',
                    src: ['bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap/*.*'],
                    dest: '<%= config.dist %>'
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '<%= config.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            }
        },

        // Generates a custom Modernizr build that includes only the tests you
        // reference in your app
        modernizr: {
            dist: {
                devFile: 'bower_components/modernizr/modernizr.js',
                outputFile: '<%= config.dist %>/scripts/vendor/modernizr.js',
                files: {
                    src: [
                        '<%= config.dist %>/scripts/{,*/}*.js',
                        '<%= config.dist %>/styles/{,*/}*.css',
                        '!<%= config.dist %>/scripts/vendor/*'
                    ]
                },
                uglify: true
            }
        },

        // Run some tasks in parallel to speed up build process
        concurrent: {
            server: [
                // 'sass:server',
                'copy:styles'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'sass',
                'copy:styles',
                'imagemin',
                'svgmin'
            ]
        }
    });


    grunt.registerTask('serve', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'react:tmp',
            'typescript:tmp',
            'bower:tmp', 
            'requirejs:tmp',           
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    //start a qunit test
    grunt.registerTask('qtest', function (target) {
        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'react:tmp',
            'typescript:tmp',
            'bower:tmp', 
            'requirejs:tmp',           
            'autoprefixer',
            'connect:qunit',
            'qunit',
            'watch'           
        ]);
    });

    grunt.registerTask('server', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run([target ? ('serve:' + target) : 'serve']);
    });

    grunt.registerTask('test', function (target) {
        if (target !== 'watch') {
            grunt.task.run([
                'clean:server',
                'concurrent:test',
                'autoprefixer'
            ]);
        }

        grunt.task.run([
            'connect:test',
            'mocha'
        ]);
    });

    //on build there are some problems with require...
    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'concat',
        'cssmin',
        'uglify',
        'copy:dist',
        'modernizr',
        'rev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
