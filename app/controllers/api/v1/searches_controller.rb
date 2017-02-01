module Api::V1
  class SearchesController < ApiController

    def index
    	render json: Search.all
    end

    def clear
    	Search.destroy_all
    	render json: Search.all
    end

  end
end