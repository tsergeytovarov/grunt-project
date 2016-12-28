/*
  Author - Sergey Popov.
  Author URI: http://sergeypopov.name
  Author social: https://www.facebook.com/sergeytovarov
  Author email: tovarov.piter@gmail.com
  From Russia with love!
*/

'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);
  grunt.initConfig({

    clean: {
      build: [
        'build/css',
        'build/img',
        'build/js',
        'build/font'
      ]
    },

    copy: {
      img: {
        expand: true,
        cwd: 'src/img/',
        src: ['**/*.{png,jpg,gif,svg}'],
        dest: 'build/img/'
      },
      fonts: {
        expand: true,
        cwd: 'src/font/',
        src: ['*.{eot,svg,woff,ttf}'],
        dest: 'build/font/'
      },
      html: {
        expand: true,
        cwd: 'src/',
        src: ['*.html'],
        dest: 'build/'
      }
    },

    htmllint: {
      all: ["build/*.html"]
    },

    sass: {
      dist: {
        options: {
          sourcemap: 'inline',
          style: 'expanded'
        },
        files: {
          'build/css/style.css': 'src/sass/style.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 15 versions', 'ie 9', 'ie 10'],
        map: true
      },
      style: {
        src: 'build/css/style.css'
      }
    },

    csscomb: {
      style: {
        options: {
          config: '.csscomb.json'
        },
        files: {
          'build/css/style.css': ['build/css/style.css']
        }
      }
    },

    cmq: {
      options: {
        log: false
      },
      your_target: {
        files: {
          'build/css/style.css': ['build/css/style.css']
        }
      }
    },

    csslint: {
      options: {
        csslintrc: '.stylelinterc'
      },
      strict: {
        options: {
          import: 2
        },
        src: ['build/css/style.css']
      }
    },

    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0
        },
        files: {
          'build/css/style.min.css': ['build/css/style.css']
        }
      }
    },

    concat: {
      dist: {
        src: ['src/js/*.js'],
        dest: 'build/js/script.js'
      }
    },

    babel: {
      options: {
        sourceMap: true,
        presets: ['babel-preset-es2015']
      },
      dist: {
        files: {
          'build/js/script.js': 'build/js/script.js'
        }
      }
    },

    uglify: {
      start: {
        files: {
          'build/js/script.min.js': ['build/js/script.js']
        }
      }
    },

    imagemin: {
      build: {
        options: {
          optimizationLevel: 4
        },
        files: [{
          expand: true,
          src: ['build/img/*.{png,jpg,gif,svg}']
        }]
      }
    },

    watch: {
      style: {
        files: ['src/sass/**/*.scss'],
        tasks: ['style'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      scripts: {
        files: ['src/js/**/*.js'],
        tasks: ['js'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      images: {
        files: ['src/img/**/*.{png,jpg,gif,svg}'],
        tasks: ['img'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      html: {
        files: ['src/**/*.html'],
        tasks: ['copy:html'],
        options: {
          spawn: false,
          livereload: true
        }
      },
      fonts: {
        files: ['src/font/*.{eot,svg,woff,ttf}'],
        tasks: ['copy:fonts'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    },

    browserSync: {
      dev: {
        bsFiles: {
          src: [
            'build/css/*.css',
            'build/js/*.js',
            'build/fonts/**',
            'build/img/**/*.{png,jpg,gif,svg}',
            'build/**/*.html'
          ]
        },
        options: {
          watchTask: true,
          server: {
            baseDir: 'build/'
          },
          startPath: '/index.html',
          ghostMode: {
            clicks: true,
            forms: true,
            scroll: false
          }
        }
      }
    }
  });

  grunt.registerTask('default', [
    'clean',
    'copy',
    'sass',
    'autoprefixer',
    'cssmin',
    'concat',
    'babel',
    'uglify',
    'browserSync',
    'watch'
  ]);

  grunt.registerTask('build', [
    'clean',
    'copy',
    'sass',
    'cmq',
    'autoprefixer',
    'csscomb',
    'cssmin',
    'concat',
    'babel',
    'uglify',
    'imagemin'
  ]);

  grunt.registerTask('lint', [
    'htmllint',
    'csslint'
  ]);

  grunt.registerTask('style', [
    'sass',
    'cmq',
    'autoprefixer',
    'csscomb',
    'cssmin'
  ]);

  grunt.registerTask('js', [
    'concat',
    'babel',
    'uglify'
  ]);

  grunt.registerTask('img', [
    'copy:img',
    'imagemin'
  ]);
};
