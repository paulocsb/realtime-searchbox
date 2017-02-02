def system!(*args)
  system(*args) || abort("\n== Command #{args} failed ==")
end

task :init do
	puts '----------------------------------------------------'
	puts 'Initializing Application (Bundle and React Client)'
	puts '----------------------------------------------------'
	system! 'bundle install && cd client && npm i && cd ..'
	
	puts '----------------------------------------------------'
	puts 'Setup database and Elasticsearch'
	puts '----------------------------------------------------'
  system! 'bin/rails db:setup && rake searchkick:reindex CLASS=Article'
end