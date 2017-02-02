class AnalyticsJob < ApplicationJob
  queue_as :default

  def perform(data)
    ActionCable.server.broadcast "analytics_search", data
  end
end
