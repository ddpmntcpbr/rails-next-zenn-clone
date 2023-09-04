module Pagination
  extend ActiveSupport::Concern

  def pagination(records)
    {
      current_page: records.current_page, # 現在のページ数
      total_pages: records.total_pages, # 全体のページ数
    }
  end
end
