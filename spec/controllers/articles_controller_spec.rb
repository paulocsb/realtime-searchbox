require 'rails_helper'

RSpec.describe Api::V1::ArticlesController, type: :controller do

  let(:valid_attributes) {
    skip("Add a hash of attributes valid for your model")
  }

  let(:invalid_attributes) {
    skip("Add a hash of attributes invalid for your model")
  }

  let(:valid_session) { {} }

  describe "GET #index" do
    it "assigns all articles as @articles" do
      # article = Article.create! valid_attributes
      # get :index, params: {}, session: valid_session
      # expect(assigns(:articles)).to eq([article])
    end
  end

end