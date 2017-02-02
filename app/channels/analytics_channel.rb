class AnalyticsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "analytics_search"
  end

  def unsubscribed
  end
end