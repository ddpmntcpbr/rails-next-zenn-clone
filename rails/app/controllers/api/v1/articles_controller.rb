class Api::V1::ArticlesController < Api::V1::BaseController
  include Pagination

  def index
    articles = Article.published.order(created_at: :desc).page(params[:page] || 1).per(10).includes(:user)
    render json: articles, meta: pagination(articles), adapter: :json
  end

  def show
    article = Article.published.find(params[:id])
    render json: article
  end
end
