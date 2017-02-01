require "rails_helper"

RSpec.describe Api::V1::SearchesController, type: :routing do
  describe "routing /v1/searches" do
  	it "routes to #index" do
      expect(:get => "/v1/searches").to route_to("api/v1/searches#index")
    end
  end
end
