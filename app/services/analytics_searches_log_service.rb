class AnalyticsSearchesLogService
	
	def initialize(ip_address, query)	
		search = Search.find_by(query: query)
		if search.nil?
			Search.create(
			  ip_address: ip_address,
			  query: query,
			  searches_count: 1
			)
		else
			search.update_columns(searches_count: search.searches_count + 1)
		end
	end

end