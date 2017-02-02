class Search < ActiveRecord::Base
	after_commit :broadcast

	private
	
	  def broadcast
	    AnalyticsJob.perform_later self
	  end
end
