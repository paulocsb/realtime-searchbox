class Article < ActiveRecord::Base
	searchkick word_start: [:title]
end
