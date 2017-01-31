module Api::V1
  class ArticlesController < ApiController

    def index
    	if params[:query].present?
    		articles = Article.search params[:query]
    		render json: articles
    	else
      	render json: Article.all
      end
    end

  end
end