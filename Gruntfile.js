module.exports = function(grunt){

  // Подключение модулей
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    /* вычищаем билд */
    clean: {
      build: ['build']
    },

    /* создание продуктовых файлов */
    copy:{
      build:{
        files:[{
          expand: true,
          src: [
            'font/**',
            'img/**',
            '*.html'
          ],
          dest: 'build'
        }]
      }
    },

    /* Компилируем CSS из LESS в продуктовую папку */
    less:{
      build:{
        files: {
          "css/style.css": "less/style.less"
        }
      }
    },

    /* Автопрефикс к готовому файлу */
    autoprefixer:{
      options:{
        browsers: ["last 10 versions", "ie 8", "ie 9"]
      },
      build:{
        src: "build/css/style.css"
      }
    },

    /* Делаем красивый CSS */
    csscomb:{
      build:{
        options:{
          config: "csscomb.json"
        },
        files: {
          "build/css/style.css": ["build/css/style.css"],
        }
      }
    },

    /* Еще версия компрессного кода */
    cssmin:{
      build:{
        options: {
          report: "gzip"
        },
        files:{
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },

    /* Собираем js */
    uglify:{
      build:{
        files:{
          "build/js/script.min.js": ["js/*.js"]
        }
      }
    },

    /* Оптимизируем картинки  */
    // imagemin:{
    //   build:{
    //     options: {
    //       optimizationLevel: 3
    //     },
    //     files: [{
    //       expand: true,
    //       src: ["build/img/**/*.{png, jpg, gif, svg}"]
    //     }]
    //   }
    // },

    /* watch */
    watch: {
      less: {
        files: ['**/*.less','*.html','**/*.js'],
        tasks: ['less' ],
        options: {
          spawn: false,
        },
      },
    }

  });

  // proj.registerTask("default",
  //   [
  //     "clean",
  //     "copy",
  //     "less",
  //     "autoprefixer",
  //     "csscomb",
  //     "cssmin",
  //     "uglify"
  //   ]
  // );

  grunt.registerTask("default",
    [
      "watch"
    ]
  );
}
