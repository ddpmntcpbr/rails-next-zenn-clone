class Api::V1::Current::ArticlesController < Api::V1::BaseController
  before_action :authenticate_user!

  def create
    unsaved_article = current_user.articles.unsaved.first || current_user.articles.create(status: :unsaved)
    render json: unsaved_article
  end


  def update
    article = current_user.articles.find(params[:id])
    article.update!(article_params)
    render json: article
  end

  private

    def article_params
      params.require(:article).permit(:title, :content, :status)
    end
end
