require 'rails_helper'

RSpec.describe Api::V1::ArticlesController, type: :controller do

  describe "GET #index" do
    
    before(:each) do
      FactoryGirl.create_list(:article, 4)
    end

    it "index method should have sucess result" do
      get :index
      expect(response).to have_http_status(:success)
    end

  end
end