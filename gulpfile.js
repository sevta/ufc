var gulp = require('gulp') ,
 		sass = require('gulp-sass'),
 		autoPrefix = require('gulp-autoprefixer')


gulp.task('sass' , () => {
	return gulp.src('./**/*.sass')
		.pipe(autoPrefix({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('.css'))
})

gulp.task('watch' , () => {
	gulp.watch('./**/*.sass' , ['sass']);
})

gulp.task('default' , ['watch']);