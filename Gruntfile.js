module.exports = function(grunt) {

    grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		 */
		sass: {
		  dev: {
		    options: {
		      style: 'expanded',
		      sourcemap: 'none',
		    },
		    files: {
		      'style.css': '**/*.scss'
		    }
		  }
		},
		// imagine
		imagemin: {
	    	dynamic: {
	        	files: [{
	            	expand: true,
	            	cwd: 'images/',
	            	src: ['**/*.{png,jpg,gif}'],
	            	dest: 'images/build/'
	        	}],
	    	},
		},
	  	// browserSync
	  	
	  	browserSync: {
            dev: {
                bsFiles: {
                    src : [
                        'app/css/*.css',
                        'app/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './app'
                }
            }
        },

     

	  	/**
	  	 * Watch
	  	 */
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		},

	});

    grunt.loadNpmTasks('grunt-browser-sync');

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-imagemin')
	
	grunt.registerTask('default', ['sass','imagemin', 'browserSync','watch']);
	
}