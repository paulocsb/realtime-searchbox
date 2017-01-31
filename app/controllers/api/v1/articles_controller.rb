module Api::V1
  class ArticlesController < ApiController

    def index
      render json: Article.all
    end

  end
end