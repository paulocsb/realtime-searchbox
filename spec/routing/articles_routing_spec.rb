require "rails_helper"

RSpec.describe Api::V1::ArticlesController, type: :routing do
  describe "routing /v1/articles" do
  	it "routes to #index" do
      expect(:get => "/v1/articles").to route_to("api/v1/articles#index")
    end
  end
end
